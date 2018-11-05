<template>
  <div id="dp">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane :label="i.dpTapTitle" :name="i.dpSeries" v-for="(i,index) in dpTabBox">
        <el-col class="section">
          <div class="section-title">
            <svg-icon class="svg-logo" icon-class="" />
            <span>设备{{i.dvNum}}参数</span>
          </div>
          <div class="section-info dp-info">
            <div class="dp-ul" v-for="value in i.dpUl">
              <div class="dp-subName">{{value.dpSubName}}：</div>
              <input class="dpTitle" type="text">
            </div>
            <div id="dp-btn">
              <el-button>配置</el-button>
              <el-button type="success" plain>重置</el-button>
            </div>
          </div>
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'dp',
  data() {
    return {
      activeName2: 'first',
      dpTabBox: [
        {
          dpTapTitle: '设备01',
          dpSeries: 'first',
          dvNum: '01',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备02',
          dpSeries: 'second',
          dvNum: '02',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备03',
          dpSeries: 'third',
          dvNum: '03',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备04',
          dpSeries: 'fourth',
          dvNum: '04',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备05',
          dpSeries: '',
          dvNum: '05',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备06',
          dpSeries: '',
          dvNum: '06',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备07',
          dpSeries: '',
          dvNum: '07',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备08',
          dpSeries: '',
          dvNum: '08',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        },
        {
          dpTapTitle: '设备09',
          dpSeries: '',
          dvNum: '09',
          dpUl: [
            {
              dpSubName: '品牌'
            },
            {
              dpSubName: '序列号'
            },
            {
              dpSubName: '型号'
            },
            {
              dpSubName: '安装时间'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
//      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss">
  .el-tabs__header {
    margin-left: .5%;
    border-bottom: none !important;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border-left-color: #434343;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom: none;
  }
  .el-tabs__item {
    width: 100%;
    text-align: center;
    background-color: #313131;
    color: #ffffff;
  }
  .el-tabs__item.is-active {
    background-color: #1b1b1b;
    color: #00ffff;
  }
  .el-tabs__item:hover {
    color: #00ffff;
  }
  .dp-info {
    .dp-ul {
      box-sizing: content-box;
      .dp-subName , .dpTitle {
        display: block;
        width: 100%;
      }
      .dpTitle {
        background-color: #313131;
        border: 1px solid #000000;
        color: #ffffff;
        outline: none;
        padding: 8px 0;
        text-indent: 6px;
        margin: 10px 0;
      }
    }
    #dp-btn {
      padding: 10px 0;
      .el-button {
        padding: 9px 22px;
      }
    }
  }
</style>
