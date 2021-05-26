<template>
  <div class="user-info">
      <el-badge :value="12" class="item">
          <i class="iconfont icon-xiaoxitongzhitixinglingshenglingdang"></i>
        </el-badge>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"> admin </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="login-out">退出登录</el-dropdown-item>
          <el-dropdown-item command="change-pass">更改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
  methods: {
    handleCommand(command) {
      if (command === "login-out") {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.user-info {
  height: 100%;
  width: 100%;
  line-height: 50px;
  text-align: right;
  padding: 0 70px;
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .item {
    margin-right: 20px;
    & ::v-deep .el-badge__content.is-fixed{
        top: 10px;
    }
  }
}
</style>
