<template>
  <div class="cont">
    <p>serverDataParent : checkedData : {{ checkedData }}</p>
    <el-table :data="checkedData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column fixed="right" label="Действие" width="120">
        <template #default="scope">
          <el-button
            link
            size="mini"
            title="Удалить"
            @click.prevent="deleteRow(scope.$index, scope.row)"
          >
            <i class="el-icon-delete" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <hr />
    <server-data-child v-model="checkedData" />
  </div>
</template>
<script>
/* eslint-disable */
import serverDataChild from "@/el-table/serverDataChild"
export default {
  components: {
    serverDataChild,
  },
  data() {
    return {
      parentData: [
        { id: 2, name: "b" },
        { id: 3, name: "c" },
      ],
      checkedData: [],
    }
  },
  mounted() {
    this.checkedData = [...this.checkedData, ...this.parentData]
  },
  methods: {
    deleteRow(idx, row) {
      this.checkedData = this.checkedData.filter((x) => x !== row)
    },
  },
}
</script>
