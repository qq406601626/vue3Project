<script setup>
import {ref} from 'vue'
const isShow = ref(false)
</script>
<template>
<!--  <el-popover-->
<!--      placement="top-start"-->
<!--      trigger="hover"-->
<!--      transition="el-zoom-in-top"-->
<!--      :show-arrow="false"-->
<!--  >-->
<!--    <template #reference>-->
<!--      <router-link to="/">home</router-link>-->
<!--    </template>-->
<!--    <div class="box">-->
<!--      <div>111111</div>-->
<!--      <div>22222</div>-->
<!--      <div>33333</div>-->
<!--      <div>44444</div>-->
<!--    </div>-->
<!--  </el-popover>-->
<!--  <div class="container">-->
<!--    <div>btn</div>-->
<!--    <div class="dropdown">-->
<!--      <div>11111111111</div>-->
<!--      <div>22222222222</div>-->
<!--      <div>33333333333</div>-->
<!--      <div>44444444444</div>-->
<!--      <div>55555555555</div>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <el-button @click="isShow = !isShow">change</el-button>
    <el-collapse-transition>
      <div v-show="isShow">
        <div class="transition-box">el-collapse-transition</div>
        <div class="transition-box">el-collapse-transition</div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<style scoped lang="scss">
//.container{
//  position: relative;
//  display: inline-flex;
//  background: #67c23a;
//  padding-bottom: 30px;
//  .dropdown{
//    position: absolute;
//    top: 100%;
//    left: 0;
//    width: 100%;
//    background: #ff00ff;
//    padding: 10px;
//    opacity: 0;
//    transform: scaleY(0);
//    transform-origin: center top;
//    //transition:  transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
//    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
//  }
//  &:hover{
//    .dropdown{
//      opacity: 1;
//      transform: scaleY(1);
//    }
//  }
//}


.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
