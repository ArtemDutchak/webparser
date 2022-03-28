import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

// const opts = {
//   theme: {
//     // dark: true,
//     // disable: false,
//     themes: {
//       dark: {
//         // primary: colors.red.darken1, // #E53935
//         // secondary: colors.red.lighten4, // #FFCDD2
//         // accent: colors.indigo.base, // #3F51B5
//       },
//     },
//   },
// }

const opts = {}

export default new Vuetify(opts)
