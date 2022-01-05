<template>
  <div class="wrapper">
    <span class="person"></span>
    <span class="sun"></span>
    <span class="star star1"></span>
    <span class="star star2"></span>
    <span class="star star3"></span>
    <span class="star star4"></span>
    <span class="star star5"></span>
    <span class="star star6"></span>
    <span class="star star7"></span>
    <span class="star star8"></span>
    <span class="star star9"></span>
    <span class="star star10"></span>
    <span class="star star11"></span>
    <span class="star star12"></span>
    <span class="star star13"></span>
    <span class="star star14"></span>
    <span class="star star15"></span>
    <span class="star star16"></span>
    <span class="star star17"></span>
    <span class="star star18"></span>
    <span class="star star19"></span>
    <span class="star star20"></span>
    <span class="star star21"></span>
    <span class="star star22"></span>
    <span class="star star23"></span>
    <span class="star star24"></span>
    <span class="star star25"></span>
    <span class="star star26"></span>
    <span class="star star27"></span>
    <span class="star star28"></span>
    <span class="star star29"></span>
    <span class="star star30"></span>
    <span class="star star31"></span>
    <span class="star star32"></span>
    <span class="star star33"></span>
    <span class="star star34"></span>
    <span class="star star35"></span>
    <span class="star star36"></span>
    <span class="star star37"></span>
    <span class="star star38"></span>
    <span class="star star39"></span>
    <span class="star star40"></span>
    <span class="star star41"></span>
    <span class="star star42"></span>
    <span class="star star43"></span>
    <span class="star star44"></span>
    <span class="star star45"></span>
    <span class="star star46"></span>
    <span class="star star47"></span>
    <span class="star star48"></span>
    <span class="star star49"></span>
    <span class="star star50"></span>
    <span class="shooting-star1"></span>
    <span class="shooting-star2"></span>
    <span class="shooting-star3"></span>
    <span class="shooting-star4"></span>
    <span class="star-no star-no1"></span>
    <span class="star-no star-no2"></span>
    <span class="star-no star-no3"></span>
    <span class="star-no star-no4"></span>
    <span class="star-no star-no5"></span>
    <span class="star-no star-no6"></span>
    <span class="star-no star-no7"></span>
    <span class="star-no star-no8"></span>
    <span class="star-no star-no9"></span>
    <span class="star-no star-no11"></span>
    <span class="star-no star-no12"></span>
    <span class="star-no star-no13"></span>
    <span class="star-no star-no14"></span>
    <span class="star-no star-no15"></span>
    <span class="star-no star-no16"></span>
    <span class="star-no star-no17"></span>
    <span class="star-no star-no18"></span>
    <div class="cloud"></div>
    <div class="cloud2"></div>
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
.wrapper {
  position: relative;
  background-color: #193d7e;
  width: 750rpx;
  min-width: 750rpx;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  /* background: url(./image/bk.jpg);
    background-size: contain; */
  .star {
    position: absolute;
    width: 4rpx;
    height: 4rpx;
    border-radius: 50%;
    background-color: #fff;
  }
  .star-no {
    position: absolute;
    width: 4rpx;
    height: 4rpx;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .star1 {
    top: 10rpx;
    animation: twinkle 2.1s infinite;
  }
  .star2 {
    top: 14rpx;
    left: 10rpx;
    animation: twinkle 2.5s infinite;
  }
  .star3 {
    top: 54rpx;
    left: 80rpx;
    animation: twinkle 2.6s infinite;
  }
  .star4 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 56rpx;
    left: 180rpx;
    animation: twinkle 2.6s infinite;
  }
  .star5 {
    width: 1rpx !important;
    height: 1rpx !important;
    top: 306rpx;
    left: 190rpx;
    animation: twinkle 2.3s infinite;
  }
  .star6 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 136rpx;
    left: 190rpx;
    animation: twinkle 2.3s infinite;
  }
  .star7 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 336rpx;
    left: 130rpx;
    animation: twinkle 1.8s infinite;
  }
  .star8 {
    top: 36rpx;
    left: 330rpx;
    animation: twinkle 1.8s infinite;
  }
  .star9 {
    top: 16rpx;
    left: 360rpx;
    animation: twinkle 2.8s infinite;
  }
  .star10 {
    top: 106rpx;
    right: 10rpx;
    animation: twinkle 2.8s infinite;
  }
  .star11 {
    top: 126rpx;
    right: 50rpx;
    animation: twinkle 2.5s infinite;
  }
  .star12 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 336rpx;
    left: 290rpx;
    animation: twinkle 2.7s infinite;
  }
  .star13 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 236rpx;
    left: 230rpx;
    animation: twinkle 2.3s infinite;
  }
  .star14 {
    top: 359rpx;
    left: 139rpx;
    animation: twinkle 2.2s infinite;
  }
  .star15 {
    top: 259rpx;
    left: 639rpx;
    animation: twinkle 2.1s infinite;
  }
  .star16 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 159rpx;
    left: 539rpx;
    animation: twinkle 1.9s infinite;
  }
  .star17 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 129rpx;
    left: 439rpx;
    animation: twinkle 1.7s infinite;
  }
  .star18 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 119rpx;
    left: 239rpx;
    animation: twinkle 2.9s infinite;
  }
  .star19 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 300rpx;
    left: 339rpx;
    animation: twinkle 2.9s infinite;
  }
  .star20 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 250rpx;
    left: 250rpx;
    animation: twinkle 2.9s infinite;
  }
  .star21 {
    top: 200rpx;
    left: 290rpx;
    animation: twinkle 2.2s infinite;
  }
  .star22 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 150rpx;
    left: 159rpx;
    animation: twinkle 3s infinite;
  }
  .star23 {
    top: 300rpx;
    right: 250rpx;
    animation: twinkle 2.8s infinite;
  }
  .star24 {
    top: 230rpx;
    right: 250rpx;
    animation: twinkle 2.3s infinite;
  }
  .star25 {
    top: 260rpx;
    right: 350rpx;
    animation: twinkle 3.4s infinite;
  }
  .star26 {
    top: 165rpx;
    right: 320rpx;
    animation: twinkle 5s infinite;
  }
  .star27 {
    top: 225rpx;
    right: 220rpx;
    animation: twinkle 6s infinite;
  }
  .star28 {
    top: 25rpx;
    right: 90rpx;
    animation: twinkle 6s infinite;
  }
  .star29 {
    top: 2rpx;
    right: 95rpx;
    animation: twinkle 5s infinite;
  }
  .star30 {
    top: 200rpx;
    left: 95rpx;
    animation: twinkle 6s infinite;
  }
  .star31 {
    top: 200rpx;
    right: 95rpx;
    animation: twinkle 5.5s infinite;
  }
  .star32 {
    top: 220rpx;
    right: 25rpx;
    animation: twinkle 3s infinite;
  }
  .star33 {
    top: 230rpx;
    right: 35rpx;
    animation: twinkle 3.3s infinite;
  }
  .star34 {
    top: 220rpx;
    right: 65rpx;
    animation: twinkle 2.3s infinite;
  }
  .star35 {
    top: 120rpx;
    right: 85rpx;
    animation: twinkle 3.6s infinite;
  }
  .star36 {
    top: 220rpx;
    right: 325rpx;
    animation: twinkle 3.8s infinite;
  }
  .star37 {
    top: 220rpx;
    right: 65rpx;
    animation: twinkle 2s infinite;
  }
  .star38 {
    top: 120rpx;
    right: 65rpx;
    animation: twinkle 3.2s infinite;
  }
  .star39 {
    top: 200rpx;
    right: 165rpx;
    animation: twinkle 3s infinite;
  }
  .star40 {
    top: 250rpx;
    right: 165rpx;
    animation: twinkle 3s infinite;
  }
  .star41 {
    top: 200rpx;
    left: 95rpx;
    animation: twinkle 5.5s infinite;
  }
  .star42 {
    top: 220rpx;
    left: 25rpx;
    animation: twinkle 3s infinite;
  }
  .star43 {
    top: 230rpx;
    left: 35rpx;
    animation: twinkle 3.3s infinite;
  }
  .star44 {
    top: 220rpx;
    left: 65rpx;
    animation: twinkle 2.3s infinite;
  }
  .star45 {
    top: 120rpx;
    left: 85rpx;
    animation: twinkle 3.6s infinite;
  }
  .star46 {
    top: 220rpx;
    left: 325rpx;
    animation: twinkle 3.8s infinite;
  }
  .star47 {
    top: 220rpx;
    left: 65rpx;
    animation: twinkle 2s infinite;
  }
  .star48 {
    top: 120rpx;
    left: 65rpx;
    animation: twinkle 3.2s infinite;
  }
  .star49 {
    top: 200rpx;
    left: 165rpx;
    animation: twinkle 3s infinite;
  }
  .star50 {
    top: 250rpx;
    left: 165rpx;
    animation: twinkle 3s infinite;
  }
  .star-no1 {
    top: 100rpx;
    left: 95rpx;
  }
  .star-no2 {
    width: 1rpx !important;
    height: 1rpx !important;
    top: 130rpx;
    left: 195rpx;
  }
  .star-no3 {
    width: 2rpx !important;
    height: 2rpx !important;
    top: 170rpx;
    left: 155rpx;
  }
  .star-no4 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 120rpx;
    left: 195rpx;
  }
  .star-no5 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 190rpx;
    left: 165rpx;
  }
  .star-no6 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 200rpx;
    left: 175rpx;
  }
  .star-no7 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 210rpx;
    right: 185rpx;
  }
  .star-no8 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 110rpx;
    right: 25rpx;
  }
  .star-no9 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 20rpx;
    right: 235rpx;
  }
  .star-no11 {
    width: 3rpx !important;
    height: 3rpx !important;
    top: 200rpx;
    right: 135rpx;
  }
  .star-no12 {
    top: 120rpx;
    right: 355rpx;
  }
  .star-no13 {
    top: 120rpx;
    right: 55rpx;
  }
  .star-no14 {
    top: 70rpx;
    right: 95rpx;
  }
  .star-no15 {
    top: 200rpx;
    right: 95rpx;
  }
  .star-no16 {
    top: 230rpx;
    right: 45rpx;
  }
  .star-no17 {
    top: 240rpx;
    right: 55rpx;
  }
  .star-no18 {
    top: 260rpx;
    right: 25rpx;
  }
  .shooting-star1 {
    position: absolute;
    width: 120rpx;
    height: 2rpx;
    background: url(http://100dayscss.com/codepen/shooting-star.png) center
      center no-repeat;
    background-size: 100% 100%;
    transform: rotate(20deg);
    top: -25rpx;
    left: 100rpx;
    z-index: 2;
    animation: 21s falling-star 4s infinite;
  }
  .shooting-star2 {
    position: absolute;
    width: 120rpx;
    height: 2rpx;
    background: url(http://100dayscss.com/codepen/shooting-star.png) center
      center no-repeat;
    background-size: 100% 100%;
    transform: rotate(20deg);
    top: -25rpx;
    left: 90rpx;
    z-index: 2;
    animation: 24s falling-star 1s infinite;
  }
  .shooting-star3 {
    position: absolute;
    width: 120rpx;
    height: 2rpx;
    background: url(http://100dayscss.com/codepen/shooting-star.png) center
      center no-repeat;
    background-size: 100% 100%;
    transform: rotate(20deg);
    top: -25rpx;
    left: 200rpx;
    z-index: 2;
    animation: 19s falling-star 10s infinite;
  }
  .shooting-star4 {
    position: absolute;
    width: 120rpx;
    height: 2rpx;
    background: url(http://100dayscss.com/codepen/shooting-star.png) center
      center no-repeat;
    background-size: 100% 100%;
    transform: rotate(20deg);
    top: -25rpx;
    left: 10rpx;
    z-index: 2;
    animation: 14s falling-star 5s infinite;
  }
  @keyframes twinkle {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
  }
  @keyframes falling-star {
    0% {
      transform: translate3d(0, 0, 0) rotate(25deg);
    }
    25%,
    100% {
      transform: translate3d(750rpx, 750rpx, 0) rotate(45deg);
    }
  }
  .sun {
    top: 30rpx;
    right: 150rpx;
    position: absolute;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    background-color: rgba(255, 255, 0, 0.7);
    box-shadow: 0 0 100rpx #e7bb36;
  }
  .person {
    position: absolute;
    width: 50%;
    height: 50%;
    /* width:493rpx; */
    /* height:670rpx; */
    background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-99115760-f034-48b4-8a75-cdd5d5200e23/fea4e068-68d7-40bd-9f24-c843015c002c.png);
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 0rpx;
    right: -70rpx;
  }
  .cloud {
    position: relative;
    width: 90rpx;
    height: 50rpx;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    margin-left: 30rpx;
    left: -170rpx;
    top: 160rpx;
    animation: 105s cloudeaction 1s infinite linear;
  }
  .cloud::before {
    content: "";
    position: absolute;
    width: 40rpx;
    height: 30rpx;
    border-radius: 50%;
    left: -40rpx;
    top: 10rpx;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .cloud::after {
    content: "";
    position: absolute;
    width: 40rpx;
    height: 30rpx;
    border-radius: 50%;
    right: -35rpx;
    top: 0rpx;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .cloud2 {
    position: relative;
    width: 90rpx;
    height: 70rpx;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    margin-left: 30rpx;
    left: -170rpx;
    top: 20rpx;
    animation: 205s cloudeaction infinite linear;
  }
  .cloud2::before {
    content: "";
    position: absolute;
    width: 40rpx;
    height: 30rpx;
    border-radius: 50%;
    left: -35rpx;
    top: 10rpx;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .cloud2::after {
    content: "";
    position: absolute;
    width: 50rpx;
    height: 40rpx;
    border-radius: 50%;
    right: -30rpx;
    top: -20rpx;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @keyframes cloudeaction {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25%,
    100% {
      transform: translate3d(950rpx, 0rpx, 0);
    }
  }
}
</style>
