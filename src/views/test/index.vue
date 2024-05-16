<script>

import Component from './component.vue'

console.log('aaa',Component.render.toString())

export  default {
  // 只使用原组件的方法 => 使用extends即可
  // 使用原组件的模板，然后重置原来的方法和增加新功能 =>
  //    1、只修改原来的方法：使用Component.render(props,{},ctx,oldSetup,{...data,addr:'nanjing'},{...Component.methods})
  //    2、修改模板并保留原来的某些功能和添加某些方法：先把原来组件的模板复制，然后extends:Component，然后添加上一些自定义功能。
  // extends:Component,
  setup(props,ctx){
    const oldSetup = Component.setup(props,ctx)
    oldSetup.print= ()=>{
      console.log('xxxxxxxxxxxxxxx')
    }
    const data= Component.data()
    return ()=>Component.render(props,{},ctx,oldSetup,{...data,addr:'nanjing'},{...Component.methods})
  },
  methods:{

  }
}

</script>

<template>
  <Component></Component>
  <!--<div @click="print3">print3</div>-->
</template>
<style scoped>

</style>
