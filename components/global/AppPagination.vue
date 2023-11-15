<template>
  <nav class="flex items-center justify-center">
    <ul class="flex items-center gap-1">
      <li class="">
        <button
          class="px-3 py-1"
          :class="{ ' cursor-not-allowed': currentPage === 1 }"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          &nbsp; &LeftArrow; Previous
        </button>
      </li>
      <li v-for="pageNumber in pages" :key="pageNumber" class="mr-2">
        <button
          class="py-0.5 px-3.5 rounded-full"
          :class="{ 'bg-blue text-white': pageNumber === currentPage }"
          @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </li>
      <li class="">
        <button
          class="px-3 py-1"
          :disabled="currentPage === totalPages"
          :class="{ 'cursor-not-allowed': currentPage === totalPages }"
          @click="nextPage"
        >
          Next &nbsp; &RightArrow;
        </button>
      </li>
    </ul>
    <!-- <p class="text-gray-500">Page {{ currentPage }} of {{ totalPages }}</p> -->
  </nav>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    pages() {
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, this.currentPage + 2);
      const pagesArray = [];

      for (let i = startPage; i <= endPage; i++) {
        pagesArray.push(i);
      }

      return pagesArray;
    },
  },
  methods: {
    prevPage() {
      this.$emit("update:currentPage", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("update:currentPage", this.currentPage + 1);
    },
    goToPage(pageNumber) {
      this.$emit("update:currentPage", pageNumber);
    },
  },
};
</script>
