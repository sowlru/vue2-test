<template>
  <div class="container">
    <elselect-parent />
    <!-- <input-parent /> -->
    <!-- <el-button>I am ElButton</el-button> -->
  </div>
</template>

<script>
// import { ElButton } from "element-plus"
/* eslint-disable */
// CHILD-PARENT
import elselectParent from "@/childParent/elselectParent"
import inputParent from "@/childParent/inputParent"

export default {
  components: {
    elselectParent,
    inputParent,
    // ElButton,
  },
}
</script>

<style>
.container {
  background-color: #eee;
}
</style>
