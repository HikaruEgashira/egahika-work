<template>
  <b-container fluid style="position: relative; top: 0px">
    <div id="app">
      <!-- いらなくね?って思ったので非表示に
    <div>
      <b-nav fill tabs>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="profile">Profile</b-nav-item>
          <b-nav-item-dropdown id="nav7_ddown" text="Works" extra-toggle-classes="nav-link-custom" right>
            <b-dropdown-item to="works">制作物一覧</b-dropdown-item>
          </b-nav-item-dropdown>
        <b-nav-item to="contact">Contact</b-nav-item>
      </b-nav>
      </div>-->
      <!-- issue: 外側に青い点線が出てくるのを消したい
      <b-link to="/">-->
      <!-- </b-link> -->
      <router-view></router-view>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
