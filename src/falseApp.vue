<v-sheet color="grey darken-1" class="d-flex justify-center" relative>
      <div style="position: fixed; right: 1em; top: 1em;">
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
        <!-- <v-btn fab dark small class="mx-2" color="indigo" @click="printToPDF">
          <v-icon>mdi-file-pdf-box</v-icon>
        </v-btn> -->
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

      <!-- <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        filename="Stanisław Zambrzycki - cv"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="legal"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        :html-to-pdf-options="html2PdfOptions"
        ref="html2Pdf"
      >
        <section slot="pdf-content"> -->
      <v-sheet
        id="element-to-print"
        tile
        max-width="800px"
        color="indigo lighten-5"
      >
        <v-fade-transition hide-on-leave mode="out-in">
          <v-main>
            <v-card min-height="200" class="ma-3 px-3" color="grey lighten-5">
              <v-card-title
                >Stanisław Zambrzycki - curriculum vitae</v-card-title
              >
              <v-divider></v-divider>
              <v-list color="grey lighten-5">
                <v-list-item one-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title>{{
                      dict[lang].birthDate
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item one-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title
                      >Adres korespondencyjny: Polska, Mała Nieszawka 87-103,
                      ul. Bydgoska 38
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item one-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title
                      >Adres e-mail:
                      stanislaw.zambrzycki@poczta.onet.pl</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item one-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title
                      >Telefon kontaktowy: +48 783 741 717</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card class="ma-3 px-3" color="grey lighten-5">
              <v-card-title>Cele zawodowe</v-card-title>
              <v-divider></v-divider>
              <v-list color="grey lighten-5">
                <v-list-item one-line>
                  <v-list-item-content class="py-0">
                    <v-list-item-title
                      >Zarabianie dużych pieniędzy bez wiekszego wysiłku i
                      konieczności kończenia studiów.</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card min-height="200" class="ma-3 px-3" color="grey lighten-5">
              <v-card-title>Wykształcenie</v-card-title>
              <v-divider></v-divider>
              <v-list-item two-line>
                <v-list-item-content class="py-0">
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
                <v-list-item-content class="py-0">
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
                <v-list-item-content class="py-0">
                  <v-list-item-title
                    >Szkoła Policealna Medyczna im. Mikołaja
                    Kopernika</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >Technik Masażysta, 10.2007 - 06.2009</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content class="py-0">
                  <v-list-item-title
                    >I Liceum Ogólnokształcące im. Mikołaja Kopernika w
                    Toruniu</v-list-item-title
                  >
                  <v-list-item-subtitle>2004 - 2007</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-card min-height="200" class="ma-3 px-3" color="grey lighten-5">
              <v-card-title>Doświadczenie zawodowe</v-card-title>
              <v-divider></v-divider>
              <v-list-item two-line>
                <v-list-item-content class="py-0">
                  <v-list-item-title>Hotel Dwa Księżyce</v-list-item-title>
                  <v-list-item-subtitle
                    >Recepcjonista, 08.2017 - obecnie</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content class="py-0">
                  <v-list-item-title>DPD Polska Sp. z o.o.</v-list-item-title>
                  <v-list-item-subtitle
                    >Specjalista Obsługi Klienta, 03.2016 -
                    06.2017</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content class="py-0">
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
                <v-list-item-content class="py-0">
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
                <v-list-item-content class="py-0">
                  <v-list-item-title>NETIA S.A.</v-list-item-title>
                  <v-list-item-subtitle
                    >Konsultant Telesprzedaży, 03.2014 -
                    02.2015</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-card min-height="200" class="ma-3 px-3" color="grey lighten-5">
              <v-card-title>Umiejętności</v-card-title>
              <v-divider></v-divider>
              <v-card
                class="py-3 px-0  d-flex justify-center"
                color="grey lighten-5"
                flat
              >
                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-card-title class="text-h-5 ma-0 py-0"
                    >Informatyczne</v-card-title
                  >
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>HTML5</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>CSS3</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>SCSS/SASS</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>VUE</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>Vuetify</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>JavaScript ES6</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-card-title class="text-h-5 ma-0 py-0"
                    >Umiejętności Ogólne</v-card-title
                  >
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>Pakiet Office</v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Chęć do nauki i samorozwoju
                      </v-list-item-title>
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Szybkie przyswajanie wiedzy</v-list-item-title
                      >
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Analityczne myślenie</v-list-item-title
                      >
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Duża motywacja do pracy</v-list-item-title
                      >
                      <v-list-item-subtitle>podstawy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-card-title class="text-h-5 ma-0 py-0">Języki</v-card-title>

                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>Angielski</v-list-item-title>
                      <v-list-item-subtitle>zaawansowany</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>Polski</v-list-item-title>
                      <v-list-item-subtitle>rodzimy</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-card>
            </v-card>

            <v-card class="ma-3 px-3" color="grey lighten-5">
              <v-card-title>Zainteresowania</v-card-title>
              <v-divider></v-divider>
              <v-card
                class="py-3 px-0  d-flex justify-left"
                color="grey lighten-5"
                flat
              >
                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Gra w go (alt. baduk/weiki)</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title
                        >Modowanie gier komputerowych</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

                <v-card class="ma-0 px-0" flat color="grey lighten-5">
                  <v-list-item two-line>
                    <v-list-item-content class="py-0 px-1">
                      <v-list-item-title>Trójbój siłowy</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-card>
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
                  Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679
                  z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                  związku z przetwarzaniem danych osobowych i w sprawie
                  swobodnego przepływu takich danych oraz uchylenia dyrektywy
                  95/46/WE (RODO).
                </v-card-text>
              </v-card>
            </v-footer>
          </v-main>
        </v-fade-transition>
      </v-sheet>
      <!-- </section>
      </vue-html2pdf> -->
    </v-sheet>
