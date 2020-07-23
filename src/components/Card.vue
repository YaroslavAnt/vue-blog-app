<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <h3 class="text-h4 mb-2 text-uppercase">{{ post.title }}</h3>
        <p class="grey--text">{{ post.body }}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn text color="orange" :to="`/user/${post.userId}`">view user</v-btn>
      <v-btn text color="orange" :to="`/post/${post.id}`">view post</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
