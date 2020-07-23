<template>
  <v-form class="elevation-12 pa-6 text-right" @submit.prevent="onSubmit">
    <v-text-field
      label="Email"
      name="email"
      prepend-icon="mdi-mail"
      type="email"
      v-model="email"
      :rules="emailRules"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn color="primary" @click="onSubmit" :disabled="isDisabled">Login</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    handleSubmit: {
      type: Function,
      default: () => null,
    },
  },
  methods: {
    onSubmit() {
      this.handleSubmit(this.email);
      this.email = "";
    },
  },
  data() {
    return {
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  computed: {
    isDisabled() {
      return !this.email || !/.+@.+/.test(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>