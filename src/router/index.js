import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component:()=>import("@/views/index/index.vue"), //路由懒加载方式

    // 配置的子级路由会加载到首页组件的 router-view 中
    children:[
      {
        path:"/user",
        name:"User",
        component:()=>import("@/views/user/index.vue"),
      },
      {
        path:"/myCount",
        name:"MyCount",
        meta:{
          name:"我的账户"
        },
        component:()=>import("@/views/myCount/index.vue"),
      },
      {
        path:"/order",
        name:"Order",
        meta:{
          name:"租车订单"
        },
        component:()=>import("@/views/order/index.vue"),
      },
      {
        path:"/authentication",
        name:"Authentication",
        meta:{
          name:"实名认证"
        },
        component:()=>import("@/views/authentication/index.vue"),
      },
      {
        path:"/securitySet",
        name:"SecuritySet",
        meta:{
          name:"安全设置"
        },
        component:()=>import("@/views/securitySet/index.vue"),
      },
      {          
        path:"/passModify",
        name:"PassModify",
        meta:{
          name:"修改密码"
        },
        component:()=>import("@/views/passModify/index.vue"),
      },
      {
        path:"/help",
        name:"Help",
        meta:{
          name:"帮助中心"
        },
        component:()=>import("@/views/help/index.vue"),
      },
    ]
  },
];

// 解决路由重复的报错问题，不影响项目运行
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
