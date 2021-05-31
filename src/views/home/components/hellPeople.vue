<template>
  <div class="container" ref="container">
    <div id="myChart2" :style="{ width: echartWidth, height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      echartWidth: "",
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {
    this._initEchart();
    this.echartWidth = this.$refs.container.clientWidth * 0.7 + "px";
  },
  methods: {
    _initEchart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      let opraciton = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      };

      myChart.setOption(opraciton);
    },
  },
};
</script>
<style lang="scss" scoped></style>
