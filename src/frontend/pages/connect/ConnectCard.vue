<template>
    <v-card>
        <v-card-text class="pt-5">
            <v-icon class="headline">{{ icon }}</v-icon>
        </v-card-text>
        <v-card-title class="justify-center mt-3 pb-0">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-card-actions class="justify-center">
            <v-btn flat color="primary" :href="url">Connect</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped lang="stylus">
    .card_title
        text-align center

    .card__text
        text-align: center
        .icon
            font-size 7rem !important
            color black
</style>

<script>
    export default {
      name: 'ConnectCard',
      props: {
        id: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
      computed: {
        url() {
          return `/connect/${this.id}`;
        },
      },
    };
</script>
