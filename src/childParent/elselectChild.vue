<template>
  <div class="cont">
    <p>elselectChild : v-model : {{ value }}</p>
    <el-select v-model="vm" placeholder="Select" @change="handlerChange">
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.name"
        :value="item.name"
      />
    </el-select>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: { value: { type: String, default: "" } },
  data() {
    return {
      options: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
      ],
    }
  },
  computed: {
    vm: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      },
    },
  },
  methods: {
    handlerChange() {
      console.log("handlerChange")
    },
  },
}
</script>
