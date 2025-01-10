# How to use
## Install

```shell
npm i agora-access-token
```

## Import
```javascript
const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')
```

### Generate
```javascript
// Rtc Examples
const appID = '<Your app ID>';
const appCertificate = '<Your app certificate>';
const channelName = '<The channel this token is generated for>';
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

// IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
console.log("Token With UserAccount: " + tokenB);
```
https://www.agora.io/en/blog/2-click-setup-testing-token-server/
https://github.com/AgoraIO-Community/TokenServer-nodejs
https://morioh.com/p/74b0cd649832   - token tutorial - agora-access-token - npm
https://www.section.io/engineering-education/agora-express-token-server/
https://www.facebook.com/AgoraIO/photos/happeningnow-how-to-build-a-token-server-for-agora-applications-hosted-by-hermes/4253462924693856/
https://www.agora.io/en/blog/how-to-build-a-token-server-for-agora-applications-using-nodejs/
https://www.linkedin.com/pulse/tutorial-agora-token-authentication-takayasu-hara/
agora-access-token npm package to generate token
https://www.npmjs.com/package/agora-access-token
https://stackoverflow.com/questions/69919637/is-there-a-rest-api-to-create-a-channel-in-agora-web-sdk

Agora RTM token dynamic
create dynamics channels in agora using node js

raw frames in django?
https://www.agora.io/en/blog/build-a-scalable-video-chat-app-with-agora-in-django/

Generate tokens manually 
node sample.js
