<template>
  <div class="map-box">
    <div id="myChart" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
  },
  mounted() {
      this.drawLine();
  },
  methods: {
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        const data = require('../../../public/json/530000_full');
        this.$echarts.registerMap('yns', data);
        const option ={
                title: {
                    text: '云南省',
                },
                geo: {
                    map: 'yns',
                    zlevel: 10,
                    show:true,
                    layoutCenter: ['50%', '50%'],
                    roam: false,
                    layoutSize: "90%",
                    zoom: 1,
                    label: {
                        normal: {
                            show: true,
                            textStyle:{
                                fontSize:12,
                                color: '#43D0D6'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#062031',
                            borderWidth: 1.1,
                            borderColor: '#43D0D6'
                        }
                    },
                    emphasis: {
                            areaColor: '#FFB800',
                            label:{
                                show:false
                            }
                        }
                }
        }
        // 绘制图表
        myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
    .map-box{
        width: 100%;
        height: 100%;
    }
</style>
