<template>
  <v-app id="inspire">
    <v-sheet
      color="grey darken-1"
      class="d-flex justify-start justify-sm-center"
      relative
    >
      <div style="position: fixed; right: 1em; top: 1em; z-index: 999">
        <v-btn
          fab
          dark
          small
          class="mr-2"
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
          class="ml-2"
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
        max-width="800px"
        color="indigo  lighten-5"
      >
        <v-main style="height: 100%">
          <v-fade-transition group mode="out-in" hide-on-leave>
            <div v-if="lang" key="langSet">
              <v-card
                v-for="(card, index) in dictLanguage"
                :key="lang + index"
                class="ma-3 px-3"
                color="grey lighten-5"
              >
                <div v-if="card.horizontal !== true">
                  <v-card-title
                    class="text-wrap pb-2 text-body-1 font-weight-bold  text-sm-h5"
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
                            class="text-wrap text-body-2 text-sm-body-1"
                          >
                            {{ field.name }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="text-wrap text-caption text-sm-body-2"
                          >
                            {{ field.value }}
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
                      class="ma-3 flex-grow-1"
                      color="grey lighten-5"
                      width="aviable"
                      style="min-height: auto;"
                    >
                      <v-card-title
                        class="pa-0 text-wrap text-truncate font-weight-bold text-caption text-sm-body-1"
                        >{{ field.card_title }}</v-card-title
                      >
                      <v-list-item
                        v-for="(list_item, index3) in field.list_items"
                        :key="index3 + lang"
                        two-line
                        class="pa-0"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-wrap text-caption text-sm-body-1"
                          >
                            {{ list_item.list_item_title }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            class="text-wrap text-caption text-sm-body-2"
                          >
                            {{ list_item.subtitle }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
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
                class="text-caption text-sm-body-2"
              >
                Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (RODO).
              </v-card-text>
              <v-card-text v-else class="text-caption text-sm-body-2">
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
    let pl = {
      cards: [
        {
          header: "Stanisław Zambrzycki - curriculum vitae",
          fields: [
            {
              name: "Data urodzenia: 17 sierpnia 1988r.",
              value: "",
            },
            {
              name:
                "Adres korespondencyjny: Polska, Mała Nieszawka 87-103, ul. Bydgoska 38",
              value: "",
            },
            {
              name: "Adres e-mail: stanislaw.zambrzycki@poczta.onet.pl",
              value: "",
            },
            {
              name: "Telefon kontaktowy: +48 783 741 717",
              value: "",
            },
          ],
        },
        {
          header: "Cele zawodowe",
          fields: [
            {
              name:
                "Pragnę rozwijać swoje zdolności programistyczne poprzez pracę w profesjonalnym środowisku.",
              value: "",
            },
          ],
        },
        {
          header: "Wykształcenie",
          fields: [
            {
              name: "Studium Kształcenia Praktycznego TEB Edukacja w Toruniu",
              value: "Trener Personalny, 10.2017 - 06.2018",
            },
            {
              name: "Akademia Ekonomiczno-Humanistyczna w Warszawie",
              value: "Psychologia Kliniczna, 10.2009 - 06.2014",
            },
            {
              name: "Szkoła Policealna Medyczna im. Mikołaja Kopernika",
              value: "Technik Masażysta, 10.2007 - 06.2009",
            },
            {
              name:
                "I Liceum Ogólnokształcące im. Mikołaja Kopernika w Toruniu",
              value: "2004 - 2007",
            },
          ],
        },
        {
          header: "Doświadczenie zawodowe",
          fields: [
            {
              name: "Hotel Dwa Księżyce",
              value: "Recepcjonista, 08.2017 - obecnie",
            },
            {
              name: "DPD Polska Sp. z o.o.",
              value: "Specjalista Obsługi Klienta, 03.2016 - 06.2017",
            },
            {
              name: "'CTDP' Sp. z o.o. & Co. sp. k",
              value: "Konsultant Telesprzedaży, 12.2015 - 02.2016",
            },
            {
              name: "DataContact Center Sp. z o.o.",
              value: "Konsultant Telesprzedaży, 03.2015 - 09.2015",
            },
          ],
        },
        {
          horizontal: true,
          header: "Umiejętności",
          fields: [
            {
              card_title: "Informatyczne",

              list_items: [
                {
                  list_item_title: "HTML5",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "CSS3",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "SCSS/SASS",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "VUE",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "Vuetify",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "JavaScript ES6",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "Firebase",
                  subtitle: "podstawy",
                },
              ],
            },

            {
              card_title: "Umiejętności ogólne",

              list_items: [
                {
                  list_item_title: "Pakiet Office",
                  subtitle: "podstawy",
                },
                {
                  list_item_title: "Analityczne myślenie",
                  subtitle: " ",
                },
                {
                  list_item_title: "Duża motywacja do pracy",
                  subtitle: " ",
                },
                {
                  list_item_title: "Chęć do nauki i samorozwoju",
                  subtitle: " ",
                },
                {
                  list_item_title: "Szybkie przyswajanie wiedzy",
                  subtitle: " ",
                },
              ],
            },

            {
              card_title: "Językowe",

              list_items: [
                {
                  list_item_title: "Angielski",
                  subtitle: "zaawansowany",
                },
                {
                  list_item_title: "Polski",
                  subtitle: "rodzimy",
                },
              ],
            },
          ],
        },
        {
          horizontal: true,
          header: "Zainteresowania",
          fields: [
            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Gra w go (alt. baduk/weiki)",
                  subtitle: "",
                },
              ],
            },

            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Modowanie gier komputerowych",
                  subtitle: "",
                },
              ],
            },

            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Trójbój siłowy",
                  subtitle: "",
                },
              ],
            },
          ],
        },
      ],
    };

    this.db
      .collection("cv")
      .doc("Stanisław Zambrzycki")
      .collection("languages")
      .doc("pl")
      .update(pl);

    let eng = {
      cards: [
        {
          header: "Stanisław Zambrzycki - curriculum vitae",
          fields: [
            {
              name: "Birth date: 17 sierpnia 1988r.",
              value: "",
            },
            {
              name:
                "Postal adress: Poland, Mała Nieszawka 87-103, ul. Bydgoska 38",
              value: "",
            },
            {
              name: "Adress e-mail: stanislaw.zambrzycki@poczta.onet.pl",
              value: "",
            },
            {
              name: "Phone: +48 783 741 717",
              value: "",
            },
          ],
        },
        {
          header: "Career goals",
          fields: [
            {
              name:
                "I desire to develop my programming skills by working in a professional environment.",
              value: "",
            },
          ],
        },
        {
          header: "Education",
          fields: [
            {
              name: "Study of Practical Education TEB Education in Toruniu",
              value: "Personal trainer, 10.2017 - 06.2018",
            },
            {
              name: "University of Economics and Human Sciences in Warsaw",
              value: "Clinical psychology, 10.2009 - 06.2014",
            },
            {
              name: "Nicolaus Copernicus Secondary Medical School in Toruń",
              value: "Masseur technician, 10.2007 - 06.2009",
            },
            {
              name: "Nicolaus Copernicus High School No. 1 in Toruń",
              value: "2004 - 2007",
            },
          ],
        },
        {
          header: "Experience",
          fields: [
            {
              name: "Hotel Dwa Księżyce",
              value: "Receptionist, 08.2017 - currently",
            },
            {
              name: "DPD Polska Sp. z o.o.",
              value: "Customer Service Specialist, 03.2016 - 06.2017",
            },
            {
              name: "'CTDP' Sp. z o.o. & Co. sp. k",
              value: "Telesales Consultant, 12.2015 - 02.2016",
            },
            {
              name: "DataContact Center Sp. z o.o.",
              value: "Telesales Consultant, 03.2015 - 09.2015",
            },
          ],
        },
        {
          horizontal: true,
          header: "Skills",
          fields: [
            {
              card_title: "IT Skills",

              list_items: [
                {
                  list_item_title: "HTML5",
                  subtitle: "basics",
                },
                {
                  list_item_title: "CSS3",
                  subtitle: "basics",
                },
                {
                  list_item_title: "SCSS/SASS",
                  subtitle: "basics",
                },
                {
                  list_item_title: "VUE",
                  subtitle: "basics",
                },
                {
                  list_item_title: "Vuetify",
                  subtitle: "basics",
                },
                {
                  list_item_title: "JavaScript ES6",
                  subtitle: "basics",
                },
                {
                  list_item_title: "Firebase",
                  subtitle: "basics",
                },
              ],
            },

            {
              card_title: "General skills",

              list_items: [
                {
                  list_item_title: "Microsoft Office",
                  subtitle: "basics",
                },
                {
                  list_item_title: "Analytical thinking",
                  subtitle: " ",
                },
                {
                  list_item_title: "Motivation to work",
                  subtitle: " ",
                },
                {
                  list_item_title: "Willingness to learn",
                  subtitle: " ",
                },
                {
                  list_item_title: "Fast learning",
                  subtitle: " ",
                },
              ],
            },

            {
              card_title: "Language skills",

              list_items: [
                {
                  list_item_title: "English",
                  subtitle: "advanced",
                },
                {
                  list_item_title: "Polish",
                  subtitle: "native",
                },
              ],
            },
          ],
        },
        {
          horizontal: true,
          header: "Hobbys",
          fields: [
            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Game of go (alt. baduk/weiki)",
                  subtitle: "",
                },
              ],
            },

            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Modding of computer games",
                  subtitle: "",
                },
              ],
            },

            {
              card_title: "",

              list_items: [
                {
                  list_item_title: "Powerlifting",
                  subtitle: "",
                },
              ],
            },
          ],
        },
      ],
    };

    this.db
      .collection("cv")
      .doc("Stanisław Zambrzycki")
      .collection("languages")
      .doc("eng")
      .update(eng);

    // console.log(pl);
    // console.log(eng);

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
    printToPDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
