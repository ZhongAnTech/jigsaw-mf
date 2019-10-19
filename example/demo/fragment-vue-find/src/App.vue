<template>
  <div id="app" :class="name">
    <router-view></router-view>
  </div>
</template>

<script>
// {globalEvent} 
import CtrlApps from './global'

export default {
  name: 'app',
  data () {
    return {
      name: CtrlApps.classNamespace
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>

<style>
:namespace#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
