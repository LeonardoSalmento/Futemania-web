import Vue from 'vue'
import Vuex from 'vuex'

import championship from './modules/championship'
import club from './modules/club'
import news from './modules/news'

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
       championship,
       club,
       news
   }
})