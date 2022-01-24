const RtmTokenBuilder = require('../src/RtmTokenBuilder').RtmTokenBuilder;
const RtmRole = require('../src/RtmTokenBuilder').Role;
const Priviledges = require('../src/AccessToken').priviledges;
const appID  = "4de74d230b2349458cd138aa2677bc0a";
const appCertificate = "8e3985b2a1aa466b80d1bbc5ab22b7f6";
const account = "1234";

const expirationTimeInSeconds = 3600
const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

const token = RtmTokenBuilder.buildToken(appID, appCertificate, account, RtmRole, privilegeExpiredTs);
console.log("Rtm Token: " + token);
