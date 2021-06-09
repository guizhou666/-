<template>
  <div class="content-box">
      <div class="content" v-for="(item,index) in data" :key="index">
          <span>{{item.name}}</span>
          <el-progress :percentage="Number(item.value)" :format="format"></el-progress>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  props: {
    data: {},
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
  },
  mounted() {},
  methods: {
         format(percentage) {
        return percentage === 100 ? '' : '';
      }
  },
};
</script>
<style lang="scss" scoped>
    .content-box{
        color: #999795;
    }
</style>
