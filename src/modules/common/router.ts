/**
 * Created by 熊超超 on 2018/4/20.
 */
import { AsyncComponent } from 'vue'

const Login: AsyncComponent = (): any => import(/* webpackChunkName: "public" */ './view/Home.vue')

export default [
  {
    path: '/',
    name: 'home',
    component: Login,
  },
]
