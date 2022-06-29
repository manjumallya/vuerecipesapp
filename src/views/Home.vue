<template>
  <div class="home">
    <h1 data-test="myrecipes">My Recipes</h1>
    <SearchBar @search="handleSearch"/>
    <RecipeList></RecipeList>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SearchBar from '../components/search-bar';
import RecipeList from '../components/recipe-list';

export default {
  name: 'HomeView',
  components : {
    SearchBar,
    RecipeList
  },
  setup () {
    const store = useStore();
    const handleSearch = (value) => {
      if(value && value.length > 0) {
        store.dispatch('getRecipes', value);
      } else {
        store.dispatch('getRecipes', '');
      }
    }
    return {
      store,
      handleSearch,
      recipieData: computed(() => store.getters.recipes),
    }
  },
  created() {
    this.store.dispatch('getRecipes', '');
  }
}
</script>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
</style>