module.exports = {
    dataSources: {
        aka: "aka",
        es: "es",
        ads: "ads",
        adNN: "adNN",
        nvSQL: "nvSQL",
        excel: "excel",
    },
    aka: {
        serviceType: "nstype",
        firstName: "firstName",
        lastName: "lastName",
        identityCard: "tz",
        personalNumber: "mi",
        rank: "rnk",
        phone: "telephone",
        areaCode: "ktelephone",
        mobilePhone: "telephone",
        areaCodeMobile: "ktelephone",
        dischargeDay: "rld",
        clearance: "clearance",
        unitName: "hr",
        telephoneType: "telephoneType",
    },
    es: {
        entityType: "entity",
        firstName: "firstName",
        lastName: "lastName",
        identityCard: "tz",
        personalNumber: "mi",
        rank: "rnk",
        phone: "vphone",
        mobilePhone: "cphone",
        dischargeDay: "rld",
        hierarchy: "hr",
        mail: "mail",
        address: "adr",
        job: "tf",
        domainSuffix: "@es",
        userName: "userName",
    },
    excel: {
        entityType: "entityType",
        firstName: "firstName",
        lastName: "lastName",
        identityCard: "tz",
        personalNumber: "mi",
        rank: "rnk",
        phone: "telephone",
        mobilePhone: "telephone",
        hierarchy: "hr",
        mail: "mail",
        job: "job"
    },
    ads: {
        firstName: "KfirstName",
        lastName: "KlastName",
        job: "Kjob",
        mail: "mail",
        upn: "userPrincipalName",
        hierarchy: "hierarchy",
        sAMAccountName: "sAMAccountName",
        domainSuffix: "@ads",
    },
    adNN: {
        firstName: "KfirstName",
        lastName: "KlastName",
        fullName: "Kjob",
        mail: "mail",
        upn: "userPrincipalName",
        hierarchy: "hierarchy",
        sAMAccountName: "sAMAccountName",
        extension: "nn",
        domainSuffix: "@adnn",
    },
    nv: {
        firstName: "KfirstName",
        lastName: "KlastName",
        uniqueID: "unid",
        hierarchy: "hierarchy",
        pn: "pn",
        identityCard: "id"
    },
    entityTypeValue: {
        s: "tamar",
        sPrefix: "m",
        c: "digimon",
        cPrefix: "d",
    },
    rootHierarchy: "wallmart",
    runningTime: {
        hour: 12,
        minute: 54
    },
    akaRigid: ["clearance", "identityCard", "personalNumber", "firstName", "lastName", "dischargeDay", "rank", "address", "mobilePhone", "phone", "serviceType", "currentUnit"],
    forbiddenFieldsToUpdate: ["identityCard", "personalNumber","directGroup"],
    fieldsForRmoveFromKartoffel: ["secondaryDomainUsers", "alive", "responsibility", "_id", "createdAt", "updatedAt", "primaryDomainUser", "fullName", "id", "hierarchy"],
    kartoffelUrl: "https://localhost:3000",
};