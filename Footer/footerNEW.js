import {footer} from 'company-footer.vue';

<template>
<v-footer
color="darkgrey"
padless
>
<v-row
justify="center"
no-gutters
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
class="primary lighten-2 py-4 text-center white--text"
cols="12"
    >
    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
</v-col>
</v-row>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            'Home',
            'About Us',
            'FAQ',
            'Contact Us',
            'Services',
            'Data protection guidelines',
            'Cookies',
            'Disclosure',
        ],
    }),
}
</script>