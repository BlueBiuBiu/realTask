<template>
  <div class="main">
    <i v-for="i in 59" :key="i"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  onShow() {},
};
</script>

<style lang="less" scoped>
.transform(@rotate: 1,@translateX: 80px) {
  transform: rotate(@rotate * 12deg) translateX(@translateX);
  animation-delay: @rotate * 0.05s;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #c08eaf;
  perspective: 400px;
  i {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 10px 0 white;
    animation: run 3s ease-in-out infinite;
    &:nth-child(1) {.transform(1)}
    &:nth-child(2) {.transform(2)}
    &:nth-child(3) {.transform(3)}
    &:nth-child(4) {.transform(4)}
    &:nth-child(5) {.transform(5)}
    &:nth-child(6) {.transform(6)}
    &:nth-child(7) {.transform(7)}
    &:nth-child(8) {.transform(8)}
    &:nth-child(9) {.transform(9)}
    &:nth-child(10) {.transform(10)}
    &:nth-child(11) {.transform(11)}
    &:nth-child(12) {.transform(12)}
    &:nth-child(13) {.transform(13)}
    &:nth-child(14) {.transform(14)}
    &:nth-child(15) {.transform(15)}
    &:nth-child(16) {.transform(16)}
    &:nth-child(17) {.transform(17)}
    &:nth-child(18) {.transform(18)}
    &:nth-child(19) {.transform(19)}
    &:nth-child(20) {.transform(20)}
    &:nth-child(21) {.transform(21)}
    &:nth-child(22) {.transform(22)}
    &:nth-child(23) {.transform(23)}
    &:nth-child(24) {.transform(24)}
    &:nth-child(25) {.transform(25)}
    &:nth-child(26) {.transform(26)}
    &:nth-child(27) {.transform(27)}
    &:nth-child(28) {.transform(28)}
    &:nth-child(29) {.transform(29)}
    &:nth-child(30) {.transform(30)}
    &:nth-child(31) {.transform(31)}
    &:nth-child(32) {.transform(32)}
    &:nth-child(33) {.transform(33)}
    &:nth-child(34) {.transform(34)}
    &:nth-child(35) {.transform(35)}
    &:nth-child(36) {.transform(36)}
    &:nth-child(37) {.transform(37)}
    &:nth-child(38) {.transform(38)}
    &:nth-child(39) {.transform(39)}
    &:nth-child(40) {.transform(40)}
    &:nth-child(41) {.transform(41)}
    &:nth-child(42) {.transform(42)}
    &:nth-child(43) {.transform(43)}
    &:nth-child(44) {.transform(44)}
    &:nth-child(45) {.transform(45)}
    &:nth-child(46) {.transform(46)}
    &:nth-child(47) {.transform(47)}
    &:nth-child(48) {.transform(48)}
    &:nth-child(49) {.transform(49)}
    &:nth-child(50) {.transform(50)}
    &:nth-child(51) {.transform(51)}
    &:nth-child(52) {.transform(52)}
    &:nth-child(53) {.transform(53)}
    &:nth-child(54) {.transform(54)}
    &:nth-child(55) {.transform(55)}
    &:nth-child(56) {.transform(56)}
    &:nth-child(57) {.transform(57)}
    &:nth-child(58) {.transform(58)}
    &:nth-child(59) {.transform(59)}
    &:nth-child(60) {.transform(60)}
  }
}
@keyframes run {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 560px);
  }
}
</style>
