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


      <v-footer
              position absolute
              color="dark grey"
              padless


      >
        <v-row
                align="end"
                justify="center"
                no no-gutters

        >
          <v-btn
                  v-for="link in links"
                  :key="link"
                  color="white"
                  text
                  rounded
                  class="my-2"
          >
            {{ link }}
          </v-btn>
          <v-col
                  class="dark grey py-4 text-center white--text"
                  cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>SESSIONS</strong>
          </v-col>
        </v-row>
      </v-footer>
  </v-app>
</template>



<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Contact Us',
      ],
    }),
  }
</script>



