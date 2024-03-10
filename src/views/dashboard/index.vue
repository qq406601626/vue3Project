<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const jump = (name)=>{
  router.push({name})
}
</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-button @click="jump('test')">to test</el-button>
        <el-button @click="jump('login')">to login</el-button>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>

</style>