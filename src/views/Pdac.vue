<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container>
      <el-header height="20%"><PdacHeader/></el-header>
      <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-main><PdacCalculator/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PdacHeader from "@/components/PdacHeader";
import Aside from "@/components/Aside";
import PdacCalculator from "@/components/PdacCalculator";

export default {
  name: 'Pdac',
  components: {
    PdacHeader,
    Aside,
    PdacCalculator
  }
}
</script>
