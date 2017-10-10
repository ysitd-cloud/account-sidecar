<template>
    <baseline>
        <v-progress-linear
                v-if="providers === null"
                indeterminate
        />
        <v-container fluid grid-list-md v-else>
            <v-layout row wrap>
                <v-flex
                        xs12
                        md6
                        lg3
                        v-for="provider in providers"
                        :key="provider.id">
                    <connect-card
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
