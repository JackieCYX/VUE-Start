<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="handleChange"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  data() {
    return {
      count: 110,
    }
  },
  components: {
    BaseCount,
  },
  methods: {
    handleChange(newVal) {
      this.count = newVal
    }
  }
}
</script>

<style>
</style>