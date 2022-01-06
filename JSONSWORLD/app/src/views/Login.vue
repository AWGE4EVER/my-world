<template>
  <a-card size="large" title="登录账号" style="width: 500px">
    <a slot="extra" href="#">注册</a>
    <a-form ref="loginForm" labelAlign="left" v-bind="layout">
      <a-form-item has-feedback label="用户名">
        <a-input v="username" type="username" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="密码">
        <a-input v="password" type="password" autocomplete="off" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      layout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 20 }
      }
    }
  }
}
</script>

<style scoped>

</style>
