<template>
  <login-view /><!-- 小文字にする必要がある？ -->
</template>

<script>
  import LoginView from '../components/Login.vue'

  export default {
    name: 'Login',

    components: {
      LoginView, // 2つ以上の単語にする必要がある？キャメルケース？
    },
  }
</script>
