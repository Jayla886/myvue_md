import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import item from '@/components/item'
import detail from '@/components/detail'
import mytest from '@/components/mytest'
import test from '@/components/test'
import register from '@/components/register'
import login from '@/components/login'
import myprofile from '@/components/myprofile'
import uploadfile from '@/components/uploadfile'
import upload from '@/components/upload'
import show_touxiang from '@/components/show_touxiang'
import kaoshi from '@/components/kaoshi'
import addgoods from '@/components/addgoods'
import search from '@/components/search'


Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
        {
          path:'/item',
          name:'item',
          component:item
        },
        {
          path:'/detail',
          name:'detail',
          component:detail
        },
        {
          path:'/mytest',
          name:'mytest',
          component:mytest
        },
        {
          path:'/test',
          name:'test',
          component:test
        },
        {
          path:'/register',
          name:'register',
          component:register
        },
        {
          path:'/login',
          name:'login',
          component:login
        },
        {
          path:'/myprofile',
          name:'myprofile',
          component:myprofile,
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem("username")){
              console.log("已登录");
              next();
            }else{
              console.log('没有登录');
              next('/login');
            }
          }
        },
        {
          path:'/uploadfile',
          name:'uploadfile',
          component:uploadfile
        },
        {
          path:'/upload',
          name:'upload',
          component:upload
        },
        {
          path:'/show_touxiang',
          name:'show_touxiang',
          component:show_touxiang
        },
        {
          path:'/kaoshi',
          name:'kaoshi',
          component:kaoshi
        },
        {
          path:'/addgoods',
          name:'addgoods',
          component:addgoods
        },
        {
          path:'/search',
          name:'search',
          component:search
        },
]


export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
