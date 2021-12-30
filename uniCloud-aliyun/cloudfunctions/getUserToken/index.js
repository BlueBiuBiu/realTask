"use strict";
const cloud = require("wx-server-sdk");
var request = require("request-promise");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
	// const appid = wxContext.APPID  //获取appid
  const appid = "wx88c682b595b30fbd"
  const secret = "675e60b5c8ee5ca517a63f872cdef968"; //小程序的密钥，微信公众平台生成

  const AccessToken_options = {
    method: "GET",
    url: "https://api.weixin.qq.com/cgi-bin/token", //微信小程序服务端提供的链接
    qs: {
      appid: appid,
      secret: secret,
      grant_type: "client_credential",
    },
    json: true,
  };

  //获取AccessToken
  const resultValue = await request(AccessToken_options);
  const token = resultValue.access_token;

  return {
    resultValue,
    token,
  };
};
