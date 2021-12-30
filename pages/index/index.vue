<template>
  <view class="content">
    <button @click="toTask">开始坦白言</button>
    <button>查看TA对我的坦白</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {
    this.getUserInfo();
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
    getUserInfo() {
      uniCloud.callFunction({
          name: "getUserToken", //云函数名称
        })
        .then((res) => {
          console.log("res5555");
          console.log(res);
        })
        .catch((res) => {
          console.log("res55888");
          console.log(res);
        });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
