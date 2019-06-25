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
              <el-form-item label="用户名" prop="username">
                <el-input
                  v-model="ruleForm.username"
                  placeholder="请输入用户名"
                  style="width: 90%;"
                ></el-input>
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                <el-input
                  v-model="ruleForm.email"
                  placeholder="请输入邮箱"
                  style="width: 90%;"
                ></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                  style="width: 90%;"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="rpassword">
                <el-input
                  v-model="ruleForm.rpassword"
                  placeholder="请输入密码"
                  style="width: 90%;"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item class="codeSvg" label="验证码" prop="code">
                <el-input
                  v-model="ruleForm.code"
                  placeholder="请输入验证码"
                  style="width: 70%;margin-right: 10px;"
                ></el-input>
                <div @click="getCode()" v-html="codeSvg"></div>
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
import { getVerifyCode } from '@/api/tools'
import { signup } from '@/api/sign'
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('validatePass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      codeSvg: '',
      ruleForm: {},
      rules: {
        username: [
          { required: true, validator: validateName, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        rpassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    async getCode() {
      const res = await getVerifyCode()
      this.codeSvg = res.data.data
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          signup(this.ruleForm)
            .then(res => {
              this.$notify({
                title: '成功',
                message: '注册成功',
                type: 'success'
              })
              setTimeout(() => {
                this.$router.push('/login')
              })
            })
            .catch(() => {
              this.getCode()
            })
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
<style lang="scss">
.codeSvg .el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
