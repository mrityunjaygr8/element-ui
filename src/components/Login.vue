<template>
  <div>
    <h2>Login form</h2>
    <el-form ref="login-form" :model="form">
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
	<el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    console.log("console")
    let form = ref({
      username: "",
      password: "",
    });

    const handleLogin = function() {
      console.log(form.value.username);
      console.log(form.value.password);
    };

    return {
      form,
      handleLogin
    };
  }
});
</script>

<style>

</style>
