<template>

        <v-app-bar app right dark
                   src=background color="dark grey">
            <v-toolbar-title>SESSIONS</v-toolbar-title>
            <v-spacer />
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon :to="{name:'Profilseite'}">
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
                <v-icon>mdi-login</v-icon>
            </v-btn>

        </v-app-bar>




</template>

