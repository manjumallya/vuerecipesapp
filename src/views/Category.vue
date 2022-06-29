<template>
  <router-link to="/">&lt; Back</router-link>
  <div class="cateogries col-12">
    <div class="card" v-for="category in categories" :key="category.idCategory">
      <h2>{{ category.strCategory }}</h2>
      <img
          class="topic-thumbnail"
          alt="Recipe"
          :src="category.strCategoryThumb"
      />
      <p>{{ category.strCategoryDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeView',
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  created() {
    this.$store.dispatch('getCategories', '');
  }
}
</script>

<style>
.topic-thumbnail {
  margin-right: 15px;
  height: 120px;
  width: 120px;
  overflow: hidden;
}

.cateogries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  color: #2aeb74;
}

.cateogries .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}

.cateogries .card h2,p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cateogries .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
</style>