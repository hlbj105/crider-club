<template>
  <div class="block">
    <el-pagination
      :current-page="limit.currentPage"
      :page-sizes="[30, 50, 100, 150]"
      :page-size="limit.limit"
      :total="limit.total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    limit: {
      type: Object,
      default: () => {
        return {
          currentPage: 1
        }
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      // this.$emit()
      //   console.log(`每页 ${val} 条`)
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`)
      //   let timer = null
      //   cancelAnimationFrame(timer)
      //   timer = requestAnimationFrame(function fn() {
      //     const oTop =
      //       document.body.scrollTop || document.documentElement.scrollTop
      //     if (oTop > 0) {
      //       document.body.scrollTop = document.documentElement.scrollTop =
      //         oTop - 100
      //       timer = requestAnimationFrame(fn)
      //     } else {
      //       cancelAnimationFrame(timer)
      //     }
      //   })
      this.$emit('handleCurrentChange', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  text-align: right;
  margin-top: 20px;
}
</style>
