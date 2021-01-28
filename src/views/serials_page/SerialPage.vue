<template>
  <div class="serial-page">
    <div class="container" v-if="serial">
      <h2>{{ serial.original_name }}</h2>
      <div class="line-top"/>
      <div class="serial-page__content">
        <div>
          <img
              :src="`https://image.tmdb.org/t/p/w500` + serial.poster_path"
              :alt="serial.name"
          >
        </div>
        <div>
          <div class="section">
            <p class="section__title">Overview:</p>
            <p class="section__description">{{ serial.overview }}</p>
          </div>
          <div class="section">
            <p class="section__title">Rating:</p>
            <p class="section__description">{{ serial.popularity }}</p>
          </div>
          <div class="section">
            <p class="section__title">First air date:</p>
            <p class="section__description">{{ serial.first_air_date }}</p>
          </div>
          <div class="section">
            <p class="section__title">Vote average:</p>
            <p class="section__description">{{ serial.vote_average }}</p>
          </div>
        </div>
      </div>
      <div class="line-bottom"/>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'SerialPage',
    computed: {
      ...mapGetters([
        'serials'
      ])
    },
    methods: {
      ...mapActions([
        'get_serials_from_api'
      ])
    },
    mounted() {
      this.get_serials_from_api()
    },
    created() {
      const serial = this.serials.find(serial => serial.id === this.$route.params.id)
      if (serial) {
        this.serial = serial
      }
    }
  }
</script>

<style lang="scss" scoped>
  .serial-page {
    padding-bottom: 100px;

    .back {
      color: #111111;
      margin-left: 30px;
      margin-top: 30px;
    }

    h2 {
      color: #111111;
      margin-top: 16px;
      position: relative;
    }

    .line-top {
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #111111 0%, rgba(0, 0, 0, 0) 90%);
      margin-bottom: 35px;
    }

    .line-bottom {
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #111111 90%);
      margin-bottom: 35px;
    }

    &__content {
      display: flex;

      img {
        object-fit: cover;
        border-radius: 10px;
        height: 600px;
        margin-bottom: 30px;
      }

      .section {
        padding-left: 35px;
        padding-right: 35px;

        &__title {
          color: #111111;
          font-weight: 700;
          font-size: 25px;
          margin-bottom: 10px;
        }

        &__description {
          color: #111111;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
</style>