<template>
    <router-view></router-view>
</template>

<style lang="stylus" src="./app.styl"></style>

<script>
    export default {
      metaInfo: {
        title: 'YSITD Cloud Account',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        ],
      },
    };
</script>
