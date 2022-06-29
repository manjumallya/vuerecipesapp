<template>
	<div class="recipe">
		<router-link to="/">&lt; Back</router-link>
		<h1>{{ recipe.strMeal }}</h1>
    <img
        class="topic-thumbnail"
        alt="Recipe"
        :src="recipe.strMealThumb"
    />
		<hr />
		<div class="ingredients">
			<h3>Ingredients</h3>
			<ul>
				<li v-if="recipe.strIngredient1 !==''">
          {{recipe.strIngredient1}}- {{recipe.strMeasure1}}
				</li>
        <li v-if="recipe.strIngredient2 !==''">
          {{recipe.strIngredient2}}- {{recipe.strMeasure2}}
        </li>
        <li v-if="recipe.strIngredient3 !==''">
          {{recipe.strIngredient3}}- {{recipe.strMeasure3}}
        </li>
        <li v-if="recipe.strIngredient4 !==''">
          {{recipe.strIngredient4}}- {{recipe.strMeasure4}}
        </li>
        <li v-if="recipe.strIngredient5 !==''">
          {{recipe.strIngredient5}}- {{recipe.strMeasure5}}
        </li>
        <li v-if="recipe.strIngredient6 !==''">
          {{recipe.strIngredient6}}- {{recipe.strMeasure6}}
        </li>
        <li v-if="recipe.strIngredient7 !==''">
          {{recipe.strIngredient7}}- {{recipe.strMeasure7}}
        </li>
        <li v-if="recipe.strIngredient8 !==''">
          {{recipe.strIngredient8}}- {{recipe.strMeasure8}}
        </li>
        <li v-if="recipe.strIngredient9 !==''">
          {{recipe.strIngredient9}}- {{recipe.strMeasure9}}
        </li>
        <li v-if="recipe.strIngredient10 !==''">
          {{recipe.strIngredient10}}- {{recipe.strMeasure10}}
        </li>
        <li v-if="recipe.strIngredient11 !==''">
          {{recipe.strIngredient11}}- {{recipe.strMeasure11}}
        </li>
        <li v-if="recipe.strIngredient12 !==''">
          {{recipe.strIngredient12}}- {{recipe.strMeasure12}}
        </li>
        <li v-if="recipe.strIngredient13 !==''">
          {{recipe.strIngredient13}}- {{recipe.strMeasure13}}
        </li>
        <li v-if="recipe.strIngredient14 !==''">
          {{recipe.strIngredient14}}- {{recipe.strMeasure14}}
        </li>
        <li v-if="recipe.strIngredient15 !==''">
          {{recipe.strIngredient15}}- {{recipe.strMeasure15}}
        </li>
        <li v-if="recipe.strIngredient16 !==''">
          {{recipe.strIngredient16}}- {{recipe.strMeasure16}}
        </li>
        <li v-if="recipe.strIngredient17 !==''">
          {{recipe.strIngredient17}}- {{recipe.strMeasure17}}
        </li>
        <li v-if="recipe.strIngredient18 !==''">
          {{recipe.strIngredient18}}- {{recipe.strMeasure18}}
        </li>
        <li v-if="recipe.strIngredient19 !==''">
          {{recipe.strIngredient19}}- {{recipe.strMeasure19}}
        </li>
        <li v-if="recipe.strIngredient20 !==''">
          {{recipe.strIngredient20}}- {{recipe.strMeasure20}}
        </li>
			</ul>
		</div>
		<div class="method">
			<h3>Method</h3>
      <span v-html="recipe.strInstructions"></span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'RecipeView',
	computed: {
		recipe () {
			return this.$store.state.recipes.find(recipe => recipe.idMeal === this.$route.params.idMeal)
		}
	},
}
</script>

<style>
.recipe {
	padding: 1rem;
	max-width: 768px;
	margin: 0 auto;
}

hr {
	margin-bottom: 1rem;
}

h3 {
	margin-bottom: 1rem;
}

.ingredients {
	padding: 1rem;
	background-color: #081c33;
	border-radius: 0.5rem;
	margin-bottom: 2rem;
  color: #2aeb74;
}

.ingredients ul li {
	list-style-position: inside;
	line-height: 1.4;
	margin-bottom: 1rem;
}

.method ol li {
	margin-bottom: 2rem;
	padding-bottom: 1rem;
	list-style-position: inside;
	border-bottom: 1px solid #EEE;
}

.topic-thumbnail {
  margin-right: 15px;
  height: 120px;
  width: 120px;
  overflow: hidden;
}

</style>