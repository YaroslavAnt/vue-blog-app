<template>
  <div class="fill-height">
    <v-breadcrumbs divider=">">
      <v-breadcrumbs-item link to="/">Home</v-breadcrumbs-item>
      <v-breadcrumbs-item link to="/login">Login</v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <login-form :handleSubmit="handleSubmit"></login-form>
          {{ user }}
        </v-col>
      </v-row>

      <v-snackbar v-model="snackbar" :right="true" :top="true">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import { apiService } from "../api";
import loginForm from "../components/LoginForm.vue";
import { mapActions } from "vuex";
export default {
  components: {
    loginForm,
  },
  data() {
    return {
      users: [],
      user: undefined,
      snackbar: false,
      text: "",
    };
  },
  methods: {
    handleSubmit(email) {
      const loggedUser = this.users.find((user) => user.email === email);
      this.setUser(loggedUser);
      loggedUser
        ? this.$router.push("/")
        : this.showMessage("Wrong credentials");
    },
    showMessage(msg) {
      this.snackbar = true;
      this.text = msg;
    },
    ...mapActions(["setUser"]),
  },

  async mounted() {
    const { data } = await apiService.getUsers();
    this.users = data || [];
  },
};
</script>

<style lang="scss" scoped></style>
