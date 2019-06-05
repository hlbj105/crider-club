<template>
  <div class="app-header">
    <img class="logo" src="/icon.png" alt="" />

    <el-menu
      default-active="/"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/share">分享</el-menu-item>
      <el-menu-item index="/ask">问答</el-menu-item>
      <el-submenu class="right" index="#">
        <template slot="title">
          <img
            class="avatar"
            src="https://cdn.v2ex.com/gravatar/61d0dc88ed6970dd0e44d1bf5b60a20b?s=200&r=g"
            alt="avatar"
          />
        </template>
        <el-menu-item index="4-1">退出登陆</el-menu-item>
      </el-submenu>
      <el-menu-item class="right" index="">消息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
  .logo {
    margin-right: 15px;
    height: 60px;
  }
  .el-menu-demo {
    width: 100%;
    .right {
      float: right;
    }
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>
