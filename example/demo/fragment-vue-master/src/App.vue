<template>
  <div package="vue-master" id="app" :class="name">
    <router-view></router-view>
  </div>
</template>

<script>
// {globalEvent}
import { appPool } from "./global";

export default {
  name: "app",
  data() {
    return {
      name: appPool.config.classNamespace
    };
  },
  methods: {},
  components: {}
};
</script>

<style>
:namespace#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 100%;
  overflow: hidden;
  /* margin-top: 60px; */
}
</style>
