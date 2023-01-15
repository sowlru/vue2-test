<template>
  <div class="cont">
    <p>elselectParent : myData : {{ myData }}</p>
    <elselect-child v-model="myData" />
  </div>
</template>
<script>
/* eslint-disable */
import elselectChild from "@/childParent/elselectChild"
export default {
  components: {
    elselectChild,
  },
  data() {
    return {
      myData: "a",
    }
  },
}
</script>
