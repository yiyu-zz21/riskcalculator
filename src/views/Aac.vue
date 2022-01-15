<template>
  <div>
    <el-container>
      <el-header height="20%"><AacHeader/></el-header>
      <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-main><AacCalculator/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import AacHeader from "@/components/AacHeader";
import Aside from "@/components/Aside";
import AacCalculator from "@/components/AacCalculator";

export default {
  name: "Aac",
  components: {
    AacHeader,
    Aside,
    AacCalculator
  }
}
</script>

<style scoped>

</style>