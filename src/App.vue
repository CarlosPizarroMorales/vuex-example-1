<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  width: 65vw;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

pre {
  background-color: rgb(255, 216, 223);
  padding: 0 1rem;
  border: 1px solid rgb(230, 105, 126);
}

code:not(pre > code) {
  background-color: rgb(255, 216, 223);
  font-weight: bold;
  padding: 0.25rem 0.5rem; 
}

hgroup {
  background-color: rgb(146, 239, 255);
  width: fit-content;
  min-width: 500px;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

hgroup p {
  font-size: 1.25rem;
  font-weight: 500;
}

hgroup .info {
  font-size: initial;
}

.warning {
  background-color: rgb(255, 227, 66);
  padding: 1rem;
  width: 50vw;
  margin: 0 auto;
}

article {
  display: flex;
  width: 60%;
  margin: 1rem auto;
  padding: 2rem;
  background-color: rgb(41, 53, 38);
  color: white;
}

article section {
  flex: 1;
  text-align: center;
}
</style>
