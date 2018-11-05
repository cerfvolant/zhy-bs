<template>
  <div id="detactor">
    <el-col class="section" id="detactor-section">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="ygLogo" />
        <span>烟雾情况</span>
      </div>
      <div class="section-info detactor-info">
        <svg-icon class="detactor-img" icon-class="ygLogo" />
        <svg-icon class="detactor-icon" :icon-class="ygIcon" />
        <h1 class="detactor-status">{{ygStatus}}</h1>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
    name: 'detactor',
    data() {
        return {
          ygIcon: 'ygNormal',
          ygStatus: '正常'
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$dark_gray:red;
span.svg-container {
    color: $dark_gray;
}
</style>
