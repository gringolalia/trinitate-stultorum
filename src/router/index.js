import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Dummy1 from '@/components/Dummy1'
import Dummy2 from '@/components/Dummy2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      component: Test,
      children: [
        {
          path: '',
          component: Dummy1
        },
        {
          path: 'tab-2',
          component: Dummy2
        }
      ]
    }
  ]
})
