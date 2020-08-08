 <template>
  <div id='headerBack'>
    <i class="icon el-icon-arrow-left" @click="goback"></i>
    <span>{{title}}</span>
  </div>
</template>
 
 <script>
export default {
  name: 'Headerback',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
      goback(){
          this.$router.go(-1)
      }
  }
}
</script>
 
 <style scoped lang='scss'>
    #headerBack{
        // background-color: pink;
        padding: 20px 0 20px 20px;
        @include webkit(box-sizing,border-box);
        color: #4d79ff;
        font-weight: 700;
        .icon{
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
            width: 20px;
        }
    }
</style>