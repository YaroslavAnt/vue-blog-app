<template>
  <div class="grid">
    <app-card v-for="post in posts" :key="post.id" :post="post"></app-card>
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
    };
  },
  async mounted() {
    const { data } = await apiService.getPosts();
    this.posts = data || [];
    console.log({ data });
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
