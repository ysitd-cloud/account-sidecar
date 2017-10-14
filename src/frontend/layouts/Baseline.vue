<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.url" :to="link.url">
                    <v-list-tile-content>{{ link.display }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark color="primary" app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/">YSITD Cloud Account</router-link>
            </v-toolbar-title>
        </v-toolbar>
        <main>
            <v-content>
                <v-container fluid>
                    <slot></slot>
                </v-container>
            </v-content>
        </main>
        <v-footer app>&copy; 2017 YSITD Cloud</v-footer>
    </v-app>
</template>

<style scoped lang="stylus">
    .toolbar__title a
        color: inherit
        text-decoration: none
</style>

<script>
    export default {
      data() {
        return {
          drawer: false,
          links: [
            { url: '/connect', display: 'Connect Social Account' },
          ],
        };
      },
    };
</script>
