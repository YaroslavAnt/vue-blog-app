<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="pagesAmount"></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pagesAmount: {
      type: Number,
      default: 10,
    },
    page: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped></style>
