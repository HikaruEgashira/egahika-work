<template>
  <div style="position: relative; top: -70px">
    <img v-bind:img-src="require('../assets/logo.png')" fluid alt="egahika work" height="300px">
    <img v-bind:src="require('../assets/profile.png')" alt="profile" fluid height="200px"><br><br>
    <h2>自己紹介</h2>
    <br><br>
    <p>江頭輝です</p>
    <p>"ひかる"と呼びます</p>
    <p><b-link href="https://github.com/HikaruEgashira">github</b-link></p>
    <p><b-link href="https://twitter.com/ITF_hikary">twitter</b-link></p>
  </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>

<style>
</style>
