<script setup>
console.log('homeview start')
const result = await new Promise(r=>setTimeout(()=>{
  r('aaaaaa')
},5000))
console.log('homeview end')
</script>

<template>
<div>111</div>
</template>
