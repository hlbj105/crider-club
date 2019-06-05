<template>
  <list :url="url" />
</template>

<script>
import List from '~/components/List'
export default {
  components: { List },
  data() {
    return {
      url: ''
    }
  }
}
</script>

<style></style>
