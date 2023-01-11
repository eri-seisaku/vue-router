<template>
  <v-card
    class="mx-auto overflow-hidden"
    max-width="800"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>予約フォーム</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">
              ご希望日の選択<span class="vnumgf" id="i29" aria-label="必須の質問"> *</span>
            </v-card-title>

            <v-card-subtitle>ご希望の日を選択してください</v-card-subtitle>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-date-picker
          v-model="dates"
          single
          no-title
          locale="jp-ja"
          :day-format="date => new Date(date).getDate()"
        ></v-date-picker>
            </v-card-actions>
          </v-card>
        </v-col>


        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">
              施設・日程の選択<span class="vnumgf" id="i29" aria-label="必須の質問"> *</span>
            </v-card-title>

            <v-card-subtitle>ご希望の施設、時間を選択してください</v-card-subtitle>

            <v-divider class="mx-4"></v-divider>

            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  sm="12"
                  md="6"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                      

                      <v-checkbox
          v-model="allowSpaces"
          label="エリアA"
        ></v-checkbox>

        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="rgba(0, 0, 0, 0.6)"
              dark
              v-bind="attrs"
              v-on="on"
            >
            mdi-account-supervisor
            </v-icon>
          </template>
          <span>最大4名</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="rgba(0, 0, 0, 0.6)"
              dark
              v-bind="attrs"
              v-on="on"
            >
            mdi-weather-partly-rainy
            </v-icon>
          </template>
          <span>雨天利用可</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="rgba(0, 0, 0, 0.6)"
              dark
              v-bind="attrs"
              v-on="on"
            >
            mdi-calendar-check
            </v-icon>
          </template>
          <span>要予約</span>
        </v-tooltip>

                    </v-card-actions>
      
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions>
              <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <v-select
          v-model="selectArea"
          :items="areas"
          :rules="[v => !!v || '選択してください']"
          label="ご利用施設"
          required
        ></v-select>

        <v-select
          v-model="selectTime"
          :items="items"
          :rules="[v => !!v || '選択してください']"
          label="ご希望時間"
          required
        ></v-select>

      </v-form>
            </v-card-actions>
          </v-card>
        </v-col>



        <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">
              お客様情報入力<span class="vnumgf" id="i29" aria-label="必須の質問"> *</span>
            </v-card-title>

            <v-card-subtitle>お客様情報入力してください</v-card-subtitle>

            <v-divider class="mx-4"></v-divider>



            <v-card-actions>
              <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

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
            </v-card-actions>
          </v-card>
        </v-col>

        
      </v-row>
    </v-container>
    
  </v-card>

</template>
<style>
.vnumgf {
  color: #d93025;
  padding-left: 0.25em;
}
.v-picker__body {
  width: 100%!important;
}
form.v-form {
  width: 100%;
  padding: 16px;
}
.row--dense > .col, .row--dense > [class*=col-] {
  margin-bottom: 10px;
}
.v-icon.v-icon {
  padding: 0 8px;
}
</style>

<script>
  export default {
    data () {
      return {
        drawer: false,
        group: null,
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
        selectArea: '',
        areas: [
          'エリアA',
          'エリアB',
          'エリアC',
          'エリアD'
        ],
        name: '',
        email: '',
        cards: [
          { title: 'Pre-fab homes', src: require('../assets/area_a.jpg') },
          { title: 'Favorite road trips', src: require('../assets/area_b.jpg') },
          { title: 'Best airlines', src: require('../assets/area_c.jpg')},
          { title: 'Best airlines', src: require('../assets/area_d.jpg')},
        ]
      }
    },
  }



</script>