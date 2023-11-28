<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    <Son :title="myTitle"></Son>
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
      myTitle: 'TEST'
    }
  }
}
</script>