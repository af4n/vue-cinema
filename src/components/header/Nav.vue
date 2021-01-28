<template>
  <ul class="nav">
    <li class="nav-item">
      <a>
        Rating
      </a>
    </li>
    <li class="nav-item">
      <a>
        Views
      </a>
    </li>
    <li class="nav-item">
      <a>
        Popular
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    justify-content: center;

    &-item {
      list-style: none;
      background: transparent;
      justify-content: center;
      align-items: center;
      color: #111111;
      font-weight: 700;
      font-size: 20px;
      border-bottom: 2px solid #ffffff;
      cursor: pointer;
      margin: 10px;
      transition: all 200ms ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>