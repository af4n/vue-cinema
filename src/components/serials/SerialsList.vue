<template>
  <div class="serials-list">
    <serial-card
        class="serial-card"
        v-for="serial in serials"
        :key="serial.id"
        :serial="serial"
    />
  </div>
</template>

<script>
  import SerialCard from './SerialCard'

  export default {
    components: {
      SerialCard
    },
    props: {
      serials: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .serials-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
  }

  .serial-card {
    margin-bottom: 40px;
  }
</style>