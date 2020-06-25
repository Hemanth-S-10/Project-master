import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import mcq from '../components/mcq.vue'
import sen from '../components/test.vue'
import Success from '../views/success.vue'
import pay from '../views/paymentpage.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/tel',
      name:'tel',
      component:()=>import('../components/tel.vue')
    },  
  {
    path:'/cart',
    name:'cart',
    component:()=>import('../views/cart.vue')
  },
  {
    path:'/mtfc',
    name:'mtfc',
    component:()=>import('../views/creator.vue')
  },
  {
    path:'/quiz',
    name:'mcq',
    component:()=>import('../views/quiz.vue')
  },
  {
    path:'/mcqc',
    name:'mcqc',
    component:()=>import('../components/mcqcreator.vue')
  },
  {
    path:'/mcq',
    name:'Quiz',
    component:mcq
  },
  {
    path:'/asent',
    name:'asent',
    component:()=>import('../components/sentence.vue')
  },
  {
    path:'/sen',
    name:'sen',
    component:sen
  },
  {
    path:'/otp',
    name:'otp',
    component:()=>import('../components/otp.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component:Success
  },
  {
    path:'/pay',
    name:'Pay',
    component:pay,
    props:(route) => ({ price: route.query.price })
  }
  
]

const router = new VueRouter({
  routes
})

export default router
