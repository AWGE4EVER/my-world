<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <Header></Header>
    <a-layout-content>
      <router-view/>
    </a-layout-content>
  </div>
</template>

<style>
  #app {
    width: 100%;
    height: 100%;
    padding-top: 88px;
  }

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

</style>
<script>
import Header from './components/Header'
export default {
  components: { Header }
}
</script>
