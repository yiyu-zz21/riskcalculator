<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container>
      <el-header height="20%"><RiskHeader/></el-header>
      <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-main><RiskCalculator/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RiskHeader from "@/components/RiskHeader";
import Aside from "@/components/Aside";
import RiskCalculator from "@/components/RiskCalculator";

export default {
  name: 'Risk',
  components: {
    RiskHeader,
    Aside,
    RiskCalculator
  }
}
</script>
