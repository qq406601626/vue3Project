<script setup>
import {inject,getCurrentInstance} from 'vue'
const instance = getCurrentInstance()
const print = ()=>{
  const v = instance.appContext.app.runWithContext(()=>{
    return inject('pageRoot')
  })
  console.log('vvvvv',v)
}
</script>


<template>
  <!--`app.runWithContext()`是Vue 3中用于在没有当前活动组件实例的情况下，也能访问注入的上下文数据的函数。
  它接受一个回调函数作为参数，并在该回调函数内部，inject() 可以访问到通过 app.provide() 提供的全局数据-->
  <div style="color:#000;" @click="print">print</div>
</template>

<style scoped>

</style>
