<template>
  <div id='safeSet'>
    <HeaderBack title="安全设置" />
    <div class="linkPath">
      <!-- tag="a" 将 router-link 渲染成a标签-->
      <router-link to="passModify"
                   tag="a">
        <span>修改登录密码</span>
      </router-link>
      <router-link to="order"
                   tag="a">
        <span>设置资金密码</span>
      </router-link>
      <router-link to="authentication"
                   tag="a">
        <span>绑定手机号</span>
      </router-link>
      <router-link to="securitySet"
                   tag="a">
        <span>绑定银行卡号</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.linkPath{
    display: flex;
    flex-direction: column;
    // justify-content: center ;
}
.linkPath a{
    color: #fff;
    height: 45px;
    line-height: 45px;
    padding-left:20px ;
}
</style>