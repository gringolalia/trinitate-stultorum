import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import XFile from '@/components/Test'
import Dummy1 from '@/components/Dummy1'
import Dummy2 from '@/components/Dummy2'
import Dummy3 from '@/components/Dummy3'
import Dummy4 from '@/components/Dummy4'
import Dummy5 from '@/components/Dummy5'
import Dummy6 from '@/components/Dummy6'
import SobreIsso from '@/components/SobreIsso'
import SobreAquilo from '@/components/SobreAquilo'
import Hendrix from '@/components/BandofGypsies'
import Marxism from '@/components/BrothersMarx'
import Angels from '@/components/CharlesAngels'
import DisneyDucks from '@/components/HueyDeweyLouie'
import Magi from '@/components/KingsofOrient'
import Macbet from '@/components/MacbethWitches'
import Pigs from '@/components/Pigs'
import Bears from '@/components/Bears'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sobre-isso',
      name: 'SobrePobre',
      component: SobreIsso
    },
    {
      path: '/sobre-aquilo',
      name: 'SobreNobre',
      component: SobreAquilo
    },
    {
      path: '/x-file',
      component: XFile,
      children: [
        {
          path: '',
          component: Dummy1
        },
        {
          path: 'tab-2',
          component: Dummy2
        },
        {
          path: 'tab-3',
          component: Dummy3
        },
        {
          path: 'tab-4',
          component: Dummy4
        },
        {
          path: 'tab-5',
          component: Dummy5
        },
        {
          path: 'tab-6',
          component: Dummy6
        }
      ]
    }
  ]
})
