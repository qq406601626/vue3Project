<script setup>
import {useCssModule} from 'vue'
const module = useCssModule('test')
console.log(module)
</script>
<template>
  <div :class="test.a">eeeeeeeeeeee</div>
  <div :class="test.container">
    <span :class="test.a">aaaaaa</span>
  </div>
  <div :id="test.container">qqqqqqq</div>
</template>

<style scoped lang="scss">

</style>
<style module="test" >
.a{
  color: red;
}
.container{
  background: blue;
  padding: 20px;
  .a {
    background: gray;
    color: aqua;
  }
}
#container{
  background: pink;
}
</style>
