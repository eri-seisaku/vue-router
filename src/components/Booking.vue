<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
      <h2>予約</h2>
      <p>ご希望日</p>
      <!-- Date Picker -->
        <v-date-picker
          v-model="dates"
          single
          no-title
          locale="jp-ja"
          :day-format="date => new Date(date).getDate()"
        ></v-date-picker>

        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <v-select
          v-model="selectTime"
          :items="items"
          :rules="[v => !!v || '選択してください']"
          label="ご希望時間"
          required
        ></v-select>

        <v-select
          v-model="selectPerson"
          :items="persons"
          :rules="[v => !!v || '選択してください']"
          label="ご利用人数"
          required
        ></v-select>

        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="お名前"
          required
        ></v-text-field>
    
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="メールアドレス"
          required
        ></v-text-field>

    
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || '同意するにチェックを入れてください']"
          label="同意する"
          required
        ></v-checkbox>
    
        <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        送信
      </v-btn>

      </v-form>
      </v-col>


      <v-col
        cols="12"
        sm="6"
      >
      <h2>予約内容確認</h2>
        <P>ご希望日: {{ dates }}</P>
        <P>ご希望時間: {{ selectTime }}</P>
        <P>ご利用人数: {{ selectPerson }}</P>
        <P>お名前: {{ name }}</P>
        <P>メールアドレス: {{ email }}</P>

      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.v-picker__body {
  width: 100%!important;
}
h2 {
  text-align: center;
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
        name: '',
        email: ''
      }
    },
  }

</script>