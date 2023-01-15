<template>
  <div class="cont">
    <p>eltableChild : childData</p>
    <el-table
      :data="childData"
      style="width: 100%"
      row-key="id"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="35" :reserve-selection="true" />
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="Name" width="100" />
    </el-table>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  props: { value: { type: Array, default: "" } },
  data() {
    return {
      childData: [
        { id: 3, name: "c" },
        { id: 4, name: "d" },
      ],
    }
  },
  methods: {
    handleSelectionChange(v) {
      this.$emit("input", v)
      console.log("handleSelectionChange", v)
    },
  },
}
</script>
