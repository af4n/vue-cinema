<template>
  <div class="person-list">
    <person-card
        class="person-card"
        v-for="person in persons"
        :key="person.id"
        :person="person"
    />
  </div>
</template>

<script>
  import PersonCard from './PersonCard'

  export default {
    components: {
      PersonCard
    },
    props: {
      persons: {
        type: Array,
        default: () => []
      }
    },

  }
</script>

<style lang="scss" scoped>
  .person-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .person-card {
    margin-bottom: 40px;
  }
</style>