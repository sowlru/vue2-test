<template>
  <div id="app">
    <elselect-parent />
    <!-- <input-parent /> -->
  </div>
</template>

<script>
/* eslint-disable */
// CHILD-PARENT
import elselectParent from "@/childParent/elselectParent"
import inputParent from "@/childParent/inputParent"
export default {
  name: "app",
  components: {
    elselectParent,
    inputParent,
  },
}
</script>

<style>
/* 
https://element-plus.org/en-US/guide/installation.html

1. vue add element: fully - no - ru-RU

*/
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  background-color: #eee;
  color: #2c3e50;
}
</style>
