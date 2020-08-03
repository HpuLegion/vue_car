<template>
  <div id=''>
    <!-- 地图上层信息 -->
    <Car />
    <!-- 会员视图区 -->
    <!-- <div class="children_view" v-show="show"> -->
    <div class="children_view" :class="{open:showUser}">
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
      // show:false,
    }
  },
  methods: {

  },
  // watch:{
  //   // 路由监听,当路由改变就会触发，currentRouterName的值是个对象
  //   //这种做法出现bug，即进入user刷新后，右侧边栏消失
  //   "$route":{
  //     handler(currentRouterName){
  //       this.show=currentRouterName.name=="Index"?false:true
  //       console.log(this.show)
  //     }
  //   }
  // }

  //解决 上面bug
  computed:{
    showUser(){
      //路由监听
      const routerName=this.$route;
      return routerName.name=="Index"?false:true
    }
  }
}
</script>

<style scoped lang='scss'>
  .children_view{
      position: fixed;
      right: -600px;
      top: 0;
      z-index: 101;//要比汽车信息层级高
      width: 25%;
      height: 100vh;
      color: #fff;
      background-color: #34393f;
      -webkit-transition:all .3s ease 0s;
      -moz-transition:all .3s ease 0s;
      -ms-transition:all .3s ease 0s;
      -o-transition:all .3s ease 0s;
      transition:all .3s ease 0s;    
  }
  .open{
        right:0;
  }

</style>