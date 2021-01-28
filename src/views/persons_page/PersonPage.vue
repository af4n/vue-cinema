<template>
  <div class="person-page">
    <div class="container" v-if="person">
      <h2>{{ person.name }}</h2>
      <div class="line-top"/>
      <div class="person-page__content">
        <div>
          <img
              :src="`https://image.tmdb.org/t/p/w500` + person.profile_path"
              :alt="person.name"
          >
        </div>
        <div>
          <div class="section">
            <p class="section__name">Немного о сюжете:</p>
            <p class="section__description">{{ person.name }}</p>
          </div>
          <div class="section">
            <p class="section__name">Рейтинг:</p>
            <p class="section__description">{{ person.popularity }}</p>
          </div>
          <div class="section">
            <p class="section__name">Дата выхода:</p>
            <p class="section__description">{{ person.name }}</p>
          </div>
          <div class="section">
            <p class="section__name">Средний голос:</p>
            <p class="section__description">{{ person.name }}</p>
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
    name: 'PersonPage',
    computed: {
      ...mapGetters([
        'persons'
      ])
    },
    methods: {
      ...mapActions([
        'get_persons_from_api'
      ])
    },
    mounted() {
      this.get_persons_from_api()
    },
    created() {
      const person = this.persons.find(person => person.id === this.$route.params.id)
      if (person) {
        this.person = person
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person-page {
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

        &__name {
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