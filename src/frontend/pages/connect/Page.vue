<template>
    <baseline>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md6 lg3>
                    <connect-card
                            v-for="provider in providers"
                            :key="provider.id"
                            :id="provider.id"
                            :name="provider.name"
                            :icon="provider.icon"
                    />
                </v-flex>
            </v-layout>
        </v-container>
    </baseline>
</template>

<script src="./script.js"></script>
