<template>
  <div>
    <div class="aside">
      <!--    <el-row>-->
      <!--      <el-button type="primary" @click="getEnglish" width="100%">English</el-button>-->
      <!--    </el-row>-->
      <!--    <p></p>-->
      <!--    <el-row>-->
      <!--      <el-button type="primary" @click="getChinese">中文</el-button>-->
      <!--    </el-row>-->
      <el-dropdown @command="handleSetLanguage">
        <span class="el-dropdown-link">{{ $t('header.lang') }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        　　　　
        　　
        <template #dropdown>
          　　　　
          <el-dropdown-menu >
            　　　　　　
            <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
            　　　　　　
            <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
            　　　　
          </el-dropdown-menu>
          　　
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";

const langName = ref('');
const language = ref('');
export default {
  name: "Aside",

  methods: {
    handleSetLanguage(lang) {
      if (lang === 'zh') {
        langName.value = '中文';
      } else {
        langName.value = 'English';
      }
      language.value = lang;
      localStorage.setItem('lang', lang);
      ElMessage.success('语言切换成功');
      location.reload();
    }
  },
  setup() {
    onMounted(() => {
      if (localStorage.getItem('lang') == undefined || localStorage.getItem('lang') == 'zh') {
        langName.value = '中文';
        language.value = 'zh';
      } else {
        langName.value = 'English';
        language.value = 'en';
      }
    })
  }
}
</script>

<style scoped>
.aside {
  margin-left: 40%;
}
</style>