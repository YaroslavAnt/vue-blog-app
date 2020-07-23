<template>
  <div>
    <v-text-field
      label="Search"
      prepend-icon="mdi-magnify"
      v-model="search"
    ></v-text-field>
    <h1 class="text-h2 font-weight-bold text-uppercase pt-10">Posts</h1>
    <div class="grid">
      <app-card
        v-for="post in paginatedPosts"
        :key="post.id"
        :post="post"
      ></app-card>
    </div>
    <div class="text-center pb-10" v-if="posts.length > 0">
      <v-pagination
        v-model="currentPage"
        :length="pagesAmount"
        :value="currentPage + 1"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { apiService } from "../api";
import appCard from "../components/Card.vue";

export default {
  components: {
    appCard,
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      search: "",
    };
  },
  async mounted() {
    const { data } = await apiService.getPosts();
    this.posts = data || [];
    console.log({ data });
  },
  computed: {
    paginatedPosts() {
      return this.posts.slice(this.currentPage - 1, this.currentPage + 10);
    },
    pagesAmount() {
      return Math.ceil(this.posts.length / 10);
    },
  },

  watch: {
    async search(newValue) {
      const { data } = await apiService.getFilteredPosts(newValue);
      this.posts = data;
    },
  },
};
</script>

<style scoped>
.grid {
  padding: 5% 0;
  display: grid;
  gap: 30px;
}
</style>
