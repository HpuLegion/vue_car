<template>
  <div id='memberInfo'>
        <div class="userInfo">
            <img src="@/assets/user.jpg" alt="">
            <div class="countNumber">
              <div class="pointStyle">{{mycount}}</div>
              <div class="pointStyle">文明驾驶{{driveCount}}分</div>
            </div>
        </div>
        <div class="linkPath">
          <!-- tag="a" 将 router-link 渲染成a标签-->
            <router-link to="myCount" tag="a">
              <i class="icon el-icon-user-solid"></i>
              <span>我的账户</span>
            </router-link>
            <router-link to="order" tag="a">
              <i class="icon el-icon-s-order"></i>
              <span>租车订单</span>
            </router-link>
            <router-link to="authentication" tag="a">
              <i class="icon el-icon-s-claim"></i>
              <span>实名认证</span>
            </router-link>
            <router-link to="securitySet" tag="a">
              <i class="icon el-icon-s-tools"></i>
              <span>安全设置</span>
            </router-link>
            <router-link to="help" tag="a">
              <i class="icon el-icon-question"></i>
              <span>帮助中心</span>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      mycount:"1163572188@qq.com",
      driveCount:0,
    }
  },
  created(){
    // const routerName=this.$router.options.routes
    // console.log(routerName);
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
@import "./index.scss"
</style>