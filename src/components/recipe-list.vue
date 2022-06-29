<template>
  <div class="recipes col-12">
    <div class="card" v-for="meal in recipieData" :key="meal.idMeal">
      <h2>{{ meal.strMeal }}</h2>
      <p>({{ meal.strArea }})</p>
      <p>{{ meal.strTags }}</p>
      <router-link :to="`/recipe/${meal.idMeal}`">
        <button>View Recipe</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: 'RecipeList',
  setup () {
    const store = useStore();
    return {
      recipieData: computed(() => store.getters.recipes),
    }
  }
}
</script>

<style>
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  color: #2aeb74;
}

.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}

.recipes .card h2,p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
</style>