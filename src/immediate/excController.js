
const fn = require('../config/fieldNames');
const GetDataAndProcess = require('../util/getDataAndProcess');
const runKarting = require('../runKarting');
const dataSync = require('../util/data_synchronizeData');

module.exports =  class excController {
    static async sendUsers(req, res) {
        const data = req.body;
        const objects = data.objects;
        const dataSource = data.datasource;
        // akaData = {} empty as we currently dont catch it
        await runKarting(fn.runnigTypes.immediateRun, dataSource, objects);
        console.log(req.body)
        res.json(req.body)
    }
}
