<template>
  <div class="film-card">
    <img
        :src="`https://image.tmdb.org/t/p/w500` + movie.backdrop_path"
        :alt="movie.title"
    >
    <p class="rating">{{ movie.vote_average }}</p>
    <p class="title">{{ movie.original_title }}</p>
    <router-link
        :to="{ name: 'moviePage', params: { id: movie.id } }"
        class="more-info"
        :movie="movie"
    >
      More about the film
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      movie: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .film-card {
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .1);

    img {
      object-fit: cover;
    }

    .title {
      position: absolute;
      margin-bottom: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      color: #ffffff;
      background: linear-gradient(90deg, #111111 0%, rgba(0, 0, 0, 0) 90%);
      font-weight: 700;
      padding: 20px;
      font-size: 30px;
    }

    .rating {
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: transparent;
      width: 50px;
      height: 50px;
      margin-top: 0;
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      border: 2px solid #ffffff;
    }

    .more-info {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.6);
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 30px;
      text-decoration: none;
      opacity: 0;
      transition: all 0.2s ease;

      &:hover, &:focus {
        opacity: 1;
      }
    }
  }
</style>