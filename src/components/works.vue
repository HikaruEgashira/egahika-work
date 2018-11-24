<template>
  <div class="container" style="position: relative; top: -40px">
    <img v-bind:src="require('../assets/works.webp')" alt="works" fluid height="200px"><br><br>
    <h2>制作物一覧</h2>
    <br><br>
    <div>
      <b-card-group columns>
        <b-card title="search with qiita"
                v-bind:img-src="require('../assets/qiita.png')"
                img-fluid
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
          <p class="card-text">
            vscode内でqiitaでの検索を行えるようにする拡張機能
          </p>
          <b-button href="https://qiita.com/ITF_hikary/items/f529a5284e2353ac9794" variant="primary">Qiitaでの解説記事</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'works'
}
</script>

<style>
</style>
