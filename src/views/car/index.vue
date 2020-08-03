<template>
  <div id='car-wrap'>
      <span @click="getIntoUser">汽车信息</span>
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
        top: 0;
        z-index: 100;
    }
</style>