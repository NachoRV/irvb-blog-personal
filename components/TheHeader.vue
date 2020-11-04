<template>
  <NuxtLink to="/">
    <div class="container-header">
      <h1 class="title-one">
        IRVB
      </h1>
      <h2 class="title-two">
        FrontEnd Developer
      </h2>
      <h2 class="title-tree">
        Blog Personal
      </h2>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name : 'TheHeader'
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  display: block;
}
a:hover {
  color: black;
  text-decoration: none;
}
.container-header {
  margin: 15px;
}
h1, h2, h3 {
  background-color: black;
  color: white;
  font-family: 'Special Elite', cursive;
  align-items: center;
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
@media (max-width: 1010px) {
.container-header {
  margin-left: 5px;
}
.title-one {
  width: 100px;
}
.title-two {
  width: 300px;
}
.title-tree {
  width: 300px;
}
}
</style>
