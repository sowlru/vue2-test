<template>
  <div class="cont">
    <p>serverDataChild : serverData : {{ serverData }}</p>
    <el-table
      ref="refTable"
      :data="serverData"
      style="width: 100%"
      row-key="id"
      @select="handleSelectionChange"
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
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      serverData: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        { id: 4, name: "d" },
        { id: 5, name: "e" },
        { id: 6, name: "f" },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.toggleSelection()
    })
  },
  watch: {
    value(newVal) {
      this.toggleSelection()
    },
  },
  methods: {
    handleSelectionChange(v, row) {
      this.$emit("input", v)
    },
    toggleSelection() {
      this.$refs["refTable"].clearSelection()
      this.serverData.forEach((row) => {
        this.value.forEach((sel) => {
          if (row.id === sel.id) {
            this.$refs["refTable"].toggleRowSelection(row, undefined)
          }
        })
      })
    },
  },
}
</script>
