<script>
import {ref} from  'vue'
export default {
  setup(){
    const print = function(){
      console.log('print1')
    }


    return {
      print,
    }
  },
  data(){
    return {
      age:18,
      addr:'shanghai'
    }
  },
  methods:{
    print2(){
      console.log('print2')
    },
    print3(){
      console.log('print3')
    }
  }
}
</script>
<template>
<div class="component-container">
  <div @click="print">1111</div>
  <div @click="print2">2222</div>
  <div >age:{{age}}</div>
  <div>addr:{{addr}}</div>
</div>
</template>

<style scoped lang="scss">

</style>
