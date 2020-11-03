<template>
  <div class="container-article">
    <the-header></the-header>
    <!--  <AppSearchInput />-->

    <article class="article">
      <div>
        <img
          :src="article.img"
          :alt="article.alt"
          class="img shadow"
        />
      </div>
      <h1>{{ article.title }}</h1>
<!--      <div>
        <div >
          📅 {{ formatDate(article.updatedAt) }} |
          <span v-for="(tag, id) in article.tags" :key="id">
          <NuxtLink :to="`/blog/tag/${tags[tag].slug}`">
            <span
              class=""
            >
              {{ tags[tag].name }}
            </span>
          </NuxtLink>
        </span>

        </div>
        &lt;!&ndash; content from markdown &ndash;&gt;
        <nuxt-content :document="article"/>
        &lt;!&ndash; content author component &ndash;&gt;
        <author :author="article.author"/>
        &lt;!&ndash; prevNext component &ndash;&gt;
        <PrevNext :prev="prev" :next="next" class="mt-8"/>
      </div>-->
    </article>
    <TheFooter/>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
export default {
  components: { TheFooter, TheHeader },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name]: s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      tags,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.container-article{
  margin: auto;
}

.article {
  margin: 25px auto ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
@media (max-width: 1010px) {
  .article{
    width: 100%;
    margin: auto;
  }
}
</style>
