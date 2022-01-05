<template>
  <view class="content">
    <star-animation style="position:absolute;"></star-animation>
    <div class="userInfo">
      <image :src="userInfo.avatarUrl" mode="widthFix"/>
      <div>{{userInfo.nickName}}</div>
    </div>
    <a>
      <span>开始坦白言</span>
      <em class="em1"></em>
      <em class="em2"></em>
    </a>
    <!-- <button @click="toTask">开始坦白言</button>
    <button>查看TA对我的坦白</button> -->
  </view>
</template>

<script>
import rotateAnimation from "@/components/rotateAnimation";
import starAnimation from "@/components/starAnimation";
export default {
  data() {
    return {
      title: "Hello",
      userInfo: uni.getStorageSync("userInfo"),
    };
  },
  components: {
    rotateAnimation,
    starAnimation,
  },
  async onLoad() {
    const userInfo = uni.getStorageSync("userInfo");
    if (!userInfo) {
      uni.showModal({
        title: "提示",
        content: "是否授权登录",
        success: (res) => {
          if (res.confirm) {
            console.log("用户点击确定");
            this.getAuthorize();
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    }
  },
  computed: {
    svg() {
      return this.$svg;
    },
  },
  methods: {
    toTask() {
      uni.navigateTo({ url: "/pages/info/index" });
    },
    getAuthorize() {
      const userInfo = uni.getStorageSync("userInfo");
      if (!userInfo) {
        uni.getUserProfile({
          lang: "zh_CN",
          desc: "登录",
          success: (res) => {
            uni.setStorageSync("userInfo", res.userInfo);
            this.getUserInfo();
          },
          fail: (res) => {
            console.log(res);
          },
        });
      }
    },
    getUserInfo() {
      uniCloud
        .callFunction({
          name: "getUserToken", // 云函数名称
        })
        .then((res) => {
          console.log(res);
          uni.setStorageSync("token", res.result.token);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="less">
page {
  height: 100%;
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .userInfo {
    width: 300rpx;
    height: 350rpx;
    text-align: center;
    color: #fff;
    opacity: 0.7;
    margin-top: 150rpx;
    overflow: hidden;
    border-radius: 50%;
    z-index: 999;
    image {
      width: 100%;
      height: 100%;
    }
  }
  a {
    position: relative;
    display: inline-block;
    text-align: center;
    color: #fff;
    height: 2em;
    line-height: 2em;
    width: 33%;
    border: 4rpx solid rgba(255,255,255,0.33);
    em {
      position: absolute;
      width: 100%;
      height: 100%;
      top: -2rpx;
      left: -2rpx;
      border: 4rpx solid #fff;
      opacity: 0;
      &:hover {
        opacity: 0.2;
      }
    }
    @keyframes btnAnimation1 {
      0% {
        transform: scale(1,1);
      }
      50% {
        transform: scale(1.12,1.4);
      }
      100% {
        transform: scale(1,1);
      }
    }
    @keyframes btnAnimation2 {
      0% {
        transform: scale(1,1);
      }
      50% {
        transform: scale(1.17,1.45);
      }
      100% {
        transform: scale(1,1);
      }
    }
    &:hover {
      .em1 {
        animation: btnAnimation1 .5s linear;
      }
      .em2 {
        animation: btnAnimation2 .75s linear;
      }
    }
  }
}
</style>
