<template>
  <div id='navBar'>
    <ul class="ulBox">
      <li class="icon"><i class="el-icon-phone-outline"></i></li>
      <li class="icon"><i class="el-icon-search"></i></li>
      <li class="choseCar"><span>选择车辆</span></li>
      <li class="icon"><i class="el-icon-aim"></i></li>
      <li class="icon">
        <i class="el-icon-user"
           @click="getIntoUser"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
  methods: {
    getIntoUser() {
      this.$router.push({ name: 'User' })
    }
  }
}
</script>

<style scoped lang='scss'>
#navBar {
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%);
  z-index: 10;
}
.ulBox {
  display: flex;
  text-align: center;
  color: #fff;
  align-items: center;
  li {
    margin: 0 17px;
    background-color: #34393f;
    cursor: pointer;
  }
}
li[class^='icon'] {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 100%;
}
.choseCar {
  width: 100px;
  height: 50px;
  line-height: 47px;
  border-radius: 50px;
}
</style>