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
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
          { rel: 'icon', href: 'https://ysitd.cloud/logo-16x16.png', sizes: '16x16' },
          { rel: 'icon', href: 'https://ysitd.cloud/logo-32x32.png', sizes: '32x32' },
        ],
      },
    };
</script>
