<template>
  <el-dialog
    :visible="visible"
    title="Tips"
    width="60%"
    @update:visible="$emit('update:visible', false)"
  >
    <span>This is a message</span>
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
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    saveData() {
      console.log("saveData")
      this.$emit("update:visible", false)
    },
  },
}
</script>
