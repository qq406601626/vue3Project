<script>
import {defineComponent} from 'vue'
console.log('11111111111111')
const name = 'zhangsan'

</script>
<script setup>
console.log('2222')
console.log('name:',name)
</script>

<template>
  <button @click="say">jump</button>
</template>
