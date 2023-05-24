<template>
  <div class="dialogTableParent">
    dialogTableParent
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>

      <el-table-column label="Operations" width="220">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="el-icon-edit" />
          </el-button>
          <el-button type="danger" size="small">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-table-child
      :open.sync="isModalOpen"
      :data.sync="tempData"
      @saveData="saveData"
    />
  </div>
</template>
<script>
import dialogTableChild from "./dialogTableChild.vue"
export default {
  components: { dialogTableChild },
  data() {
    return {
      list: [
        {
          date: "2016-05-03",
          name: "Alex",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Bob",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Piter",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      isModalOpen: false,
      tempData: {
        name: "",
      },
      activeRow: {},
    }
  },
  methods: {
    handleEdit(idx, row) {
      this.activeRow = row
      Object.assign(this.tempData, row)
      this.isModalOpen = true
      console.log("handleEdit", idx, row)
    },
    saveData() {
      Object.assign(this.activeRow, this.tempData)
    },
  },
}
</script>
