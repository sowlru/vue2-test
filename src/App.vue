<template>
  <div id="app">
    <!-- <dialog-table-parent /> -->
    <!-- <elselect-parent /> -->
    <!-- <input-parent /> -->

    <div class="EL-TABLE">
      <!-- <eltable-parent /> -->
      <server-data-parent />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// CHILD-PARENT
import dialogTableParent from "@/childParent/dialogTableParent"
import elselectParent from "@/childParent/elselectParent"
import inputParent from "@/childParent/inputParent"

import eltableParent from "@/el-table/eltableParent"
import serverDataParent from "@/el-table/serverDataParent"
export default {
  name: "app",
  components: {
    dialogTableParent,
    elselectParent,
    inputParent,

    eltableParent,
    serverDataParent,
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
