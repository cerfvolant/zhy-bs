<template>
  <div id="intellFan">
    <el-col class="section intellFan-section" :span="7" v-for="item in intellFanSec">
      <div class="section-title">
        <svg-icon class="svg-logo" icon-class="intellFanLogo"/>
        <span>智能风扇-{{item.intellFanNum}}</span>
      </div>
      <div class="section-info intellFan-info">
        <svg-icon class="intellFan-svg" icon-class="fanDynamic"/>
        <div class="intellFan-calc">
          <span v-on:click="minusBox(item)" class="count count-minus el-icon-minus"></span>
          <span v-on:click="addBox(item)" class="count count-add el-icon-plus"></span>
          <div class="intellFan-dot">
            <span v-bind:class="{ active : item.count >= 1}"></span>
            <span v-bind:class="{ active : item.count >= 2}"></span>
            <span v-bind:class="{ active : item.count >= 3}"></span>
            <span v-bind:class="{ active : item.count >= 4}"></span>
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
      minusBox: function (item) {
        if (item.count >= 1) {
          item.count = item.count - 1
        }
      },
      addBox: function (item) {
        if (item.count <= 3) {
          item.count = item.count + 1
        }
      }
    }
  }
</script>

<style lang="scss"></style>
