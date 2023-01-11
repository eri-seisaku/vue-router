<template>
  <v-app>
    <v-card width="900px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">予約</h1>
      </v-card-title>
      <v-card-text>
        <p>ご希望日</p>
      <!-- Date Picker -->
        <v-date-picker
          v-model="dates"
          single
          no-title
          locale="jp-ja"
          :day-format="date => new Date(date).getDate()"
        ></v-date-picker>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <span class="subheading">お客様情報入力</span>

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
      </v-card-text>
    </v-card>
  </v-app>
</template>
<style>
.v-picker__body {
  width: 100%!important;
}
.v-card__title {
  color: #fff;
  background-color: #008B93;
}
.theme--light.v-card {
  background-color: #F1F2F6;
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