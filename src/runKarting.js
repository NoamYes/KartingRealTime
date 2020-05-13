const GetDataAndProcess = require('./util/getDataAndProcess');
const dataSync = require('./util/data_synchronizeData');
const fn = require('./config/fieldNames');
const p = require('./config/paths');
const { sendLog, logLevel } = require('./util/logger');
const Auth = require('./auth/auth');
const schedule = require('node-schedule');
const PromiseAllWithFails = require('./util/generalUtils/promiseAllWithFails');
const logDetails = require('./util/logDetails');
const connectToRedis = require('./util/generalUtils/connectToRedis');

module.exports = async (runnigType, dataSource, data_) => {
    try {
        const redis = await connectToRedis();

        // check if the root hierarchy exist and adding it if not
        await Auth.axiosKartoffel.get(p(encodeURIComponent(fn.rootHierarchy.ourCompany)).KARTOFFEL_HIERARCHY_EXISTENCE_CHECKING_BY_DISPLAYNAME_API)
            .then((result) => {
                sendLog(logLevel.info, logDetails.info.INF_ROOT_EXSIST, result.data.name);
            })
            .catch(async () => {
                await Auth.axiosKartoffel.post(p().KARTOFFEL_ADDGROUP_API, { name: fn.rootHierarchy.ourCompany })
                    .then((result) => {
                        sendLog(logLevel.info, logDetails.info.INF_ADD_ROOT, result.data.name);
                    })
                    .catch((err) => {
                        let errorMessage = (err.response) ? err.response.data.message : err.message;
                        sendLog(logLevel.error, logDetails.error.ERR_ADD_ROOT, errorMessage);
                    })
            });

        // get the new json from aka & save him on the server
        let aka_data = await dataSync(fn.dataSources.aka, runnigType);

        if (runnigType == fn.runnigTypes.immediateRun) {
            await PromiseAllWithFails([
                // GetDataAndProcess(fn.dataSources.aka, aka_data),
                GetDataAndProcess(dataSource, aka_data, runnigType, dataSync, data_),
            ]);
        }
        else {
            await PromiseAllWithFails([
                GetDataAndProcess(fn.dataSources.aka, aka_data),
                GetDataAndProcess(fn.dataSources.es, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.ads, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.adNN, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.lmn, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.mdn, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.mm, aka_data, runnigType, dataSync),
                GetDataAndProcess(fn.dataSources.city, aka_data, runnigType, dataSync),
            ]);
        }


        if (redis && redis.status === 'ready') redis.quit();
    } catch (err) {
        sendLog(logLevel.error, logDetails.error.ERR_UN_HANDLED_ERROR, runnigType, JSON.stringify(err));
    }
}