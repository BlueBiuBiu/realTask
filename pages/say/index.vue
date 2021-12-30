<template>
  <div class="say">
    <textarea v-model="content" cols="30" rows="10"></textarea>
    <button @click="submit">留言</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  onShow() {},
  methods: {
    submit() {
      
    }
  },
};
</script>

<style lang="less" scoped></style>
