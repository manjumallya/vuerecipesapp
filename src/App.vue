<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <a class="navbar-brand" href="#">
      <router-link to="/">Go to Home</router-link>
    </a>
    <a class="navbar-brand">
      <router-link to="/category">Categories</router-link>
    </a>
    </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Fira Sans', sans-serif;
 }

a {
  color: #2aeb74;
  text-decoration: none;
}

button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;

  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
