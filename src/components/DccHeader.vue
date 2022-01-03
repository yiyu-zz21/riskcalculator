<template>
  <div>
    <div class="radios">
      <h1 class="h1-font">{{ $t('dcc.title1')}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "DccHeader"
}
</script>

<style scoped>
.radios {
  width: 100%;
  background-color: cadetblue;
  border-radius: 10px;
  /*margin-top: 10px;*/
}
.h1-font {
  color: #ffffff;
  font-size: 2em;
}
</style>