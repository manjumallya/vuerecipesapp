import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    recipes: [],
    apiUrl: 'https://www.themealdb.com/api/json/v1/1/search.php'
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            s: plan,
            app_key: '1',
          }
        });
        commit('setRecipes', response.data.meals);
      } catch (error) {
        commit('setRecipes', []);
      }
    }
  },
  getters: {
    recipes: state => state.recipes,
  }
})
