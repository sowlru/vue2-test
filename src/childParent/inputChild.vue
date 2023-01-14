<template>
  <div class="cont">
    <hr />
    <p>inputChild : value : {{ value }}</p>
    <input type="text" :value="value" @input="fn" />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: ["value"],
  methods: {
    fn(e) {
      this.$emit("input", e.target.value)
    },
  },
}
</script>
