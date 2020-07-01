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
    path:'/quiz',
    name:'mtf',
    component:()=>import('../views/quiz.vue'),
    props:(route) => ({ prevscore: route.query.score,nos:route.query.noq })
  },
  {
    path:'/maq',
    name:'maq',
    component:()=>import('../components/maq.vue'),
    props:(route) => ({ prevscore: route.query.score,nos:route.query.noq })
  },
  {
    path:'/tf',
    name:'tf',
    component:()=>import('../components/tf.vue'),
    props:(route) => ({ prevscore: route.query.score,nos:route.query.noq })
  },
  {
    path:'/creator',
    name:'mcqc',
    component:()=>import('../views/Navigator.vue')
  },
  {
    path:'/test',
    name:'Quiz',
    component:mcq
  },
  {
    path:'/sen',
    name:'sen',
    component:sen,
    props:(route) => ({ prevscore: route.query.score,nos:route.query.noq })
  },
  {
    path:'/complete',
    name:'complete',
    component:()=>import('../components/complete.vue'),
    props:(route) => ({ prevscore: route.query.score,nos:route.query.noq })
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
