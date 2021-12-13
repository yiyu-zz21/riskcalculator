<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container>
      <el-header height="20%"><Header/></el-header>
      <el-container>
        <el-aside width="200px"><Aside/></el-aside>
        <el-main><Calculator/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Calculator from "@/components/Calculator";

export default {
  name: 'Home',
  components: {
    Header,
    Aside,
    Calculator
  }
}
</script>
