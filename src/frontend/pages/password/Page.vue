<template>
    <baseline>
        <v-form
                v-model="valid"
                action="/password"
                method="POST"
        >
            <v-container fluid>
                <v-card>
                    <v-card-text>
                        <v-text-field
                                required
                                v-model="origin"
                                label="Origin Password"
                                :rules="[]"
                                name="origin"
                                type="password"
                        ></v-text-field>
                        <v-text-field
                                required
                                v-model="newPassword"
                                label="New Password"
                                name="newPassword"
                                :rules="rules.newPassword"
                                type="password"
                        ></v-text-field>
                        <v-text-field
                                required
                                v-model="confirmPassword"
                                label="Confirm Password"
                                name="confirmPassword"
                                :rules="rules.confirmPassword"
                                type="password"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn type="submit" flat color="primary" :disabled="!valid">Submit</v-btn>
                        <v-btn type="reset" flat color="secondary">Reset</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-form>
    </baseline>
</template>

<script src="./script.js"></script>
