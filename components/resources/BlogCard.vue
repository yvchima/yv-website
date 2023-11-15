<template>
  <div is="a" :href="`/blog/${blog.slug}`">
    <article
      class="group hover:shadow-md transition-shadow duration-300 cursor-pointer h-full"
    >
      <header class="">
        <div class="rounded h-48">
          <LazyImage
            :alt="blog.image.caption"
            class="w-full h-full object-cover rounded-t-2xl"
            :src="blog.image.url"
          />
        </div>
      </header>
      <div class="px-4 py-6">
        <div class="bg-blue-150 text-blue text-sm rounded w-fit px-5 py-2">
          {{
            blog.blog_categories
              ? blog.blog_categories[0].categoriesName
              : category
          }}
        </div>
        <div v-show="!short" class="mt-4 flex items-center space-x-5">
          <span class="text-blue-300 text-sm font-semibold truncate">
            {{ blog.author }}</span
          >
          <span class="bg-blue w-3 h-3 rounded-full"></span>
          <span class="text-blue truncate">{{ blog.date | formatDate }}</span>
        </div>
        <h4
          class="text-grey group-hover:text-blue-300 text-lg font-semibold mt-4"
        >
          {{ blog.title }}
        </h4>

        <div
          class="font-semibold outline-0 transition-colors duration-200 group-hover:text-blue-300 text-grey mt-3"
        >
          Read more &nbsp; &RightArrow;
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
    short: Boolean,
    category: String,
  },
};
</script>
