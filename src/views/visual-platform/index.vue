<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <i class="iconfont icon-bqklt"></i>
        <span>地府大数据可视化平台</span>
      </div>
      <div class="right">
        <span>{{ nowTime | dateFmt("YYYY/M/D HH:mm:ss") }}</span>
        <span>酆都&nbsp;{{ weather }} {{ temperature }}℃</span>
      </div>
    </div>
    <div class="centre">
      <div class="centre-left">
        <div class="people-number">
          <dv-border-box-12> </dv-border-box-12>
        </div>

        <carousel></carousel>
      </div>
      <div class="centre-centre">
        <!-- <dv-border-box-11 title="dv-border-box-11">
          <dv-flyline-chart-enhanced
            :dev="true"
            :config="config"
            style="width: 100%; height: 100%"
          />
        </dv-border-box-11> -->
      </div>
      <div class="centre-right"></div>
    </div>
  </div>
</template>

<script>
import carousel from "./carousel";
export default {
  components: {
    carousel,
  },
  data() {
    return {
      nowTime: "",
      weather: "",
      temperature: "",
      config: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },
            icon: {
              // src: '/img/flylineChart/mapCenterPoint.png',
              width: 30,
              height: 30,
            },
            text: {
              show: true,
            },
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "郑州",
          },
          {
            source: "平顶山",
            target: "郑州",
          },
          {
            source: "洛阳",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
          },
          {
            source: "漯河",
            target: "郑州",
          },
          {
            source: "南阳",
            target: "郑州",
          },
          {
            source: "信阳",
            target: "郑州",
          },
          {
            source: "驻马店",
            target: "郑州",
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
          },
          {
            source: "安阳",
            target: "郑州",
          },
        ],
        icon: {
          show: true,
          // src: '/img/flylineChart/mapPoint.png'
        },
        text: {
          show: true,
        },
        k: 0.5,
        //   bgImgSrc: '/img/flylineChart/map.jpg'
      },
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
    this.nowTime = new Date().getTime();
    this._getWeather();
  },
  mounted() {},
  methods: {
    _getWeather() {
      this.$http.get("http://wthrcdn.etouch.cn/weather_mini?city=南京").then((res) => {
        if (res.data.status === 1000) {
          this.weather = res.data.data.yesterday.type;
          this.temperature = res.data.data.wendu;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #282c34;
  .header {
    background-color: #030303;
    height: 50px;
    line-height: 50px;
    color: #cccccc;
    .left {
      margin-left: 20px;
      float: left;
      span {
        display: inline-block;
        margin-left: 10px;
      }
    }
    .right {
      font-size: 13px;
      float: right;
      margin-right: 20px;
      span {
        margin: 10px;
      }
    }
  }
  .centre {
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .centre-left,
    .centre-right {
      width: 300px;
      padding: 15px;
    }
    .centre-left {
      .people-number {
        width: 100%;
        height: 100px;
        margin-bottom: 20px;
      }
    }
    .centre-centre {
      flex: 1;
      height: calc(100% - 20px);
    }
  }
}
</style>
