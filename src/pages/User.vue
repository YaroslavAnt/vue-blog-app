<template>
  <div class="fill-height">
    <v-breadcrumbs divider=">">
      <v-breadcrumbs-item link to="/">Home</v-breadcrumbs-item>
      <v-breadcrumbs-item link to="/user">User</v-breadcrumbs-item>
    </v-breadcrumbs>

    <h1 class="text-h2 font-weight-bold  text-uppercase">{{ user.name }}</h1>

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-list>
            <v-list-item>
              <v-icon class="indigo--text">mdi-mail</v-icon>
              <v-list-item-title class="blue-grey--text text-h4 ml-2">{{
                user.email
              }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon class="indigo--text">mdi-phone</v-icon>
              <v-list-item-title class="blue-grey--text text-h4 ml-2">{{
                user.phone
              }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon class="indigo--text">mdi-web</v-icon>
              <v-list-item-title class="blue-grey--text text-h4 ml-2">{{
                user.website
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { apiService } from "../api";

export default {
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    const { userId } = this.$route.params;
    const { data } = await apiService.getUser(userId);
    this.user = data || [];
  },
};
</script>

<style lang="scss" scoped></style>
