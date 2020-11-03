<template>
  <NuxtLink to="/">
    <div class="container">
      <h1 class="title-one">IRVB</h1>
      <h2 class="title-two">FrontEnd Developer</h2>
      <h2 class="title-tree">Blog Personal</h2>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.container {
  margin: 15px;
}
h1, h2, h3 {
  background-color: black;
  color: white;
  font-family: 'Special Elite', cursive;
  margin: 1px;
}
.title-one {
  width: 100px;
}
.title-two {
  width: 350px;
}
.title-tree {
  width: 350px;
}
</style>
