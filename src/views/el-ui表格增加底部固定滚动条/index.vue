<script>
export default {
  name: "index",
  methods:{
    cloneTable() {
      const self = this
      const cloneTableInstance = new Vue({
        provide() {
          return {
            dialogRoot: this.dialogRoot,
            productSkuRoot: self
          }
        },
        render(h) {
          return h(SkuList, { ref: '$table' })
        }
      })
      cloneTableInstance.$mount(this.$refs.scrollbar)
      const { skuListTable: $cloneTable } = cloneTableInstance.$refs.$table.$refs
      $cloneTable.unbindEvents()
      const { bodyWrapper: cloneTableBodyWrapper, $el: cloneTableEl } = $cloneTable
      Array.from(cloneTableEl.childNodes).forEach(childNode => {
        childNode && childNode !== cloneTableBodyWrapper && cloneTableEl.removeChild(childNode)
      })
      const $cloneTableBody = cloneTableBodyWrapper.querySelector('.el-table__body')
      $cloneTableBody.innerHTML = ''
      $cloneTableBody.style.height = '1px'
      Object.assign(cloneTableEl.style, {
        position: 'sticky',
        bottom: 0,
        left: 0,
        marginTop:'-7px',
        zIndex: 10
      })
      const { bodyWrapper: currentTableBodyWrapper } = this.$refs.skuList.$refs.skuListTable
      currentTableBodyWrapper.style.overflowX = 'hidden'
      const onScroll = () => {
        currentTableBodyWrapper.scrollLeft = cloneTableBodyWrapper.scrollLeft
      }
      cloneTableBodyWrapper.addEventListener('scroll', onScroll, { passive: true })
    }
  }
}
</script>

<template>

</template>

<style scoped lang="scss">

</style>
