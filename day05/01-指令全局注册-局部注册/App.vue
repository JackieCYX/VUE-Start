<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
export default {
  // 注册指令
  directives: {
    // 指令名：指令的配置项
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>