<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   height: 100%;
  width: 100%;
}
*{
    box-sizing: border-box;
}
html,body{
    // height: 100%;
    width: 100%;
    margin: 0;
    bottom: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul,li {
    list-style-type: none;
}
</style>
