const p = require('../config/paths');
const logger = require('./logger');
const Auth = require('../auth/auth');

/**
 * This module create the non exist hierarchies and return the objectID of the last hierarchy.
 *
 * @param {*} hierarchy_obj Object from Kartoffel that contain the name of the organizationGroups as keys and their ObjectID as values or null if they not exist
 * @param {*} hierarchy The Hierarchies description concatenated by '/'
 * @returns ObjectID of the last hierarchy
 */
module.exports = async (hierarchy_obj, hierarchy) => {
    let hierarchy_arr = hierarchy.split('/');
    let hierarchyAfterProcess;
    let lastGroupID
    for ([index, group] of hierarchy_arr.entries()) {
        (index === 0) ? hierarchyAfterProcess = group : hierarchyAfterProcess = hierarchyAfterProcess.concat('/', group);
        if (!hierarchy_obj[hierarchyAfterProcess]) {
            let new_group = {
                name: group,
                parentId: lastGroupID,
            }

            await Auth.axiosKartoffel.post(p().KARTOFFEL_ADDGROUP_API, new_group)
                .then((result) => {
                    hierarchy_obj[hierarchyAfterProcess] = result.data.id;
                    logger.info(`success to add the hierarchy "${hierarchyAfterProcess}" to Kartoffel`);

                })
                .catch((error) => {
                    logger.error(`failed to add the hierarchy "${hierarchyAfterProcess}" to Kartoffel. the error message: "${error.response.data.message}"`);
                })
        }

        lastGroupID = hierarchy_obj[hierarchyAfterProcess];
    }
    return lastGroupID;
}