<template>
  <section class="container">
    <el-row v-for="item in 2" :key="item" class="item">
      <el-col :span="1" class="left">
        <img
          class="avatar"
          src="https://cdn.v2ex.com/gravatar/61d0dc88ed6970dd0e44d1bf5b60a20b?s=200&r=g"
          alt="avatar"
        />
      </el-col>
      <el-col :span="22" class="main">
        <nuxt-link :to="'/article/' + item" class="title"
          >标题{{ item }}</nuxt-link
        >
      </el-col>
      <el-col :span="1" class="right">
        <nuxt-link :to="'/article/' + item" class="conut">{{ item }}</nuxt-link>
      </el-col>
    </el-row>
    <pagination
      :limit="limit"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    />
  </section>
</template>

<script>
import pagination from '@/components/Pagination'
export default {
  components: { pagination },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      limit: {
        currentPage: 1,
        limit: 30,
        total: 40
      }
    }
  },
  methods: {
    getList() {},
    handleCurrentChange(e) {
      this.limit.currentPage = e
      this.getList()
    },
    handleSizeChange(e) {
      this.limit.currentPage = 1
      this.limit.limit = e
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  max-width: 1366px;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  .item {
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid nth($list: $borderColour, $n: 1);
    padding: 15px;
    &:first-child {
      border-top: 1px solid nth($list: $borderColour, $n: 1);
    }
    .main {
      padding: 0 10px;
      .title {
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .left {
      width: 50px;
      flex-shrink: 0;
    }
    .right {
      width: 50px;
      flex-shrink: 0;
    }
    .conut {
      display: block;
      line-height: 1.7;
      background: nth($list: $colour, $n: 5);
      color: #fff;
      text-align: center;
      text-decoration: none;
      border-radius: 20px;
    }
  }
}
</style>
