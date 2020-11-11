<template>
  <div class="main">
    <the-header :tags="tagsNav" />
    <div class="container-items">
      <ul>
        <li
          v-for="article of articles"
          :key="article.slug"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <div class="">
              <h2 class="font-bold">
                {{ article.title }}
              </h2>
              <p>By {{ article.author.name }} | {{ formatDate(article.updatedAt) }}</p>
              <!--<p class="font-bold text-gray-600 text-sm">{{ article.description }}</p>-->
            </div>
          </NuxtLink>
          <hr />
        </li>
      </ul>
    </div>
    <TheFooter />
  </div>
  <!--       <a
           href="https://twitter.com/Nachor_v"
           target="_blank"
         >
           <img src="~assets/svg/twitter-2.svg" alt="twitter" class="icon">
         </a>-->
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components : { TheFooter, TheHeader },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tagsNav = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tagsNav
    }
  },
  data() {
    return {
      open : false
    }
  },
  methods : {
    formatDate(date) {
      const options = { year : 'numeric', month : 'long', day : 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    }
  },
  head : {
    title : 'Home page | IRVB👨🏼‍💻'
  }
}
</script>

<style scoped>
.main {
  max-width: 100vw;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: black;
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}
.container-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 70vh;
  margin: 25px auto;
  font-family: 'Special Elite','Menlo','Inconsolata', cursive;
}
@media (max-width: 1010px) {
  .container-items {
    width: 95vw;
    max-width: 100vw;
    margin: 0;
  }
  ul, li {
    padding: 5px;
    width: 100%;
  }
}

</style>
