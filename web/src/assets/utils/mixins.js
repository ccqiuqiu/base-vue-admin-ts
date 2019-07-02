/**
 * Created by 熊超超 on 2018/6/21.
 */
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component class BaseMixin extends Vue {
  loading = false
  @Getter nav
  get pageTitle () {
    return this.nav && this.nav.length ? this.nav[this.nav.length - 1].name : ''
  }
  created () {
    // 注册刷新数据的监听
    this.name && this.$bus.$on('refresh-' + this.name, () => this.getData && this.getData())
  }
  destroyed () {
    // 取消刷新数据的监听
    this.name && this.$bus.$off('refresh-' + this.name)
  }
}

@Component class PageMixin extends Vue {
  layout = 'total, sizes, prev, pager, next, jumper'
  pageSize = 10
  pageNum = 1
  rows = []
  total = 0
  selectedRows = []
  currentRow = null

  created () {
    this.getData()
  }
  // pageNum改变的时候的事件
  pageNumChange (pageNum) {
    this.pageNum = pageNum
    this.getData()
  }
  // pageSize改变的时候的事件
  pageSizeChange (pageSize) {
    this.pageSize = pageSize
    this.getData()
  }
}
export {BaseMixin, PageMixin}
