/**
 *
 * @param {*} dataSource - The source of the data
 * @param {*} akaData - The aka data to complete data information
 * @param {*} func - The function thet get and compare data from data source
 */
module.exports = async (dataSource, akaData, runnigType, func, data_) => {
    // In case datasource is aka, I get data before function and therefore not need to get data again
    let data = func ? await func(dataSource, runnigType, data_) : akaData;
    await diffsHandler(data, dataSource, akaData.all);
}
