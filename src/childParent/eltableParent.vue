<template>
  <div class="cont">
    <p>eltableParent : myData : {{ myData }}</p>
    <el-table :data="myData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="Name" width="100" />
    </el-table>
    <hr />
    <eltable-child v-model="myData" />
  </div>
</template>
<script>
/* eslint-disable */
import eltableChild from "@/childParent/eltableChild"
export default {
  components: {
    eltableChild,
  },
  data() {
    return {
      myData: [
        // { id: 1, name: "a" },
        // { id: 2, name: "b" },
      ],
    }
  },
}
</script>
