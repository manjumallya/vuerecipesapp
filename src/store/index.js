import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    recipes: [],
    categories:[],
    selectValue: '',
    apiUrl: 'https://www.themealdb.com/api/json/v1/1/search.php',
    categoriesUrl: 'https://www.themealdb.com/api/json/v1/1/categories.php',
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
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
    },
    async getCategories({ state, commit }) {
      try {
        let response = await axios.get(`${state.categoriesUrl}`, {
          params: {
            app_key: '1',
          }
        });
        commit('setCategories', response.data.categories);
      } catch (error) {
        commit('setCategories', []);
      }
    }
  },
  getters: {
    recipes: state => state.recipes,
    categories: state => state.categories
  }
})
