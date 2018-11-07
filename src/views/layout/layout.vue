<template>
  <div id="layout">
    <!--router-view></router-view-->
    <app-main/>
    <navHeader></navHeader>
  </div>
</template>

<script> 
import navHeader from '../common/navHeader.vue';
import AppMain from './components/appmain.vue';

export default {
  name: 'layout',
  data () {
    return {}
  },
  components: {
    navHeader,
    AppMain
  }
}
</script>

<style lang="scss">
</style>