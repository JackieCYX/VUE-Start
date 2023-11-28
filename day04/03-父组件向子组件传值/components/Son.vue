<template>
  <div class="son" style="border: 3px solid #000;margin: 10px">
    我是Son组件{{title}}
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 通过props来接收
  props:['title']
}
</script>

<style>

</style>