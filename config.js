/*jshint esversion: 6 */

const cfenv = require('cfenv');
const xsenv = require("@sap/xsenv");

var appEnv = cfenv.getAppEnv();

var uaa_config = {
    "uaadomain": "authentication.sap.hana.ondemand.com",
    "tenantmode": "dedicated",
    "sburl": "https://internal-xsuaa.authentication.sap.hana.ondemand.com",
    "clientid": "sb-creditservice!t1378",
    "verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx/jN5v1mp/TVn9nTQoYVIUfCsUDHa3Upr5tDZC7mzlTrN2PnwruzyS7w1Jd+StqwW4/vn87ua2YlZzU8Ob0jR4lbOPCKaHIi0kyNtJXQvQ7LZPG8epQLbx0IIP/WLVVVtB8bL5OWuHma3pUnibbmATtbOh5LksQ2zLMngEjUF52JQyzTpjoQkahp0BNe/drlAqO253keiY63FL6belKjJGmSqdnotSXxB2ym+HQ0ShaNvTFLEvi2+ObkyjGWgFpQaoCcGq0KX0y0mPzOvdFsNT+rBFdkHiK+Jl638Sbim1z9fItFbH9hiVwY37R9rLtH1YKi3PuATMjf/DJ7mUluDQIDAQAB-----END PUBLIC KEY-----",
    "xsappname": "creditservice!t1378",
    "identityzone": "i848067trial",
    "identityzoneid": "531f77f4-2f93-4258-a1ff-80b0e6095a68",
    "clientsecret": "cVPxd2CZO2gNy6HzQFf6ouqyCfE=",
    "tenantid": "531f77f4-2f93-4258-a1ff-80b0e6095a68",
    "url": "https://i848067trial.authentication.sap.hana.ondemand.com"
};

module.exports = {
    name : 'API',
    env : process.env.NODE_ENV || 'development',
    port : process.env.PORT || 3000,
    base_url : process.env.BASE_URL || 'http://localhost:3000'
};

module.exports.db = {};
if(appEnv.isLocal){
  module.exports.db.uri = 'mongodb://127.0.0.1:27017/api';
}else{
  if(appEnv.services.mongodb){
    module.exports.db.uri = appEnv.services.mongodb[0].credentials.uri;
  }else{
    module.exports.db.uri = "";
  }
  if(xsenv.getServices({ uaa: "myuaa" })){
    module.exports.uaa = xsenv.getServices({ uaa: "myuaa" }).uaa
  }else{
    console.log("Service myuaa is not found");
  }
}
