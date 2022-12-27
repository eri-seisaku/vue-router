<template>
  <!-- 左側 -->
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-date-picker
        v-model="dates"
        single
      ></v-date-picker>
    </v-col>

  <!-- 右側 -->
    <v-col
      cols="12"
      sm="6"
    >

      model: {{ dates }}
    </v-col>
  </v-row>
</template>

<style>

</style>

<script>

  export default {
    data: () => ({
      dates: ''
    })
  }
</script>