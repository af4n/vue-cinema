import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    serials: [],
    persons: []
  },
  mutations: {
    SET_MOVIES_TO_VUEX: (state, movies) => {
      state.movies = movies
    },
    SET_SERIALS_TO_VUEX: (state, serials) => {
      state.serials = serials
    },
    SET_PERSONS_TO_VUEX: (state, persons) => {
      state.persons = persons
    }
  },
  actions: {
    get_movies_from_api({commit}) {
      // return axios('https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397', {
      return axios('https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=revenue.desc&page=1', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_MOVIES_TO_VUEX', response.data.results)
        })
    },
    get_serials_from_api({commit}) {
      return axios('https://api.themoviedb.org/3/tv/popular?api_key=3f4ca4f3a9750da53450646ced312397&language=en-EN&region=ru&page=1', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_SERIALS_TO_VUEX', response.data.results)
        })
    },
    get_persons_from_api({commit}) {
      return axios('https://api.themoviedb.org/3/person/popular?api_key=3f4ca4f3a9750da53450646ced312397&language=en-EN&region=ru&page=1', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_PERSONS_TO_VUEX', response.data.results)
        })
    }
  },
  getters: {
    movies(state) {
      return state.movies
    },
    persons(state) {
      return state.persons
    },
    serials(state) {
      return state.serials
    }
  },
  modules: {}
})
