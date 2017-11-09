<template>
    <baseline>
        <v-layout row>
            <v-flex
                    xs12
                    sm6 offset-sm3
                    md4 offset-md4
                    lg2 offset-lg5
            >
                <v-card>
                    <v-card-media
                            :src="avatarUrl"
                            height="100px"
                            contain
                    />
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline">{{ displayName }}</h3>
                            <span class="grey--text">{{ username }}</span>
                        </div>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                        <span>Email: {{ email }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </baseline>
</template>

<script src="./script.js"></script>
