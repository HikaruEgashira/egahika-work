<template>
  <div style="position: relative; top: -20px">
    <img v-bind:src="require('../assets/logo.png')" fluid alt="egahika work" height="300px">
    <div>
      <b-card-group columns>
        <b-card
          title="Profile"
          v-bind:img-src="require('../assets/profile.png')"
          img-fluid
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p class="card-text">自己紹介です</p>
          <b-button href="#profile" variant="primary">Go Profile</b-button>
        </b-card>

        <b-card
          title="Works"
          v-bind:img-src="require('../assets/works.png')"
          img-fluid
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p class="card-text">制作物一覧です</p>
          <b-button href="#works" variant="primary">Go Works</b-button>
        </b-card>

        <b-card
          title="Contact"
          v-bind:img-src="require('../assets/contact.png')"
          img-fluid
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p class="card-text">非常にセキュア</p>
          <b-button href="#contact" variant="primary">Go Contact</b-button>
        </b-card>
      </b-card-group>
    </div>

    <br>
    <br>

    <div id="profile">
      <br>
      <br>
      <h2>自己紹介</h2>
      <br>
      <br>
      <p>江頭輝です</p>
      <p>"ひかる"と読みます</p>
      <br><br>
      <p>
        <b-link href="https://github.com/HikaruEgashira">github: HikaruEgashira</b-link>
      </p>
      <p>
        <b-link href="https://twitter.com/ITF_hikary">twitter: @ITF_hikary</b-link>
      </p>
    </div>

    <br>
    <br>

    <div id="works">
      <h2>制作物一覧</h2>
      <br>
      <br>
      <div>
        <b-card-group deck class="mb-3">
          <b-card
            title="search with qiita"
            v-bind:img-src="require('../assets/qiita.png')"
            img-fluid
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <p class="card-text">vscode内でqiitaでの検索を行えるようにする拡張機能</p>
            <b-button
              href="https://qiita.com/ITF_hikary/items/f529a5284e2353ac9794"
              variant="primary"
            >Qiitaでの解説記事</b-button>
          </b-card>
        </b-card-group>
      </div>

      <br>
      <br>

      <div id="contact">
        <h2>contact</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}

if (
  (navigator.userAgent.indexOf('iPhone') > 0 &&
    navigator.userAgent.indexOf('iPad') === -1) ||
  navigator.userAgent.indexOf('iPod') > 0 ||
  navigator.userAgent.indexOf('Android') > 0
) {
  // スマホ用のページにリダイレクトする
  location.href = '/sp#'
}
</script>

<style>
</style>
