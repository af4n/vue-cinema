<template>
  <div class="main-page">
    <a class="btn"
       @click="$router.push({ name: 'movies' })"
    >Go to view
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 60">
          <path class="arrow-line" d="M0 0l21.2 30L0 60"/>
          <path class="arrow-bg" d="M0 0l21.2 30L0 60V0z"/>
        </svg>
      </span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('../assets/images/bg-main-page.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .btn {
      display: inline-block;
      padding: 10px 10px 10px 20px;
      font-size: 34px;
      line-height: 1.4;
      font-family: sans-serif;
      text-decoration: none;
      border: 2px solid #fff;
      border-right-width: 0;
      position: relative;
      transition: all 200ms ease-in-out;
      cursor: pointer;
      color: #fff;
    }

    .btn span {
      content: '';
      position: absolute;
      top: -2px;
      left: 100%;
      bottom: -2px;
      width: 0px;
    }

    .btn span svg {
      height: 100%;
    }

    .btn .arrow-line {
      fill: none;
      stroke: #ffffff;
      stroke-width: 2;
      stroke-miterlimit: 10;
    }

    .btn .arrow-bg {
      fill: transparent;
      transition: all 200ms ease-in-out;
    }

    .btn:hover {
      background: #111111;
    }

    .btn:hover .arrow-bg {
      fill: #111111;
    }
  }
</style>