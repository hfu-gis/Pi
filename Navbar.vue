<template>
  <div>
    <v-row justify="space-around">
      <v-switch v-model="extended" class="mx-2" label="Extended"></v-switch>
      <v-switch v-model="extendedSlot" class="mx-2" label="Extension slot"></v-switch>
      <v-switch v-model="prominent" class="mx-2" label="Prominent"></v-switch>
      <v-switch v-model="dense" class="mx-2" label="Dense"></v-switch>
      <v-switch v-model="collapse" class="mx-2" label="Collapse"></v-switch>
      <v-switch v-model="flat" class="mx-2" label="Flat"></v-switch>
      <v-switch v-model="bg" class="mx-2" label="Background"></v-switch>
      <v-col cols="12">
        <v-slider v-model="extensionHeight" label="Extension height" min="0" max="320"></v-slider>
      </v-col>
    </v-row>

    <v-toolbar
            :extended="extended"
            :prominent="prominent"
            :dense="dense"
            :collapse="collapse"
            :flat="flat"
            :src="bg" colors class='dark-grey'
            :extension-height="extensionHeight"
    >


      <v-toolbar-title>SESSIONS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Login</v-btn>
        <v-btn text>Profil</v-btn>
        <v-btn text>Settings</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>