<script setup>
// 1、onWatcherCleanup只能写在watch/watchEffect的回调函数中。
// 2、每次执行watch/watchEffect的时候，先判断是否注册了onWatcherCleanup，如果注册了，就先执行onWatcherCleanup，然后执行回调。
// 也就是说，第一次执行watch/watchEffect回调的时候，并不会执行onWatcherCleanup的函数体
import {watch,onWatcherCleanup,reactive} from 'vue'
const person = reactive({
  count: 0,
  name: 'jyk'
})

watch(person, () => {
  onWatcherCleanup(() => {
    // 1、先打印
    console.log('onWatcherCleanup -- person', person)
  })
  // 2、然后才会打印
  console.log('watch -- person', person)

})

setTimeout(()=>{
  person.name='zhangsan'
  setTimeout(()=>{
    person.name='lisi'
  },3000)
},1000)

</script>

<template>
  <div style="color:#000;">this is index page</div>
</template>

<style scoped lang="scss">

</style>
