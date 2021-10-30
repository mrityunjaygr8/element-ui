<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "/src/components/Navbar.vue";
</script>

<template>
  <el-container>
    <el-header>
      <navbar />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<style>
body {
  margin: 0;
};
</style>
