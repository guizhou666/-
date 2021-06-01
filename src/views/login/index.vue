<template>
  <div class="login">
    <div class="login-box">
      <span class="title">
        <i class="iconfont icon-bqklt"></i>
        <span class="title-text">地府管理系统</span>
      </span>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="admin">
          <el-input v-model="ruleForm.admin" placeholder="账号/手机号/邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="login('ruleForm')">登录</el-button
          ><br />
          <el-button class="btn" @click="forgetPass('ruleForm')">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
 import { login } from "@/api/login"
export default {
  components: {},
  data() {
    return {
      ruleForm: {
        admin: "",
        pass: "",
      },
      rules:{
          admin: [
            { required: true, message: '请输入账号/手机号/邮箱', trigger: ['blur','change'] },
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: ['blur','change'] },
          ],
      }
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  created() {
      this._test();
  },
  mounted() {},
  methods: {
    // 登录
    login() {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
              const params = {
                  username:this.ruleForm.admin,
                  password:this.ruleForm.pass
              }
              const { code,message } = await login(params);
              if(code === 200) {
                  this.$message.success(message);
                  this.$router.push({path:'/home'});
              }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    // 忘记密码
    forgetPass() {},
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
//   background-image: url('@/assets/img/loginBg.jpg');
  background-image: url("../../assets/img/loginBg.jpg");
  background-size: 100% 100%;
  .login-box {
    width: 400px;
    height: 400px;
    text-align: center;
    padding-top: 20px;
    background-color:rgba($color: #fbfafa, $alpha: 0.5);
    //    border: 1px solid #333333;
    .title {
      display: inline-block;
      font-size: 20px;
      margin-bottom: 50px;
      .title-text {
        margin-left: 10px;
        font-family: cursive;
      }
    }
    .el-form .el-form-item {
      margin-bottom: 40px;
      .btn {
        width: 100%;
        margin: 10px 0px;
      }
      &::v-deep .el-form-item__content {
        margin-left: 50px !important;
        margin-right: 50px;
      }
    }
  }
}
</style>
