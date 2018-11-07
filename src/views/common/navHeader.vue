<template>
  <div id="navHeader">
    <el-row class="nav clearfix">
      <!--导航左：logo-->
      <el-col class="nav-left" :span="7">
        <svg-icon class="svg-logo" icon-class="zhyLogo"></svg-icon>
        <span class="nav-left-name">中国海洋石油</span>
        <span class="nav-left-info">海上环境监控综合系统</span>
      </el-col>
      <!--导航右：功能块-->
      <el-col class="nav-tab" :span="9">
        <div @click="isNavTabActive(index)" :class="item.isTabColorChange?'tabChange':'tabNotChange'" class="tab-item clearfix" v-for="(item,index) in navTab" :key="item.object">
          <svg-icon class="tab-svg-logo" :icon-class="item.tabIcon"></svg-icon>
          <span>{{item.tabName}}</span>
        </div>
        <el-badge class="tab-warning" :value="200" :max="9">
          <svg-icon icon-class="warning"></svg-icon>
        </el-badge>
        <el-dropdown>
          <span class="el-dropdown-link userinfo">{{sysUserName}}
            <img class="user-avatar" src="../../assets/static/img/user-avatar.jpg" alt="">
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'navHeader',
    data () {
      return {
        navTab: [
          {
            tabIcon: 'home',
            tabName: '首页',
            navPage: 'home',
            isTabColorChange: true
          },
          {
            tabIcon: 'jk',
            tabName: '监控',
            navPage: 'jk',
            isTabColorChange: false
          },
          {
            tabIcon: 'stateRIcon',
            tabName: '报表报告',
            navPage: 'stateReport',
            isTabColorChange: false
          },
          {
            tabIcon: 'xtgl',
            tabName: '系统管理',
            navPage: 'xtgl',
            isTabColorChange: false
          }
        ],
        sysUserName: '管理员',
      }
    },
    methods: {
      isNavTabActive (key) {
        this.navTab.forEach((val) => {
          val.isTabColorChange = false
        });
        this.navTab[key].isTabColorChange = !this.navTab[key].isTabColorChange;
        this.$router.push({
          name: this.navTab[key].navPage
        });
        console.log(123)
      },
      logout () {
        this.$router.push({
          name: "login"
        });
      }
    }
  }
</script>

<style lang="scss">
  @mixin flex-vertical {
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
  .nav {
    background-color: #313131;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .nav-left {
      @include flex-vertical;
      justify-content: space-around;
      /*>img {*/
        /*width: 30px;*/
        /*height: 30px;*/
        /*!*padding: 0 10px;*!*/
      /*}*/
      .svg-logo {
        font-size: 35px;
      }
      .nav-left-name {
        font-size: 18px;
        font-weight: 800;
      }
      .nav-left-info {
        font-size: 14px;
        font-weight: 100;
      }
    }
    .nav-tab {
      @include flex-vertical;
      justify-content: space-around;
      float: right;
      .tab-item {
        font-size: 14px;
        cursor: pointer;
        @include flex-vertical;
        .tab-svg-logo {
          font-size: 17px;
        }
        span {
          margin-left: 3px;
        }
      }
      .tabChange {
        color: #00ffff;
      }
      .tab-warning {
        cursor: pointer;
        font-size: 17px;
        .el-badge__content {
          height: 14px;
          line-height: 14px;
          border: none;
          background-color: #ff0048;
        }
      }
      .userinfo {
        @include flex-vertical;
        cursor: pointer;
        color: #fff;
        .user-avatar {
          border-radius: 10px;
          height: 30px;
          width: 30px;
          margin: 0 10px;
        }
      }
    }
  }
</style>
