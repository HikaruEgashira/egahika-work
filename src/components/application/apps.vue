<template>
  <b-container fluid class="apps pl-5 pr-5">
    <img v-bind:src="require('../../assets/logo.png')" fluid alt="egahika work" height="180px">
    <div style="position: relative; top: -30px">
      <h1>SPA with VueJs</h1>
      <p>ここではvueを使ったwebアプリケーションをソースコードとともに紹介・解説する</p>
      <hr>
      <todo></todo>
      <hr>
    </div>
  </b-container>
</template>

<script>
import todo from '@/components/application/todo'
export default {
  name: 'apps',
  components:
  {
    todo
  }
}
</script>

<style>
.apps  {
    text-align: left
}
</style>
