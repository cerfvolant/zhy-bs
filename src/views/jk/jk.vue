<template>
  <div id="jk">
    <el-menu class="aside-menu" :default-active="$route.path" router active-text-color="#00ffff" text-color="#ffffff">
      <template v-for="(item,index) in $router.options.routes" v-if="$route.path.indexOf(item.path)!=-1">
        <el-menu-item class="aside-item clearfix" v-for="child in item.children" :index="child.path" :key="child.path">
          <svg-icon class="aside-icon" :icon-class="child.asideIcon"></svg-icon>
          <span class="aside-name">{{child.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'jk',
  data () {
    return {}
  }
}
</script>

<style lang="scss"></style>
