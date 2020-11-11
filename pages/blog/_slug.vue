<template>
  <div>
    <the-header :tags="tagsNav" />
    <article class="article">
      <img
        :src="article.img"
        :alt="article.alt"
        class="img"
      />
      <h1>{{ article.title }}</h1>
      <div class="date-tag-section">
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
      <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <!--<author :author="article.author" />-->
      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="mt-8" />
    </article>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
export default {
  components : { TheFooter, TheHeader },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name : { $containsAny : article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name] : s })))
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    const tagsNav = await $content('tags')
      .only(['name', 'description', 'img', 'slug', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      article,
      tagsNav,
      tagsList,
      tags,
      prev,
      next
    }
  },
  head() {
    return {
      title : `${this.article.title} | IRVB 👨🏼‍💻`,
      meta  : [
        {
          hid     : 'description',
          name    : 'description',
          content : `${this.article.description}`
        }, {
          hid     : 'twitter:title',
          name    : 'twitter:title',
          content : `${this.article.title} | IRVB 👨🏼‍💻`
        },
        {
          hid     : 'twitter:description',
          name    : 'twitter:description',
          content : `${this.article.description}`
        },
        {
          hid     : 'og:title',
          name    : 'og:title',
          content : `${this.article.title} | IRVB👨🏼‍💻`
        },
        {
          hid     : 'og:description',
          name    : 'og:description',
          content : this.article.description
        },
        {
          hid      : 'og:image',
          property : 'og:image',
          content  : `${this.article.image}`
        },
        {
          hid      : 'og:image:secure_url',
          property : 'og:image',
          content  : `${this.article.image}`
        },
        {
          hid      : 'og:image:alt',
          property : 'og:image:alt',
          content  : this.article.title
        }
      ]
    }
  },
  methods : {
    formatDate(date) {
      const options = { year : 'numeric', month : 'long', day : 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.article {
  margin: auto;
  width: 95%;
  margin-bottom: 15px;
}
.img {
  display: block;
  margin: 50px auto;
  width: 90%;
}
img {
  width: 90%;
}
.date-tag-section {
  margin-bottom: 50px;
}
@media (min-width: 992px) {
  .img {
    width: 750px;
  }
  .article {
    width: 65%;
  }
}
</style>

