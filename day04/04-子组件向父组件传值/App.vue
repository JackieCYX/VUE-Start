<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 2.父组件对子组件的消息进行监听 -->
    <Son :title="myTitle" @changTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son'
export default {
  name: 'App',
  components: {
    Son
  },
  data() {
    return {
      myTitle: 'FATHER TEST'
    }
  },
  methods: {
    handleChange(newValue) {
      this.myTitle = newValue
    }
  }
}
</script>