
const fn = require('../config/fieldNames');
const scheduler = require('../schedule');
const dataSync = require('../util/data_synchronizeData');

module.exports =  class excController {
    static async sendUsers(req, res) {
        const data = req.body;
        const persons = data.objects;
        const datasource = data.datasource;
        await scheduler.GetDataAndProcess(dataSource, {}, fn.runnigTypes.immediateRun, dataSync);
        console.log(req.body)
        res.json(req.body)
    }
}
