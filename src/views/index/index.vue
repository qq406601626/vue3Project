<script setup>
import {onMounted} from 'vue'
onMounted(async ()=>{
  fetch('/api/user/test').then(res=>{
    console.log('res',res)
  })
})
</script>

<template>
  <div style="color:#000;">this is index page</div>
</template>

<style scoped lang="scss">

</style>
