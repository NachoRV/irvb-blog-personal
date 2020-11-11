<template>
  <div>
    <TheHeader :tags="tagsNav" />
    <div class="container">
      <img
        :src="tag.img"
        :alt="tag.name"
        class="img"
      />
      <h1>
        {{ tag.name }}
      </h1>
      <p>{{ tag.description }}</p>
      <hr />
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <h2>
              {{ article.title }}
            </h2>
            <p>
              {{ formatDate(article.updatedAt) }}
            </p>
            <hr />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter'
export default {
  components : { TheFooter },
  async asyncData({ $content, params }) {
    const tagsNav = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const tags = await $content('tags')
      .where({ slug : { $contains : params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags : { $contains : tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tagsNav,
      tag,
      tags
    }
  },
  methods : {
    formatDate(date) {
      const options = { year : 'numeric', month : 'long', day : 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title : `${this.tag.title} | IRVB 👨🏼‍💻`,
      meta  : [
        {
          hid     : 'description',
          name    : 'description',
          content : `${this.tag.description}`
        }, {
          hid     : 'twitter:title',
          name    : 'twitter:title',
          content : `${this.tag.title} | IRVB 👨🏼‍💻`
        },
        {
          hid     : 'twitter:description',
          name    : 'twitter:description',
          content : `${this.tag.description}`
        },
        {
          hid     : 'og:title',
          name    : 'og:title',
          content : `${this.tag.title} | IRVB  👨🏼‍💻`
        },
        {
          hid     : 'og:description',
          name    : 'og:description',
          content : this.tag.description
        },
        {
          hid      : 'og:image',
          property : 'og:image',
          content  : `${this.tag.image}`
        },
        {
          hid      : 'og:image:secure_url',
          property : 'og:image',
          content  : `${this.tag.image}`
        },
        {
          hid      : 'og:image:alt',
          property : 'og:image:alt',
          content  : this.tag.title
        }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  width: 95%;
  margin: 15px auto;
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
ul, li {
 list-style: none;
  padding: 0;
  margin: 15px 0;
}

a {
  color: black;
}

@media (min-width: 992px) {
  .img {
    width: 750px;
  }
  .container {
    width: 65%;
  }
}
</style>
