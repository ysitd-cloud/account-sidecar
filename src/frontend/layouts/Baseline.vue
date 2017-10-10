<template>
    <v-app>
        <v-toolbar dark color="primary" app>
            <v-toolbar-title>YSITD Cloud Account</v-toolbar-title>
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