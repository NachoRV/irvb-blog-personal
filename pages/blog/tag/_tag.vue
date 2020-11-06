<template>
  <div>
    <TheHeader v-bind:tags="tagsNav" />
    <div class="container-tag-items">
      <div class="">
        <img
          :src="tag.img"
          :alt="tag.name"
          class="absolute h-full w-full object-cover"
        />
      </div>
      <div>
        <div>
          <h1>
            {{ tag.name }}
          </h1>
          <p>{{ tag.description }}</p>

          <nuxt-content :document="tag" />
        </div>
      </div>
      <div>
        <!--       <NuxtLink to="/">
              <p class="hover:underline">Back to All Articles</p>
              </NuxtLink> -->
        <ul>
          <li
            v-for="article in articles"
            :key="article.slug"
            class="w-full px-2 xs:mb-6 md:mb-12 article-card"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >
              <div>
                <h2 class="">
                  {{ article.title }}
                </h2>
                <p>
                  {{ formatDate(article.updatedAt) }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
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
          content : `${this.tag.title} | IRVB👨🏼‍💻`
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
.container-tag-items {
  width: 50%;
  margin: auto;
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
  font-family: 'Special Elite','Menlo','Inconsolata', cursive;
  list-style: none;
  margin: auto;
  padding: 0;
}
h1, p {
  font-family: 'Special Elite','Menlo','Inconsolata', cursive;
}
@media (max-width: 1010px) {
  .container-tag-items {
    width: 100%;
    margin: auto;
  }
}
</style>
