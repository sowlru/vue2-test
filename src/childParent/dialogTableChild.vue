<template>
  <el-dialog
    :visible="open"
    title="Title"
    width="60%"
    @update:visible="$emit('update:open', false)"
  >
    <el-form :model="formData">
      <el-form-item label="Name">
        <el-input v-model="formData.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="saveData"> Save </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  emits: ["update:open", "update:data"],
  data() {
    return {
      formData: this.data,
    }
  },
  methods: {
    saveData() {
      console.log("saveData")
      this.$emit("update:data", this.formData)
      this.$emit("update:open", false)
      this.$emit("saveData")
    },
  },
}
</script>
