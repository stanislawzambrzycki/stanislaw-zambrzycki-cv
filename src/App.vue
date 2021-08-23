<template>
  <v-app id="inspire">
    <v-sheet
      color="grey darken-1"
      class="d-flex justify-start justify-center"
      relative
    >
      <div
        style="position: fixed; right: 1em; top: 1em; z-index: 999"
        class="d-print-none d-flex flex-column flex-md-row"
      >
        <v-btn
          fab
          dark
          small
          class="ma-1 ml-md-2"
          color="deep-purple darken-4"
          href="https://github.com/stanislawzambrzycki/stanislaw-zambrzycki-cv"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn
          fab
          dark
          small
          class="ma-1 mx-md-2"
          color="teal darken-4"
          @click="doIt"
        >
          <v-icon>mdi-printer</v-icon>
        </v-btn>

        <v-btn
          fab
          dark
          small
          class="ma-1 mr-md-2"
          color="red accent-4"
          @click="changeLanguage"
          max-height="38"
          max-width="38"
        >
          <v-fade-transition group hide-on-leave mode="out-in">
            <v-avatar v-if="lang === 'pl'" key="pl">
              <v-img max-height="40" max-width="40" src=./assets/PL.png />
            </v-avatar>

            <v-avatar v-else key="eng">
              <v-img max-height="40" max-width="40" src=./assets/UK.webp />
            </v-avatar>
          </v-fade-transition>
        </v-btn>
      </div>
      <v-sheet
        tile
        min-height="100vh"
        max-width="700px"
        color="indigo  lighten-5"
      >
        <v-main style="height: 100%">
          <v-fade-transition group mode="out-in" hide-on-leave>
            <div v-if="lang" key="langSet">
              <v-card
                v-for="(card, index) in dictLanguage"
                :key="lang + index"
                class="ma-3 px-3 px-sm-8"
                color="grey lighten-5"
              >
                <div v-if="card.horizontal !== true">
                  <v-card-title
                    class="text-wrap pb-2 text-body-1 font-weight-bold  text-sm-h5"
                    style="word-break: normal;"
                    >{{ card.header }}</v-card-title
                  >

                  <v-divider></v-divider>
                  <v-card-text class="text-wrap pt-0">
                    <v-list color="grey lighten-5">
                      <v-list-item
                        v-for="(field, index2) in card.fields"
                        :key="index2 + lang"
                        two-line
                        class="pa-0"
                        style="min-height: auto;"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-wrap px-1 text-body-2 text-sm-body-1"
                          >
                            {{ field.list_item_title }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="text-wrap px-1 text-caption text-sm-body-2"
                          >
                            {{ field.subtitle }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </div>

                <div v-else>
                  <v-card-title
                    class="text-wrap pb-2 text-body-1 font-weight-bold text-sm-h5"
                    >{{ card.header }}</v-card-title
                  >
                  <v-divider></v-divider>
                  <div class="d-flex">
                    <v-card
                      v-for="(field, index2) in card.fields"
                      :key="index2 + lang"
                      flat
                      class="my-3 mx-1 ma-sm-3 flex-grow-1"
                      color="grey lighten-5"
                      width="aviable"
                      style="min-height: auto;"
                    >
                      <v-card-title
                        class="py-0 px-1 text-wrap font-weight-bold text-caption text-sm-body-1"
                        style="word-break: normal;"
                        >{{ field.card_title }}</v-card-title
                      >
                      <!-- <div class="d-flex flex-column flex-wrap "> -->
                      <v-list-item
                        v-for="(list_item, index3) in field.list_items"
                        :key="index3 + lang"
                        two-line
                        class="pa-0 "
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-wrap px-1 text-caption text-sm-body-1"
                          >
                            {{ list_item.list_item_title }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="text-wrap px-1 text-caption text-sm-body-2"
                          >
                            {{ list_item.subtitle }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- </div> -->
                    </v-card>
                  </div>
                </div>
              </v-card>
            </div>
            <div
              v-else
              class="d-flex justify-center align-center"
              style="position: fixed; top: 45%; left: 48%;"
              key="langNotSet"
            >
              <v-progress-circular indeterminate></v-progress-circular>
            </div>
          </v-fade-transition>

          <v-footer v-if="lang" key="langSet" class="pa-0">
            <v-card
              flat
              tile
              width="100%"
              class="text-wrap text-center"
              color="grey lighten-5"
            >
              <v-divider></v-divider>

              <v-card-text
                v-if="lang == 'pl'"
                class="px-3 px-sm-8 text-caption text-sm-body-2"
              >
                Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (RODO).
              </v-card-text>
              <v-card-text
                v-else
                class="px-3 px-sm-8 text-caption text-sm-body-2"
              >
                I agree to the processing of personal data provided in this
                document for realising the recruitment process pursuant to the
                Personal Data Protection Act of 10 May 2018 (Journal of Laws
                2018, item 1000) and in agreement with Regulation (EU) 2016/679
                of the European Parliament and of the Council of 27 April 2016
                on the protection of natural persons with regard to the
                processing of personal data and on the free movement of such
                data, and repealing Directive 95/46/EC (General Data Protection
                Regulation).
              </v-card-text>
            </v-card>
          </v-footer>
        </v-main>
      </v-sheet>
    </v-sheet>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data: () => ({
    db: firebase.firestore(),
    lang: null,
    dict: {},
  }),

  computed: {
    dictLanguage() {
      return this.dict[this.lang];
    },
  },

  created() {
    this.db
      .collection("cv")
      .doc("Stanisław Zambrzycki")
      .collection("languages")
      .get()
      .then((collection) => {
        let docs = collection.docs.map((doc) => ({
          id: doc.ref.id,
          ...doc.data(),
        }));
        docs.forEach((doc) => {
          this.dict[doc.id] = doc.cards;
        });
        this.lang = "pl";
      });
  },

  methods: {
    changeLanguage() {
      if (this.lang === "pl") this.lang = "eng";
      else this.lang = "pl";
    },
    doIt() {
      window.print();
    },
  },
};
</script>
