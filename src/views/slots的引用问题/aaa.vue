<script>
import {h} from 'vue'

export default {
  setup(props, {slots, emit}) {
    let _component = null
    return () => {
      const a = slots.default() // 获取最原始的引用,此时vnode.component的值引用未被清除
      _component = a[0].component
      return a
      // slots.default()每次调用都会重新生成一个vnode数组
      // const a = slots.default()
      // const b = slots.default()
      // console.log('a',a[0])
      // console.log('b',b[0])
      // console.log('a===b',a===) => false
      // console.log('a===b',a[0]===b[0]) => false
      // return h('div',['111'])
    }
  }
}


</script>


<style scoped lang="scss">

</style>
