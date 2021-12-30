<template>
  <div class="info">
    <h2>扫码进入的小程序页面</h2>
    <navigator url="/pages/say/index">留言</navigator>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  onload() {
    
  },
  onShow() {
    this.getQrcode()
  },
  methods: {
    getQrcode() {
      let data = {
        scene: "123456", // 要传递的参数
        page: "pages/info/index", // 扫码进入的小程序页面
      };
      wx.request({
        url: `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${uni.getStorageSync("access_token")}`,
        method: "post",
        data,
        // dataType: 'json',
        responseType: "arraybuffer", //将返回数据 按文本解析修改为arraybuffer
        success: (res) => {
          console.log(res);
          this.url = "data:image/png;base64," + wx.arrayBufferToBase64(res.data);
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
