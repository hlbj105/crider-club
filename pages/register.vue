<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <section class="container">
        <el-row>
          <el-col>
            <h1>欢迎访问凌派俱乐部</h1>
            <h2>注册</h2>
          </el-col>
          <el-col>
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入用户名或者邮箱"
                  style="width: 90%;"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  placeholder="请输入密码"
                  style="width: 90%;"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  v-model="ruleForm.checkPass"
                  placeholder="请输入密码"
                  style="width: 90%;"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >立即注册</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col class="forget">
            <nuxt-link to="/login">有账号？去登陆</nuxt-link>
          </el-col>
        </el-row>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名或者邮箱'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [{ validator: validateName, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
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
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
  text-align: right;
  padding: 30px;
  color: nth($list: $textColour, $n: 4);
}
</style>
