<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
      <!-- Date Picker -->
        <v-date-picker
          v-model="dates"
          single
        ></v-date-picker>




      <!-- Combobox -->
        <v-combobox
        v-model="selectTime"
        :items="items"
        label="ご希望時間"
        solo
        outlined
        dense
      ></v-combobox>

      <!-- Combobox -->
      <v-combobox
      v-model="selectPerson"
      :items="persons"
      label="ご利用人数"
      solo
      outlined
      dense
    ></v-combobox>
      </v-col>

    
      <v-col
        cols="12"
        sm="6"
      >
      <h2>予約内容確認</h2>
        <P>希望日時: {{ dates }}</P>
        <P>利用開始時間: {{ selectTime }}</P>
        <P>ご利用人数: {{ selectPerson }}</P>

      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.v-picker__body {
  width: 100%!important;
}
</style>

<script>
  export default {
    data () {
      return {
        dates: '',
        selectTime: '',
        items: [
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
        ],
        selectPerson: '',
        persons: [
          '1人',
          '2人',
          '3人',
          '4人'
        ],
      }
    },
  }

</script>