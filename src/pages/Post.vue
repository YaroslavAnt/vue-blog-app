<template>
  <div class="fill-height">
    <v-breadcrumbs divider=">">
      <v-breadcrumbs-item link to="/">Home</v-breadcrumbs-item>
      <v-breadcrumbs-item link to="/post">Post</v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8">
          <h1 class="text-h2 font-weight-bold mb-4 text-uppercase">
            {{ post.title }}
          </h1>
          <p>{{ post.body }}</p>

          <h2 class="text-h3 mt-10">Comments</h2>
          <v-list :avatar="true" :three-line="true">
            <v-list-item v-for="comment in comments" :key="comment.id">
              <v-list-item-avatar>
                <v-icon class="indigo--text">mdi-comment</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h4 ml-2">
                  {{ comment.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span class="text--primary font-weight-medium">{{
                    comment.email
                  }}</span>
                  &mdash;
                  {{ comment.body }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script>
import { apiService } from "../api";

export default {
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
