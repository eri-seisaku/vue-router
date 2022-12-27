<template>
  <booking-view /><!-- 小文字にする必要がある？ -->
</template>

<script>
  import BookingView from '../components/Booking.vue'

  export default {
    name: 'Booking',

    components: {
      BookingView, // 2つ以上の単語にする必要がある？キャメルケース？
    },
  }
</script>
