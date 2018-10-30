const fn = require('./fieldNames');

const kartoffelUrl = fn.kartoffelUrl;

module.exports = pathsHandler = (param)=>{
    return {
        // Data source
        AKA_TELEPHONES_API:"http://localhost:3001/getAkaTelephone",
        AKA_EMPLOYEES_API:"http://localhost:3001/getAkaEmployees",
        NV_API : 'http://localhost:3001/getNva',
        ES_API : 'http://localhost:3001/getEightSocks',
        
        // Kartoffel - person
        KARTOFFEL_UPDATE_PERSON_API : `${kartoffelUrl}/api/persons/${param}`,
        KARTOFFEL_PERSON_API : `${kartoffelUrl}/api/persons/`,
        KARTOFFEL_PERSON_EXISTENCE_CHECKING_BY_PN_API : `${kartoffelUrl}/api/persons/personalNumber/${param}`,
        KARTOFFEL_PERSON_EXISTENCE_CHECKING_BY_TZ_API : `${kartoffelUrl}/api/persons/identityCard/${param}`,

        // Kartoffel - group
        KARTOFFEL_ADDGROUP_API : `${kartoffelUrl}/api/organizationGroups/`,
        KARTOFFEL_HIERARCHY_EXISTENCE_CHECKING_API : `${kartoffelUrl}/api/organizationGroups/path/${param}/hierarchyExistenceChecking`,
        KARTOFFEL_HIERARCHY_EXISTENCE_CHECKING_BY_DISPLAYNAME_API : `${kartoffelUrl}/api/organizationGroups/path/${param}` ,

        // Kartoffel - domainUser
        KARTOFFEL_DOMAIN_USER_API : `${kartoffelUrl}/api/persons/domainUser`,
    }
}