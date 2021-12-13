<template>
<div>
  <div class="aside">
    <el-row>
      <el-button type="primary" @click="getEnglish" width="100%">English</el-button>
    </el-row>
    <p></p>
    <el-row>
      <el-button type="primary" @click="getChinese">中文</el-button>
    </el-row>
  </div>
</div>
</template>

<script>
import api from "@/axios/api";
export default {
  name: "Aside",

  methods: {
    getEnglish() {
      api.postList('1').then((res) => {
        console.log(res.data);
      })
    },
    getChinese() {
      api.getList('1').then((res) => {
        console.log(res.data);
      })
    }
  }
}
</script>

<style scoped>
.aside {
  margin-left: 10%;
}
</style>