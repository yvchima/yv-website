<template>
  <div is="a" :href="`/industry/reports/${article.slug}`">
    <article
      class="group hover:shadow-md transition-shadow duration-300 cursor-pointer h-full"
    >
      <header class="">
        <div class="rounded h-48">
          <LazyImage
            :src="article.image.url"
            :alt="article.image.alternativeText || article.title"
            class="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
      </header>
      <div class="py-6 px-4">
        <h3 class="text-lg hover:text-blue-300 font-medium text-grey">
          {{ article.title }}
        </h3>
        <div class="flex items-center justify-between mt-6">
          <span class="text-blue"> Read more &nbsp; &RightArrow; </span>
          <span class="text-blue">{{ article.published_at | formatDate }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import readTime from "@/helpers/readTime.js";

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
    computeReadTime(wordCount) {
      return readTime(wordCount);
    },
  },
};
</script>
