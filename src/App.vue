<template>
  <div class="container">
    <input-parent />
  </div>
</template>

<script>
/* eslint-disable */
// CHILD-PARENT
import inputParent from "@/childParent/inputParent"

export default {
  components: {
    inputParent,
  },
}
</script>

<style>
.container {
  background-color: #eee;
}
</style>
