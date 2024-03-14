<script setup>
import { ElMenu,ElSubMenu,ElMenuItem,ElIcon } from 'element-plus'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/sub-menu/style/css'
import 'element-plus/es/components/menu-item/style/css'
import {Edit,Search} from '@element-plus/icons-vue'
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2" >
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4" :collapse-close-icon="null" :collapse-open-icon="null">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
<!--  <el-icon :size="20">-->
<!--    <Edit />-->
<!--  </el-icon>-->
</template>

<style scoped>

</style>
