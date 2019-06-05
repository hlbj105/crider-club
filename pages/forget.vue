<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <section class="container">
        <el-row>
          <el-col>
            <h1>欢迎访问凌派俱乐部</h1>
            <h2>忘记密码</h2>
          </el-col>
          <el-col>
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="邮箱" prop="mail">
                <el-input
                  v-model="ruleForm.mail"
                  placeholder="请输入注册邮箱"
                  style="width: 90%;"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
          <el-col class="forget">
            <nuxt-link to="/register">注册新用户</nuxt-link>
            <nuxt-link to="/login">去登陆</nuxt-link>
          </el-col>
        </el-row>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        mail: [{ required: true, message: '请输入注册邮箱', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          //   console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  margin-top: 30px;
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    margin: 10px 0;
  }
  .demo-ruleForm {
    margin-top: 20px;
  }
}
.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  color: nth($list: $textColour, $n: 4);
}
</style>
