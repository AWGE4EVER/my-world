<template>
  <a-layout-header v-if="$route.name" :style="{ position: 'fixed', zIndex: 1, width: '100%', top: '0' }">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys='[`${$route.name.toLowerCase()}`]'
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key='upload'>
        <router-link to="upload">上传文件</router-link>
      </a-menu-item>
      <a-menu-item key='index'>
        <router-link to="/">首页</router-link>
      </a-menu-item>
      <a-menu-item key='login'>
        <router-link to="login">登录</router-link>
      </a-menu-item>
      <a-menu-item key='about'>
        <router-link to="about">关于</router-link>
      </a-menu-item>
      <a-menu-item key='awge'>
        <router-link to="upload">AWGE</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
