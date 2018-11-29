<template>
  <div style="position: relative; top: -40px">
    <img v-bind:src="require('../assets/logo.png')" fluid alt="egahika work" height="500px">
    <div style="position: relative; top: -120px">
      <b-card
        v-bind:img-src="require('../assets/profile.png')"
        img-fluid
        img-alt="profile_by_egahika"
        img-top
        tag="article"
        style="max-width: 40rem;"
        class="w-80 mx-auto p-5 m-5"
      >
        <p class="card-text">自己紹介です</p>
        <b-button href="#profile" variant="outline-success" size="lg">Go Profile</b-button>
      </b-card>
      <b-card
        v-bind:img-src="require('../assets/works.png')"
        img-fluid
        img-alt="works_by_egahika"
        img-top
        tag="article"
        style="max-width: 40rem;"
        class="w-80 mx-auto p-5 m-5"
      >
        <p class="card-text">制作物一覧です</p>
        <b-button href="#works" variant="outline-success" size="lg">Go Works</b-button>
      </b-card>
      <b-card
        v-bind:img-src="require('../assets/contact.png')"
        img-fluid
        img-alt="contact_by_egahika"
        img-top
        tag="article"
        style="max-width: 40rem;"
        class="w-80 mx-auto p-5 m-5"
      >
        <p class="card-text">非常にセキュア</p>
        <b-button href="#contact" variant="outline-success" size="lg">Go Contact</b-button>
      </b-card>
    </div>

    <br><br>

    <div id="profile">
      <br><br>
      <h2>自己紹介</h2>
      <br><br>
      <p>江頭輝です</p>
      <p>"ひかる"と呼びます</p>
      <p>
        <b-link href="https://github.com/HikaruEgashira">github</b-link>
      </p>
      <p>
        <b-link href="https://twitter.com/ITF_hikary">twitter</b-link>
      </p>
    </div>

    <br><br>

    <div id="works">
      <br><br>
      <h2>制作物一覧</h2>
      <br><br>
      <div>
        <b-card
          title="search with qiita"
          v-bind:img-src="require('../assets/qiita.png')"
          img-fluid
          img-alt="qiita"
          img-top
          tag="article"
          style="max-width: 40rem;"
          class="w-80 mx-auto p-5 m-5"
        >
          <p class="card-text">
            vscode内でqiitaでの検索を行えるようにする拡張機能
          </p>
          <b-button href="https://qiita.com/ITF_hikary/items/f529a5284e2353ac9794" variant="outline-success" size="lg">Qiitaでの解説記事</b-button>
        </b-card>
      </div>
    </div>

    <br><br>

    <div id="contact">
      <h2>contact</h2>
    </div>
    <br><br>
  <p>こちらはスマホ用ページです</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style>
  body {
    background: #FFF;
    width: 100%;
    color: #333631;
  }

  h2 {
    font-size: 5.0em;
  }

  p, b-button {
    font-size: 3.5em;
  }
</style>
