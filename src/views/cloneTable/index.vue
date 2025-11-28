<script setup lang="jsx">
const $tableClone = ref()
const $stickyBox = ref()
const $refBinding = ref('$table')
const isShowHeader = ref(true)

const cloneTable = async () => {
  const $table_wrapRef = $table.value.$refs.scrollBarRef.wrapRef
  const $table_bodyWrapper = $table.value.$refs.bodyWrapper
  const { store: $table_store, layout: $table_layout } = $table.value
  $refBinding.value = '$tableClone'
  await nextTick()
  const $tableClone_vnode = $tableClone.value.$.vnode
  const app = {
    render() {
      return (
          <el-config-provider namespace="muye">
            {
              $tableClone_vnode
            }
          </el-config-provider>
      )
    }
  }
  const tempContainer = document.createElement('div')
  const appInstance = createApp(app)
  appInstance.mount(tempContainer)
  $stickyBox.value.appendChild(tempContainer)
  const { data: $tableClone_data } = $tableClone.value.store.states
  watchEffect(() => {
    $tableClone_data.value = $table_store.states.data.value
  })
  const $tableClone_bodyWrapper = $tableClone.value.$el.querySelector('.muye-table__body-wrapper')
  $tableClone_bodyWrapper.parentNode.removeChild($tableClone_bodyWrapper)
  const setScrollClass = (className) => {
    if (!$tableClone_tableWrapper) return
    const classList = Array.from($tableClone_tableWrapper.classList).filter(
        (item) => !item.startsWith('is-scrolling-')
    )
    classList.push($table_layout.scrollX.value ? className : 'is-scrolling-none')
    $tableClone_tableWrapper.className = classList.join(' ')
  }
  const { headerWrapper: $tableClone_headerWrapper, tableWrapper: $tableClone_tableWrapper } = $tableClone.value.$refs
  const syncPosition = () => {
    const { scrollLeft, offsetWidth, scrollWidth } = $table_wrapRef
    $tableClone_headerWrapper.scrollLeft = scrollLeft
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass('is-scrolling-right')
    } else if (scrollLeft === 0) {
      setScrollClass('is-scrolling-left')
    } else {
      setScrollClass('is-scrolling-middle')
    }
  }

  if ($table_wrapRef && $tableClone_headerWrapper) {
    $table_wrapRef.addEventListener('scroll', syncPosition, { passive: true })
  }
  if ($table_bodyWrapper) {
    useResizeObserver($table_bodyWrapper, () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(syncPosition)
      })
    })
  }
  $tableClone.value.store.toggleRowSelection = $table_store.toggleRowSelection
  $tableClone.value.store._toggleAllSelection = $table_store._toggleAllSelection
  $tableClone.value.store.toggleAllSelection = $table_store.toggleAllSelection
  $tableClone.value.store.states = $table_store.states
  $refBinding.value = '$table'
  isShowHeader.value = false
}
</script>

<template>

</template>

<style scoped lang="scss">

</style>



