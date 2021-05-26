<template>
  <div class="container">
    <div class="header">
      <span>AM 9:00</span>
      <span class="title">大事件审判</span>
    </div>
    <div class="centre">
        <li>时间： </li>
        <li>地点：</li>
    </div>
    <hr>
    <div class="bottom">
        <li>PM 6:00</li>
        <li>PM 11:80</li>
    </div>
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
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
    .header{
        height: 50px;
        line-height: 50px;
        background-color: #0099ff;
        color: #ffffff;
        span{
            display: inline-block;
        }
        .title{
            margin-left: 100px;
        }
    }
    .centre,.bottom{
        font-size: 12px;
        line-height: 30px;
    }
}
</style>
