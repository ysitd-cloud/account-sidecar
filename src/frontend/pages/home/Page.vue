<template>
    <baseline>
        <v-layout row>
            <v-flex xs6 sm4 offset-sm4>
                <v-card>
                    <v-card-media
                            :src="avatarUrl"
                            height="100px"
                            contain
                    ></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline">{{ displayName }} <small class="grey--text">{{ username }}</small></h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <span>Email: {{ email }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </baseline>
</template>

<script src="./script.js"></script>
