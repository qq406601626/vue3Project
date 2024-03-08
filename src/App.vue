<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->
  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
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
