<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
        <v-toolbar dark color="primary" app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <a href="/">YSITD Cloud Account</a>
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
        };
      },
    };
</script>
