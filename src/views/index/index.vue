<template>
  <div id=''>
    <!-- 地图上层信息 -->
    <Car />
    <!-- 会员视图区 -->
    <div class="children_view" v-show="show">
        <router-view />
    </div>
    <!-- 地图组件 -->
    <Map />
  </div>
</template>

<script>
import Map from "@/views/aMap/aMap.vue"
import Car from "@/views/car/index.vue"
export default {
  name: 'Index',
  components:{Map,Car},
  data () {
    return {
      show:false,
    }
  },
  methods: {

  },
  watch:{
    // 路由监听
    "$route":{
      handler(currentRouterName){
        this.show=currentRouterName.name=="Index"?false:true
        console.log(this.show)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .children_view{
      position: fixed;
      right: 0;
      top: 0;
      z-index: 101;//要比汽车信息层级高
      width: 20%;
      height: 100vh;
      color: #fff;
      background-color: #34393f;
  }
</style>