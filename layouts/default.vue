<template>
  <el-container>
    <el-header>
      <app-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <app-footer />
      <back-to-top />
    </el-footer>
  </el-container>
</template>
<script>
import AppHeader from '~/components/Header'
import AppFooter from '~/components/Footer'
import BackToTop from '~/components/BackToTop'
export default {
  components: { AppHeader, AppFooter, BackToTop }
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
}
.el-header {
  width: 100%;
}
.el-main {
  min-height: calc(100vh - 120px);
}
.el-footer,
.el-header {
  background: #fff;
}
</style>
