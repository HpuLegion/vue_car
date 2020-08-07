<template>
  <div id=''>
    <section class="car-item">
      <header>
        <div class="car-logo">
          <!-- <el-image :src="url"  :fit="fit" >
                            <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                            </div>
                        </el-image> -->
          <img :src="url"
               :fit="fit" />
          <span>{{carStyle}}</span>
        </div>
        <div class="carStyleDetial">
          {{styleDetial}}
        </div>
      </header>
      <div class="car-item-content">
        <div class="content-left">
          <div>
            <h4 class="car-number">{{carNumber}}</h4>
            <div class="electricity "
                 :class="itemNumber">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span class="battery-life">
                <!-- sub 下标标签 -->
                <sub>约</sub>
                <strong>{{batteryLife}}</strong>
                <sub>KM</sub>
              </span>
            </div>

          </div>
        </div>
        <img :src="url"
             :fit="fit" />
      </div>
      <footer>
        <a href="javascript: void(0)">{{carPark}}</a>
        <i class="el-icon-arrow-right"></i>
      </footer>
    </section>
    <!-- 添加浮动层 -->
    <section class="car-item car-float"
             :style="`height:${height}px`">
      <footer>
        <a href="javascript: void(0)">{{carPark}}</a>
        <i class="el-icon-close"></i>
      </footer>
      <header>
        <div class="car-logo">
          <!-- <el-image :src="url"  :fit="fit" >
                            <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                            </div>
                        </el-image> -->
          <img :src="url"
               :fit="fit" />
          <span>{{carStyle}}</span>
        </div>
        <div class="carStyleDetial">
          {{styleDetial}}
        </div>
      </header>
      <div class="car-item-content">
        <div class="content-left">
          <div>
            <h4 class="car-number">{{carNumber}}</h4>
            <div class="electricity "
                 :class="itemNumber">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span class="battery-life">
                <!-- sub 下标标签 -->
                <sub>约</sub>
                <strong>{{batteryLife}}</strong>
                <sub>KM</sub>
              </span>
            </div>

          </div>
        </div>
        <img :src="url"
             :fit="fit" />
      </div>
      <div class="appointment">预约用车</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SwiperInfo',
  props: {
    height: {
      type: String,
      default: '257'
    }
  },
  data() {
    return {
      fit: 'contain',
      url:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      carStyle: '福克斯2019款',
      styleDetial: '新能源汽车 5座',
      carNumber: '豫 A1M8L2',
      batteryLife: 600,
      itemNumber: 'item-5',
      carPark: '某某停车场'
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.car-item {
  //   position: relative;
  width: 505px;
  height: 257px;
  padding: 30px;
  background-color: #fff;
  border-radius: 24px;
  margin: auto;

  //调用封装的sass方法
  @include webkit(box-size, border-box);
  @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, 0.2));

  // -webkit-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
  // -moz-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
  // -ms-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
  // -o-box-shadow:0 0 18px 0 rgba(0,0,0,.2);
  // box-shadow:0 0 18px 0 rgba(0,0,0,.2);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: #ccc;
    height: 35px;
    line-height: 35px;
    .car-logo {
      //text-align: center;
      img {
        height: 100%;
        width: 50px;
        vertical-align: middle;
      }
    }

    .car-logo > span {
      margin-left: 15px;
      font-weight: 700;
    }
    .carStyleDetial {
      font-size: 16px;
      opacity: 0.5;
    }
  }

  .car-item-content {
    position: relative;
    height: 120px;
    width: 100%;
    margin: 11px 0 7px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0eb;
    //@extend %clearfix !optional;//清除浮动
    img {
      float: right;
      width: 250px;
      height: 120px;
    }
    .content-left {
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      // background-color: red;
    }
  }
  .car-number {
    font-size: 18px;
  }
  .electricity {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .electricity li {
    display: inline-block;
    width: 7px;
    height: 24px;
    margin-right: 3px;
    background-color: #e1e1e1;
    border-radius: 100px;
  }

  // 但是这么选择就固定写死了
  // .electricity li:nth-child(-n+6){
  //   background-color: #9999ff;
  // }
  // 改进---用sass中的方法 @for
  @for $i from 1 through 10 {
    .item-#{$i} {
      li:nth-child(-n + #{$i}) {
        background-color: #9999ff;
      }
    }
  }
  .battery-life {
    margin-left: 5px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    opacity: 0.5;
    .el-icon-close {
      cursor: pointer;
    }
  }
}
.car-float {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.appointment {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  color: #fff;
  width: 130px;
  height: 40px;
  text-align: -webkit-center;
  line-height: 40px;
  border-radius: 100px;
  background-color: #34393f;
  cursor: pointer;
}
</style>