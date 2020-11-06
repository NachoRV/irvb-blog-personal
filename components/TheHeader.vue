<template>
  <div>
    <NuxtLink to="/">
      <div class="container-header">
        <h1 class="title-one">IRVB</h1>
        <h2 class="title-two">FrontEnd Developer</h2>
        <h2 class="title-tree">Blog Personal</h2>
      </div>
    </NuxtLink>
    <ul class="nav">
      <li v-for="tag of tags" :key="tag.slug" class="nav-item">
        <NuxtLink :to="`/blog/tag/${tag.slug}`">
          <p>{{ tag.name }}</p>
        </NuxtLink>
      </li>
    </ul>
    <div class="nav-movil-container">
      <img v-b-toggle.sidebar-variant src="~assets/svg/menu.svg" alt="nav" class="nav-icon btn-nav" />
      <b-sidebar
        id="sidebar-variant"
        title="Categorias"
        bg-variant="dark"
        text-variant="light"
        shadow
      >
        <div class="px-3 py-2">
          <ul class="nav-movil">
            <li v-for="tag of tags" :key="tag.slug" class="nav-item">
              <NuxtLink :to="`/blog/tag/${tag.slug}`">
                <p>{{ tag.name }}</p>
              </NuxtLink>
      </li>
    </ul>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name  : 'TheHeader',
  props : {
    tags : Array
  },
  created() {
    console.log(this.tags)
  }
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
h1,
h2,
h3 {
  background-color: black;
  color: white;
  font-family: "Special Elite", cursive;
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
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px 10px;
  font-family: "Special Elite", cursive;
}
.nav-item {
  transition: all 0.3s;
}
.nav-item:hover {
  text-decoration: underline black;
}
.btn-nav {
  position: absolute;
  top: 10px;
  right: 10px;
}
.nav-movil-container {
  display: none;
}
.nav-icon{
  size: 40px;
  width: 40px;
  height: 40px;
}
@media (max-width: 1010px) {
  .nav-movil-container{
    display: flex;
  }
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
  .nav-movil {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    font-family: "Special Elite", cursive;
    color: white;
  }
  ul, li {
    list-style: none;
    color: white;
  }
  a {
    color: white;
  }
  .nav {
    display: none;
  }
}
</style>
