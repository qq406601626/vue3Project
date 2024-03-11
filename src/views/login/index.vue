<script setup>
import {ref, reactive, watchEffect, watch, readonly, isRef,toRef,isReactive} from 'vue'
import {useForm} from './useForm'
import {Text} from 'vue'

const {formData, _form, submit} = useForm()
const btn = ref()
const log = () => {
  console.log(btn.value.shouldAddSpace)
}
</script>


<template>
  <el-form ref="_form" :model="formData">
    <el-form-item prop="account" :rules="[{required:true,message:'请输入账号',trigger:'blur'}]">
      <el-input v-model="formData.account"></el-input>
    </el-form-item>
    <el-form-item prop="password" :rules="[{required:true,message:'请输入账号',trigger:'blur'}]">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit()">submit</el-button>
      <el-button ref="btn" @click="log" auto-insert-space>打印</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>
