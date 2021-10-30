<template>
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b/* "
    :router=true
  >
    <el-menu-item index="login" @click="showLogin">Login</el-menu-item>
    <el-menu-item index="1" :route="{name: 'home'}">Home</el-menu-item>
    <el-menu-item index="2" :route="{name: 'second'}">Second</el-menu-item>
    <el-menu-item index="3" :route="{name: 'posts'}">Posts</el-menu-item>
  </el-menu>

  <el-dialog v-model="loginVisible" >
    <login-element />
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginElement from "./Login.vue";

export default defineComponent({
  components: {
    LoginElement
  },
  setup() {
    let loginVisible = ref(false);

    const showLogin = function () {
      console.log("show login");
      loginVisible.value = true
    }
    return {
      showLogin,
      loginVisible
    }
  },
})
</script>

