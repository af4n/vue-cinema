<template>
  <div class="serials-page container">
    <serials-list :serials="serials"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import SerialsList from '../../components/serials/SerialsList'

  export default {
    name: 'AllFilmsPage',
    components: {SerialsList},
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
    }
  }
</script>

<style lang="scss" scoped>

</style>