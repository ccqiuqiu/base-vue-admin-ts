/**
 * Created by 熊超超 on 2018/4/25.
 */

import Vue from 'vue'
import SvgIcon from '../../baseComponent/CcIcon.vue'

Vue.component('cc-icon', SvgIcon)

const content = require.context('./svg', false, /\.svg$/)
content.keys().map(content)
