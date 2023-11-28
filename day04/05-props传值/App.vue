<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    <UserInfo
        :username="username"
        :age="age"
        :isSingle="isSingle"
        :car="car"
        :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo'

export default {
  components: {
    UserInfo
  },
  data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马'
      },
      hobby: ['篮球', '足球', '羽毛球'],
    }
  }
}
</script>

<style>
</style>