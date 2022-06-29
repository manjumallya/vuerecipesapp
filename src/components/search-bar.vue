<template>
  <div class="search-holder">
    <div class="search-holder__banner">
      <div class="col-xs-12 text-center">
        <h1 class="hero-header">
          Search for a recipe
        </h1>
        <div class="search-bar">
          <div class="form-holder">
            <div class="navbarSearch">
              <input
                @change="onChange"
                @input="onChange"
                v-model="searchText"
                class="form-control navbar-search-input"
                type="text"
                placeholder="Search for the recipe.."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data: () => {
    return {
      searchText: ""
    };
  },
  methods: {
    onChange() {
      this.$emit("search", this.searchText);
    },
  }
};
</script>
<style lang="scss">
.search-holder {
  margin-top: 60px;

  &__banner {
    margin: 0 auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
  }

  .hero-header {
    margin: 0 0 25px;
    line-height: 1;
    font-size: 34px;
  }

  .search-bar {
    .form-holder {
      position: relative;
    }

    .form-control {
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
      -o-transition: border-color ease-in-out 0.15s,
        box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }

    .navbar-search-input {
      z-index: 1 !important;
      height: 51px;
      font-size: 18px;
      padding: 6px 18px 7px 45px;
      background-color: #ffffff !important;
      box-shadow: 0 2px 14px rgba(0, 0, 0, 0.11);
      border-color: #eeeeee;
    }
  }
}
</style>