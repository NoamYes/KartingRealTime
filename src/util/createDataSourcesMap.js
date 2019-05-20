const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: 'src/config/dataSourcesMap.xlsx',
    columnToKey: {
        A: 'es',
        B: 'nn',
        C: "nv",
        D: "ads"
    }
});

const dataSourcesMap = new Map();
result.dataSources.map((obj) => {
    obj["es"] ? dataSourcesMap.set(obj["es"].replace(new RegExp("\"", 'g')," "), "es") : null;
    obj["nn"] ? dataSourcesMap.set(obj["nn"].replace(new RegExp("\"", 'g')," "), "nn") : null;
    obj["nv"] ? dataSourcesMap.set(obj["nv"].replace(new RegExp("\"", 'g')," "), "nv") : null;
    obj["ads"] ? dataSourcesMap.set(obj["ads"].replace(new RegExp("\"", 'g')," "), "ads") : null;
})

module.exports = dataSourcesMap;