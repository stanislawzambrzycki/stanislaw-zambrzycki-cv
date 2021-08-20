// let pl = {
//   cards: [
//     {
//       header: "Stanisław Zambrzycki - curriculum vitae",
//       fields: [
//         {
//           list_item_title: "Data urodzenia: 17 sierpnia 1988r.",
//           subtitle: "",
//         },
//         {
//           list_item_title:
//             "Adres korespondencyjny: Polska, Mała Nieszawka 87-103, ul. Bydgoska 38",
//           subtitle: "",
//         },
//         {
//           list_item_title: "Adres e-mail: stanislaw.zambrzycki@poczta.onet.pl",
//           subtitle: "",
//         },
//         {
//           list_item_title: "Telefon kontaktowy: +48 783 741 717",
//           subtitle: "",
//         },
//       ],
//     },
//     {
//       header: "Cele zawodowe",
//       fields: [
//         {
//           list_item_title:
//             "Pragnę rozwijać swoje zdolności programistyczne poprzez pracę w profesjonalnym środowisku.",
//           subtitle: "",
//         },
//       ],
//     },
//     {
//       header: "Wykształcenie",
//       fields: [
//         {
//           list_item_title:
//             "Studium Kształcenia Praktycznego TEB Edukacja w Toruniu",
//           subtitle: "Trener Personalny, 10.2017 - 06.2018",
//         },
//         {
//           list_item_title: "Akademia Ekonomiczno-Humanistyczna w Warszawie",
//           subtitle: "Psychologia Kliniczna, 10.2009 - 06.2014",
//         },
//         {
//           list_item_title: "Szkoła Policealna Medyczna im. Mikołaja Kopernika",
//           subtitle: "Technik Masażysta, 10.2007 - 06.2009",
//         },
//         {
//           list_item_title:
//             "I Liceum Ogólnokształcące im. Mikołaja Kopernika w Toruniu",
//           subtitle: "2004 - 2007",
//         },
//       ],
//     },
//     {
//       header: "Doświadczenie zawodowe",
//       fields: [
//         {
//           list_item_title: "Hotel Dwa Księżyce",
//           subtitle: "Recepcjonista, 08.2017 - obecnie",
//         },
//         {
//           list_item_title: "DPD Polska Sp. z o.o.",
//           subtitle: "Specjalista Obsługi Klienta, 03.2016 - 06.2017",
//         },
//         {
//           list_item_title: "'CTDP' Sp. z o.o. & Co. sp. k",
//           subtitle: "Konsultant Telesprzedaży, 12.2015 - 02.2016",
//         },
//         {
//           list_item_title: "DataContact Center Sp. z o.o.",
//           subtitle: "Konsultant Telesprzedaży, 03.2015 - 09.2015",
//         },
//       ],
//     },
//     {
//       horizontal: true,
//       header: "Umiejętności",
//       fields: [
//         {
//           card_title: "Informatyczne",

//           list_items: [
//             {
//               list_item_title: "HTML5",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "CSS3",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "SCSS/SASS",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "VUE",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "Vuetify",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "JavaScript ES6",
//               subtitle: "podstawy",
//             },
//             {
//               list_item_title: "Firebase",
//               subtitle: "podstawy",
//             },
//           ],
//         },

//         {
//           card_title: "Umiejętności ogólne",

//           list_items: [
//             {
//               list_item_title: "Analityczne myślenie",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Duża motywacja do pracy",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Chęć do nauki i samorozwoju",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Szybkie przyswajanie wiedzy",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Pakiet Office",
//               subtitle: "podstawy",
//             },
//           ],
//         },

//         {
//           card_title: "Językowe",

//           list_items: [
//             {
//               list_item_title: "Angielski",
//               subtitle: "zaawansowany",
//             },
//             {
//               list_item_title: "Polski",
//               subtitle: "rodzimy",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       horizontal: true,
//       header: "Zainteresowania",
//       fields: [
//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Gra w go (alt. baduk/weiki)",
//               subtitle: "",
//             },
//           ],
//         },

//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Modowanie gier komputerowych",
//               subtitle: "",
//             },
//           ],
//         },

//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Trójbój siłowy",
//               subtitle: "",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// this.db
//   .collection("cv")
//   .doc("Stanisław Zambrzycki")
//   .collection("languages")
//   .doc("pl")
//   .update(pl);

// let eng = {
//   cards: [
//     {
//       header: "Stanisław Zambrzycki - curriculum vitae",
//       fields: [
//         {
//           list_item_title: "Birth date: 17 August 1988",
//           subtitle: "",
//         },
//         {
//           list_item_title:
//             "Postal adress: Poland, Mała Nieszawka 87-103, ul. Bydgoska 38",
//           subtitle: "",
//         },
//         {
//           list_item_title: "Adress e-mail: stanislaw.zambrzycki@poczta.onet.pl",
//           subtitle: "",
//         },
//         {
//           list_item_title: "Phone: +48 783 741 717",
//           subtitle: "",
//         },
//       ],
//     },
//     {
//       header: "Career goals",
//       fields: [
//         {
//           list_item_title:
//             "I desire to develop my programming skills by working in a professional environment.",
//           subtitle: "",
//         },
//       ],
//     },
//     {
//       header: "Education",
//       fields: [
//         {
//           list_item_title:
//             "Study of Practical Education TEB Education in Toruń",
//           subtitle: "Personal trainer, 10.2017 - 06.2018",
//         },
//         {
//           list_item_title:
//             "University of Economics and Human Sciences in Warsaw",
//           subtitle: "Clinical psychology, 10.2009 - 06.2014",
//         },
//         {
//           list_item_title:
//             "Nicolaus Copernicus Secondary Medical School in Toruń",
//           subtitle: "Masseur technician, 10.2007 - 06.2009",
//         },
//         {
//           list_item_title: "Nicolaus Copernicus High School No. 1 in Toruń",
//           subtitle: "2004 - 2007",
//         },
//       ],
//     },
//     {
//       header: "Experience",
//       fields: [
//         {
//           list_item_title: "Hotel Dwa Księżyce",
//           subtitle: "Receptionist, 08.2017 - currently",
//         },
//         {
//           list_item_title: "DPD Polska Sp. z o.o.",
//           subtitle: "Customer Service Specialist, 03.2016 - 06.2017",
//         },
//         {
//           list_item_title: "'CTDP' Sp. z o.o. & Co. sp. k",
//           subtitle: "Telesales Consultant, 12.2015 - 02.2016",
//         },
//         {
//           list_item_title: "DataContact Center Sp. z o.o.",
//           subtitle: "Telesales Consultant, 03.2015 - 09.2015",
//         },
//       ],
//     },
//     {
//       horizontal: true,
//       header: "Skills",
//       fields: [
//         {
//           card_title: "IT Skills",

//           list_items: [
//             {
//               list_item_title: "HTML5",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "CSS3",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "SCSS/SASS",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "VUE",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "Vuetify",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "JavaScript ES6",
//               subtitle: "basics",
//             },
//             {
//               list_item_title: "Firebase",
//               subtitle: "basics",
//             },
//           ],
//         },

//         {
//           card_title: "General skills",

//           list_items: [
//             {
//               list_item_title: "Analytical thinking",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Motivation to work",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Willingness to learn",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Fast learning",
//               subtitle: " ",
//             },
//             {
//               list_item_title: "Microsoft Office",
//               subtitle: "basics",
//             },
//           ],
//         },

//         {
//           card_title: "Language skills",

//           list_items: [
//             {
//               list_item_title: "English",
//               subtitle: "advanced",
//             },
//             {
//               list_item_title: "Polish",
//               subtitle: "native",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       horizontal: true,
//       header: "Hobbies",
//       fields: [
//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Game of go (alt. baduk/weiki)",
//               subtitle: "",
//             },
//           ],
//         },

//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Modding of computer games",
//               subtitle: "",
//             },
//           ],
//         },

//         {
//           card_title: "",

//           list_items: [
//             {
//               list_item_title: "Powerlifting",
//               subtitle: "",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// this.db
//   .collection("cv")
//   .doc("Stanisław Zambrzycki")
//   .collection("languages")
//   .doc("eng")
//   .update(eng);
