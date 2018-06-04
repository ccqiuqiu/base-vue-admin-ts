/**
 * Created by 熊超超 on 2018/5/29.
 */
import CcTable from '../baseComponent/CcTable.vue'
import CcButton from '../baseComponent/CcButton.vue'
import CcForm from '../baseComponent/CcForm.vue'
import CcCrud from '../baseComponent/CcCrud.vue'
import VueProgressBar from 'vue-progressbar'
import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
import VePie from 'v-charts/lib/pie'
import VeRing from 'v-charts/lib/ring'
import VeChart from 'v-charts/lib/chart'

export default {
  install(Vue: any): void {
    Vue.component('cc-table', CcTable)
    Vue.component('cc-button', CcButton)
    Vue.component('cc-form', CcForm)
    Vue.component('cc-crud', CcCrud)
    Vue.component(VeLine.name, VeLine)
    Vue.component(VeHistogram.name, VeHistogram)
    Vue.component(VePie.name, VePie)
    Vue.component(VeRing.name, VeRing)
    Vue.component(VeChart.name, VeChart)
    Vue.use(VueProgressBar, {
      color: '#4ebaf8',
      failedColor: '#F56C6C',
    })
  },
}
