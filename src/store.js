import Vue from "vue";
import Vuex from "vuex";
import config from "@/config/firebase-config";
import firebase from "firebase/app";
import "firebase/database";

Vue.use(Vuex);
firebase.initializeApp(config);

export default new Vuex.Store({
  state: {
    stores: []
  },
  mutations: {
    saveStores(state, payload) {
      state.stores = payload;
    }
  },
  actions: {
    getStores({ commit }) {
      const database = firebase.database().ref("/stores");
      database.once("value").then(snapshot => {
        commit("saveStores", snapshot.val());
      });
    }
  }
});
