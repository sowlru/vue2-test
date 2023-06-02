<template>
  <div class="cont">
    <p>eltableParent : checkedData : {{ checkedData }}</p>
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
    <eltable-child v-model="checkedData" />
  </div>
</template>
<script>
/* eslint-disable */
import eltableChild from "@/el-table/eltableChild"
export default {
  components: {
    eltableChild,
  },
  data() {
    return {
      checkedData: [],
    }
  },
  methods: {
    deleteRow(idx, row) {
      this.checkedData = this.checkedData.filter((x) => x !== row)
    },
  },
}
</script>
