<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="第一步" description="填写信息" />
      <el-step title="第二步" description="确认信息" />
      <el-step title="第三步" description="下单完成" />
    </el-steps>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
