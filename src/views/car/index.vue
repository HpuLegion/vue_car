<template>
  <div id='car-wrap'>
      <span @click="getIntoUser">汽车信息</span>
      <div class="car-item">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data () {
    return {
    }
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
    .car-item{
      width: 505px;
      height: 257px;
      background-color: #fff;
      border-radius: 24px;
      margin: auto ;

      //调用封装的sass方法
      @include webkit(box-shadow,0 0 18px 0 rgba(0,0,0,.2));

      // -webkit-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
      // -moz-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
      // -ms-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
      // -o-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
      // box-shadow:0 0 18px 0 rgba(0,0,0,.2);
    }
</style>