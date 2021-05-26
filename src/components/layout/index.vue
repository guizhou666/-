<template>
  <div class="home-centre">
    <div class="left">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#0c1d2d"
            text-color="#fff"
            active-text-color="#0099ff"
          >
          <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="() => {$router.push({path:'/home'})}">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>生死簿</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="userManagement">用户管理</el-menu-item>
                <el-menu-item index="1-2">同步数据</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="right">
        <div class="header">
            <user-info></user-info>
        </div>
        <div class="right-centre">
           <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import UserInfo from './user-info';
export default {
  components: {
    UserInfo
  },
  data() {
    return {};
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    userManagement(){
        this.$router.push({path:'/death'})
    }
  },
};
</script>
<style lang="scss" scoped>
.home-centre {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 200px;
    overflow: hidden;
    // height: 100%;
    background-color: #0c1d2d;
    & ::v-deep .el-menu {
        border: none;
    }
  }
  .right{
      width: calc(100% - 200px);
      height: 100%;
      .header {
          height: 50px;
      }
      .right-centre{
              height: calc(100% - 50px);
              padding: 20px 140px;
              background-color: #e6e4e4;
          }

  }
}
</style>
