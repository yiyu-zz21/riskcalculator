<template>
<div>
  <el-container>
    <el-header height="20%"><DccHeader/></el-header>
    <el-container>
      <el-aside width="200px"><Aside/></el-aside>
      <el-main><DccCalculator/></el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>

import DccHeader from "@/components/DccHeader";
import Aside from "@/components/Aside";
import DccCalculator from "@/components/DccCalculator";

export default {
  name: "Dcc",
  components: {
    DccHeader,
    Aside,
    DccCalculator
  }
}
</script>

<style scoped>

</style>