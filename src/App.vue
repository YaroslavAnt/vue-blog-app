<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        :src="require('./assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
      <app-navigation></app-navigation>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon
        @click.stop="toggleDrawer"
        v-if="user"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Blog App</v-toolbar-title>

      <v-spacer></v-spacer>
      {{ user && user.email }}
      <v-menu left bottom v-if="user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <div class="main">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import appNavigation from "./components/Navigation.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    appNavigation,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer && !!this.user;
    },
    ...mapActions(["setUser"]),
    logout() {
      this.setUser(undefined);
      this.$router.push("/login");
    },
  },

  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
};
</script>

<style scoped>
.app {
  background-color: #aaa;
}
.main {
  padding: 0 5%;
  height: 100%;
}
</style>
