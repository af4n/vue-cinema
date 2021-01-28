<template>
  <div class="person-card">
    <img
        :src="`https://image.tmdb.org/t/p/w500` + person.profile_path"
        :alt="person.name"
    >
    <p class="name">{{ person.name }}</p>
    <router-link
        :to="{ name: 'personPage', params: { id: person.id } }"
        class="more-info"
        :person="person"
    >
      More about <br> the actor
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      person: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person-card {
    position: relative;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    margin-right: 10px;

    img {
      width: 200px;
      height: 240px;
    }

    .name {
      position: absolute;
      margin-bottom: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #ffffff;
      background: linear-gradient(90deg, #111111 0%, rgba(0, 0, 0, 0) 90%);
      font-weight: 700;
      padding: 20px;
      font-size: 18px;
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
      font-size: 20px;
      text-decoration: none;
      opacity: 0;
      transition: all 0.2s ease;

      &:hover, &:focus {
        opacity: 1;
      }
    }
  }
</style>