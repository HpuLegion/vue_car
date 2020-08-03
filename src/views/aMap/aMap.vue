<template>
  <div id='aMap-wrap'>
      <el-amap vid="amapContainer"   :zoom="zoom" :events="events" class="amap-demo">
      </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance,AMapManager } from 'vue-amap';
export default {
  name: 'Map',
  data () {
    return {
        map:'',
        // amapManager,
        zoom:11,//级别
        // center: [116.397428, 39.90923],//中心点坐标
        events: {
            // vue-aMap写法
            // init(o) {
            //   let marker = new AMap.Marker({
            //     position: [121.59996, 31.197646]
            //   });

            //   marker.setMap(o);
            // }
        },
    }
  },
  methods: {

  },
  mounted(){
      //原生地图SDK
      lazyAMapApiLoaderInstance.load().then(() => {
        // 存储地图实例
        this.map = new AMap.Map('amapContainer', {
            center: [116.397428, 39.90923],
            zoom:this.zoom
        });
      });
  }
}
</script>

<style scoped lang='scss'>
    #aMap-wrap{
        height: 100vh ;
    }
</style>