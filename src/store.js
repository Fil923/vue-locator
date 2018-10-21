import Vue from "vue";
import Vuex from "vuex";
import config from "@/config/firebase-config";
import firebase from "firebase/app";
import "firebase/database";

Vue.use(Vuex);
firebase.initializeApp(config);

export default new Vuex.Store({
  state: {
    stores: [],
    markers: [],
    openedInfoWindow: null
  },
  getters: {
    stores(state) {
      return state.stores;
    },
    markers(state) {
      return state.markers;
    },
    openedInfoWindow(state) {
      return state.openedInfoWindow;
    }
  },
  mutations: {
    saveStores(state, payload) {
      state.stores = payload;
    },
    saveMarkers(state, payload) {
      state.markers = payload;
    },
    setOpenedInfoModal(state, openedInfoWindow) {
      state.openedInfoWindow = openedInfoWindow;
    },
    closeOpenedInfoModal(state) {
      if (state.openedInfoWindow) {
        state.openedInfoWindow.close();
      }
    }
  },
  actions: {
    getStores({ commit }) {
<<<<<<< HEAD
      return new Promise(resolve => {
        const database = firebase.database().ref("/stores");
        database.once("value").then(snapshot => {
          const response = snapshot.val();
          if (Array.isArray(response)) {
            commit("saveStores", response);
            resolve();
          }
        });
=======
      const database = firebase.database().ref("/stores");
      database.once("value").then(snapshot => {
        commit("saveStores", snapshot.val());
>>>>>>> master
      });
    },
    saveMarkers({ commit }, payload) {
      commit("saveMarkers", payload);
    },
    setOpenedInfoModal({ commit }, openedInfoWindow) {
      commit("setOpenedInfoModal", openedInfoWindow);
    },
    closeOpenedInfoModal({ commit }) {
      commit("closeOpenedInfoModal");
    }
  }
});
