<!--Created by 熊超超 on 2018/4/24.-->
<template>
  <div class="left" data-flex="dir:top" tabindex="1">
    <div class="logo" data-flex-box="0" data-flex="cross:center main:center">
      <span v-if="menuExpand" class="f-24">iFace-Admin</span>
      <span v-else class="f-18">iFace</span>
    </div>
    <el-menu ref="menu" :default-active="selectedTab"
         :collapse="!menuExpand"
         @select="selectMenu" data-flex-box="1">
      <el-menu-item :index="'0'" key="0" v-show="false">
        <!--这个隐藏的菜单为了解决首页的时候，高亮的菜单项不挣钱-->
      </el-menu-item>
      <template v-for="menu in menus">
        <el-submenu :index="menu.id" v-if="menu.children" :key="menu.id">
          <template slot="title">
            <cc-icon :name="menu.icon" size="18"></cc-icon>
            <span slot="title" class="m-l-5">{{menu.name}}</span>
          </template>
          <el-menu-item v-for="menu2 in menu.children" :index="menu2.id" :key="menu2.id" :route="{path: menu2.url}">
            <template slot="title">
              <cc-icon name="ring" size="14"></cc-icon>
              <span slot="title" class="m-l-5">{{menu2.name}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.id" v-else :route="{path: menu.url}" :key="menu.id">
          <cc-icon :name="menu.icon" size="18"></cc-icon>
          <span slot="title" class="m-l-5">{{menu.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Mutation, Getter } from 'vuex-class'

export default @Component class MenuView extends Vue {
  /* vue-props */
  /* vue-vuex */
  @State((state) => state.common.menus) menus
  @State((state) => state.common.menuExpand) menuExpand
  // @State((state) => state.common.menuTabs) menuTabs[]
  @State((state) => state.common.selectedTab) selectedTab
  @Getter flatMenu
  @Action getMenu
  // @Mutation updateTabs
  @Mutation updateSelectedTab
  /* vue-data */
  perIndex = '0'
  // activeMenuIndexPath[] = []
  // get activeMenu() {
  //   return this.selectedTab
  // }
  // /*vue-compute*/
  // set activeMenu(val) {
  //   this.updateSelectedTab(val)
  // }
  /* vue-watch */
  // @Watch('activeMenu')
  // activeMenuChange() {
  //   // if (this.selectedTab === '0') {
  //   //   return
  //   // }
  //   // 点击菜单的时候，取到当前菜单和所有上级菜单的数组（层级数组），用于nav显示
  //   // 并且把这个数组整体放到一个数组，用于tabs显示
  //   // 点击tabs的时候，取到点击的菜单层级数组， 替换nav显示
  //   // 数据结构类似 [{key: '1', menus: [{一级菜单}, {二级菜单}]}, {}...]
  //   // const key = val.join('_')
  //   const val = this.activeMenuIndexPath
  //   const menus: Menu[] = val.map((id) => {
  //     return this.flatMenu.find((m: Menu) => m.id === id)
  //   })
  //   if (menus.length) {
  //     // 如果menuTabs不存在，表示是新开一个标签
  //     const item = this.menuTabs.find((o) => o.key === this.selectedTab)
  //     if (!item) {
  //       this.updateTabs({key: this.selectedTab, url: menus[menus.length - 1].url, menus})
  //     }
  //   }
  // }
  // nav是选择的菜单数组，当这个值变化的时候，说明当前选择的菜单被改变了
  // 那跳转URL
  // 监听这个值跳转url而不是在菜单选择事件回调的时候跳转，是因为菜单可能在别的地方被改变
  // @Watch('nav')
  // publicNavChange(val: Menu[]) {
  //   if (val.length) {
  //     this.$router.push(val[val.length - 1].url)
  //   }
  // }
  /* vue-lifecycle */
  /* vue-method */
  // 菜单选择的回调
  selectMenu (index) {
    // 此处的处理同tab页一样，也是为了消除组件点击就切换了当前激活的item的效果
    // 实现页面真正跳转才激活
    this.perIndex = this.selectedTab
    this.updateSelectedTab(index)
    this.$nextTick(() => {
      this.updateSelectedTab(this.perIndex)
      this.$el.focus()
      const menu = this.flatMenu.find((m) => m.id === index)
      if (menu) {
        if (menu.url.startsWith('/baseData/iframe')) {
          this.$utils.toTab(encodeURI(menu.url), menu.name)
        } else {
          this.$router.push(menu.url)
        }
      }
    })
    // this.activeMenuIndexPath = indexPath
    // this.activeMenu = index
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars.scss";
  $color-menu-bg: mix($color-black, $color-primary, 76%);
  .left{
    .logo{
      height: 50px;
      color: $color-white;
      background-color: mix($color-black, $color-primary, 10%);
    }
  }
  .left:focus{
    outline: 0;
  }
  .left /deep/ {
    .el-menu:not(.el-menu--collapse) {
      width: 200px;
    }
    .el-menu{
      border-right: 0;
      background-color: $color-menu-bg;

      .svg-icon {
        margin-bottom: -2px;
      }
    }
    .el-submenu__title, .el-menu-item{
      color: rgba($color-white, 0.6);
    }
    .el-submenu__title:hover, .el-menu-item:hover, .el-menu-item:focus{
      background-color: mix($color-black, $color-menu-bg, 15%);
      color: $color-white;
    }

    .el-menu--inline{
      background-color: mix($color-white, $color-menu-bg, 5%);
      .svg-icon {
        margin-bottom: -1px;
      }
      .el-submenu__title, .el-menu-item{
        color: rgba($color-white, 0.4);
      }
      .el-submenu__title:hover, .el-menu-item:hover, .el-menu-item:focus{
        background-color: inherit;
        color: $color-white;
      }

      .is-active{
        color: $color-white;
      }
    }

    .el-menu-item{
      height: 44px;
      line-height: 44px;
    }
    .el-submenu .el-menu-item{
      height: 36px;
      line-height: 36px;
    }
  }
</style>
