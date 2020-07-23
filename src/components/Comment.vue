<template>
  <v-list-item>
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
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
