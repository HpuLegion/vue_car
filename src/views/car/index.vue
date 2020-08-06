<template>
  <div id='car-wrap'>
      <span @click="getIntoUser">汽车信息</span>
      <swiper class="swiper" :options="swiperOption">
          <swiper-slide><SwiperInfo /></swiper-slide>
          <swiper-slide><SwiperInfo /></swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

  </div>
</template>

<script>
import SwiperInfo from "@/components/swiper/swiperInfo.vue"
// 引入swiper
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'    //版本问题报错
//引用6.0+以上版本写法
import 'swiper/swiper-bundle.css'



export default {
  name: 'Cars',
  data () {
    return {

      swiperOption: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
      },
    }
  },
   components: {
    Swiper,
    SwiperSlide,
    SwiperInfo
  },
  methods: {
      getIntoUser(){
          this.$router.push({name:"User"})
      }
  }
}
</script>

<style scoped lang='scss'>
    #car-wrap{
        position: fixed;
        left: 0;
        right: 0;
        // left: 0;right: 0;使得定位的大盒子宽度为100%，下面的margin:auto;才会生效
        bottom: 94px;
        z-index: 11;
    }
 
    // 滑块箭头调整
    .swiper-button-prev, .swiper-button-next{
      transform: translateY(-50%);
    }
</style>