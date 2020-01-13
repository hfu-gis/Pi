<template>
  <v-app>
    <v-app-bar dark
               absolute
               color="dark grey"

               height="55"
    >
      <router-link to="/home">
        <v-img
                src="./assets/images/Logo-png.png"

                max-height="150"
                max-width="325"

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
                depressed
                position center
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"

        />
      </v-toolbar-items>
    </v-app-bar>


      <v-app>
        <router-view></router-view>
      </v-app>

  </v-app>
</template>

<script>
</script>

<style>
  main {
    background-image: url("../src/assets/images/startseite.jpg.jpg");
    background-size: cover;

  }



</style>
