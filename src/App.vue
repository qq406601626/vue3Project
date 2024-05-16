<script setup>

</script>

<template>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense>
        <!-- 主要内容 -->
        <component :is="Component"></component>
        <!-- 加载中状态 -->
        <template #fallback>
          正在加载...
        </template>
      </Suspense>
    </template>
  </RouterView>
</template>

<style scoped>
</style>
