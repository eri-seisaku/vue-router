<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome HomePage
        </h1>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          各ページへのリンク
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in pageLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      pageLinks: [
        {
          text: 'Login',
          href: '/login',
        },
        {
          text: 'Admin',
          href: '/admin',
        },
        {
          text: 'Booking',
          href: '/booking',
        },
      ]
    }),
  }
</script>
