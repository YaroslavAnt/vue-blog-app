<template>
  <div class="fill-height">
    <v-breadcrumbs divider=">">
      <v-breadcrumbs-item link to="/">Home</v-breadcrumbs-item>
      <v-breadcrumbs-item link to="/post">Post</v-breadcrumbs-item>
    </v-breadcrumbs>

    <h1 class="text-h2 font-weight-bold text-uppercase">
      {{ post.title }}
    </h1>
    <p>{{ post.body }}</p>

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8">
          <h2 class="text-h3 mt-10">Comments</h2>

          <v-list :avatar="true" :three-line="true">
            <app-comment
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
            ></app-comment>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { apiService } from "../api";
import appComment from "../components/Comment.vue";

export default {
  components: {
    appComment,
  },
  data() {
    return {
      post: {},
      comments: [],
    };
  },
  async mounted() {
    const { postId } = this.$route.params;
    const { data: post } = await apiService.getPost(postId);
    this.post = post || {};
    const { data: comments } = await apiService.getComments(postId);
    this.comments = comments || [];
  },
};
</script>

<style lang="scss" scoped></style>
