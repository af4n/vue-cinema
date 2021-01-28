<template>
  <div class="films-page container">
    <films-list :movies="movies"/>
  </div>
</template>

<script>
  import FilmsList from '../../components/movies/MoviesList'
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'AllFilmsPage',
    components: {FilmsList},
    computed: {
      ...mapGetters([
        'movies'
      ])
    },
    methods: {
      ...mapActions([
        'get_movies_from_api'
      ])
    },
    mounted() {
      this.get_movies_from_api()
    }
  }
</script>

<style lang="scss" scoped>

</style>