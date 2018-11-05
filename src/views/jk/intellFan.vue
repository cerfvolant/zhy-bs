<template>
  <div id="intellFan">
    <el-col class="section intellFan-section" :span="7" v-for="item in intellFanSec">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="intellFanLogo" />
        <span>智能风扇-{{item.intellFanNum}}</span>
      </div>
      <div class="section-info" id="intellFan-info">
        <svg-icon class="intellFan-svg" icon-class="fanDynamic" />
        <div id="intellFan-calc">
          <span v-on:click="minus" id="count-delete" class="count el-icon-minus"></span>
          <span id="count-plus" class="count el-icon-plus"></span>
          <div id="intellFan-dot" ref="dotBox">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="intellFan-detail">
          <span>{{item.count}}</span>
          <span>风扇转速等级</span>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'content-section',
    data() {
      return {
        intellFanSec: [
          {
            intellFanNum: '01',
            count: 0,
          },
          {
            intellFanNum: '02',
            count: 0,
          },
          {
            intellFanNum: '03',
            count: 0,
          }
        ],
      }
    },
    methods: {
      minus: function (e) {
        this.$refs.dotBox.style.backgroundColor = "#fff100";
      }
    }
  }
</script>

<style lang="scss"></style>
