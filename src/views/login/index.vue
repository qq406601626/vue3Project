<script setup>

import {ref} from 'vue'
const formData = ref({
  account:'',
  password:''
})
const a = ref('zhangsan')
const b = ref('lisi')
const $elForm = ref()
const submit = async (aaaa)=>{
  try {
   // await $elForm.value.validate()
   //  await form.validate()
   //  console.log('成功')
    console.log(aaaa)
    console.log(b)
  }catch (e){
    // console.log('失败')
  }
}
</script>

<template>
<el-form ref="$elForm" :model="formData">
  <el-form-item prop="account" :rules="[{required:true,message:'请输入账号',trigger:'blur'}]">
    <el-input v-model="formData.account"></el-input>
  </el-form-item>
  <el-form-item prop="password" :rules="[{required:true,message:'请输入账号',trigger:'blur'}]">
    <el-input v-model="formData.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="submit(a)">submit</el-button>
  </el-form-item>
</el-form>
</template>

<style scoped>

</style>