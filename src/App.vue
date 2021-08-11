<template>
  <v-app id="inspire">
    <v-sheet color="grey lighten-5" relative>
      <v-speed-dial
        v-model="showMenu"
        fixed
        top
        right
        direction="left"
        open-on-hover
      >
        <template v-slot:activator>
          <v-btn v-model="showMenu" color="blue darken-2" dark fab>
            <v-icon v-if="showMenu">
              mdi-close
            </v-icon>
            <v-icon v-else>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="green">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo" @click="printToPDF">
          <v-icon>mdi-file-pdf-box</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-google-translate</v-icon>
        </v-btn>
      </v-speed-dial>

      <v-sheet
        id="element-to-print"
        tile
        max-width="700px"
        color="indigo lighten-5"
        class="mx-auto"
      >
        <v-main>
          <v-card
            min-height="200"
            ripple
            class="ma-3 px-3"
            color="grey lighten-5"
          >
            <v-card-title>Stanisław Zambrzycki - curriculum vitae</v-card-title>
            <v-divider></v-divider>
            <v-list color="grey lighten-5">
              <v-list-item one-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Data urodzenia: 17 sierpnia 1988r.</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item one-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Adres korespondencyjny: Polska, Mała Nieszawka 87-103, ul.
                    Bydgoska 38
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item one-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Adres e-mail:
                    stanislaw.zambrzycki@poczta.onet.pl</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item one-line>
                <v-list-item-content>
                  <v-list-item-title
                    >Telefon kontaktowy: 783 741 717</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

          <v-card
            min-height="200"
            ripple
            class="ma-3 px-3"
            color="grey lighten-5"
          >
            <v-card-title>Wykształcenie</v-card-title>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >Studium Kształcenia Praktycznego TEB Edukacja w
                  Toruniu</v-list-item-title
                >
                <v-list-item-subtitle
                  >Trener Personalny, 10.2017 - 06.2018</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >Wyższa Szkoła Finansów i Zarządzania w
                  Warszawie</v-list-item-title
                >
                <v-list-item-subtitle
                  >Psychologia Kliniczna, 10.2009 -
                  06.2014</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >Szkoła Policealna Medyczna im. Mikołaja
                  Kopernika</v-list-item-title
                >
                <v-list-item-subtitle
                  >Technik Masażysta, 10.2007 - 06.2009</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            min-height="200"
            ripple
            class="ma-3 px-3"
            color="grey lighten-5"
          >
            <v-card-title>Doświadczenie zawodowe</v-card-title>
            <v-divider></v-divider>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Hotel Dwa Księżyce</v-list-item-title>
                <v-list-item-subtitle
                  >Recepcjonista, 08.2017 - obecnie</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>DPD Polska Sp. z o.o.</v-list-item-title>
                <v-list-item-subtitle
                  >Specjalista Obsługi Klienta, 03.2016 -
                  06.2017</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >"CTDP" Sp. z o.o. & Co. sp. k</v-list-item-title
                >
                <v-list-item-subtitle
                  >Konsultant Telesprzedaży, 12.2015 -
                  02.2016</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >DataContact Center Sp. z o.o.</v-list-item-title
                >
                <v-list-item-subtitle
                  >Konsultant Telesprzedaży, 03.2015 -
                  09.2015</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>NETIA S.A.</v-list-item-title>
                <v-list-item-subtitle
                  >Konsultant Telesprzedaży, 03.2014 -
                  02.2015</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <v-footer class="pa-0 mt-3">
            <v-card
              flat
              tile
              width="100%"
              class="text-center"
              color="grey lighten-5"
            >
              <v-divider></v-divider>

              <v-card-text>
                Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z
                Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z
                dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                związku z przetwarzaniem danych osobowych i w sprawie swobodnego
                przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (RODO).
              </v-card-text>
            </v-card>
          </v-footer>
        </v-main>
      </v-sheet>
    </v-sheet>
  </v-app>
</template>

<script src="html2pdf.bundle.min.js"></script>

<script>
export default {
  data: () => ({ showMenu: false }),
  methods: {
    printToPDF() {
      let elementToPrint = document.getElementById("element-to-print");
      html2pdf(elementToPrint);
    },
  },
};
</script>
