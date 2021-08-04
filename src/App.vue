<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" width="min-content" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Stanisław Zambrzycki
          </v-list-item-title>
          <v-list-item-subtitle>
            stanislaw.zambrzycki@poczta.onet.pl
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app height="66.8px">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-card min-height="200" ripple class="ma-3">
        <v-card-title>Informacje osobiste</v-card-title>
        <v-divider></v-divider>
        <v-list>
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
      <v-card min-height="200" ripple class="ma-3">
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
              >Psychologia Kliniczna, 10.2009 - 06.2014</v-list-item-subtitle
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
      <v-card min-height="200" ripple class="ma-3">
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
            <v-list-item-title>"CTDP" Sp. z o.o. & Co. sp. k</v-list-item-title>
            <v-list-item-subtitle
              >Konsultant Telesprzedaży, 12.2015 - 02.2016</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>DataContact Center Sp. z o.o.</v-list-item-title>
            <v-list-item-subtitle
              >Konsultant Telesprzedaży, 03.2015 - 09.2015</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>NETIA S.A.</v-list-item-title>
            <v-list-item-subtitle
              >Konsultant Telesprzedaży, 03.2014 - 02.2015</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-footer v-bind="localAttrs" class="pa-0">
        <v-card flat tile width="100%" class="lighten-1 text-center">
          <v-divider></v-divider>

          <v-card-text>
            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
            niezbędnych do realizacji procesu rekrutacji zgodnie z
            Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
            27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
            takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
