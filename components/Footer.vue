<template>
  <div id="footer">
    <p>
      Copyright © 2019 {{ nowYear === 2019 ? '' : '- ' + nowYear + ' ' }}
      <a class="" href="/">CRIDER Club</a> All Rights Reserved.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  text-align: center;
  color: nth($textColour, 1);
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
