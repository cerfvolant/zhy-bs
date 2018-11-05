<template>
  <div id="app">
    <router-view></router-view>
    <navHeader></navHeader>
  </div>
</template>

<script>
import navHeader from './views/common/navHeader.vue';
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    navHeader
  }
}
</script>

<style lang="scss">
</style>
