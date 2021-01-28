<template>
  <div class="persons-page container">
    <h2>People popular:</h2>
    <persons-list :persons="persons"/>
  </div>
</template>

<script>
  import PersonsList from '../../components/persons/PersonsList'
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'AllFilmsPage',
    components: {PersonsList},
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
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 32px;
    margin-bottom: 32px;
  }
</style>