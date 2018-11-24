<template>
  <div class="container" style="position: relative; top: -40px">
    <div>
      <b-card-group columns>
        <b-card title="Profile"
                v-bind:img-src="require('../assets/profile.png')"
                img-fluid
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
          <p class="card-text">
            自己紹介です
          </p>
          <b-button to="/profile" variant="primary">Go Profile</b-button>
        </b-card>

        <b-card title="Works"
                v-bind:img-src="require('../assets/works.png')"
                img-fluid
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
          <p class="card-text">
            制作物一覧です
          </p>
          <b-button to="/works" variant="primary">Go Works</b-button>
        </b-card>

        <b-card title="Contact"
                v-bind:img-src="require('../assets/contact.png')"
                img-fluid
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2">
          <p class="card-text">
            非常にセキュア
          </p>
          <b-button to="/contact" variant="primary">Go Contact</b-button>
        </b-card>
      </b-card-group>
    </div>
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
</style>
