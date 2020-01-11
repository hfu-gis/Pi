<template>
  <v-app>
    <v-app-bar dark
               absolute
               color="dark grey"

               height="50"
    >
      <router-link to="/home">
        <v-img
                src="./assets/images/Logo-png.png"
                justify="center"
                max-height="175"
                max-width="250"

                contain>
        </v-img>
      </router-link>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn text router to="/login">
          <v-icon left>mdi-account</v-icon> Login
        </v-btn>
        <v-btn text router to="/Registrieren">
          <v-icon left>mdi-account-edit</v-icon> Register
        </v-btn>

        <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
        />
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-app>
        <router-view></router-view>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
</script>
import footerNew from 'Footer';
