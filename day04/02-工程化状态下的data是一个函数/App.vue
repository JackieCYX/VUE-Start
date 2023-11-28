<template>
  <div id="app">
    <baseCount></baseCount>
    <baseCount></baseCount>
    <baseCount></baseCount>
  </div>
</template>
<script>
import baseCount from "./components/BaseCount.vue";

export default {
  name: 'App',
  components: {
    baseCount
  }
}
</script>