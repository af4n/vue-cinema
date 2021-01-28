<template>
  <div class="films-list">
    <film-card
        class="film-card"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>

<script>
  import FilmCard from './MovieCard'

  export default {
    props: {
      movies: {
        type: Array,
        default: () => []
      }
    },
    components: {
      FilmCard
    }
  }
</script>

<style lang="scss" scoped>
  .films-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
  }

  .film-card {
    margin-bottom: 40px;
  }
</style>