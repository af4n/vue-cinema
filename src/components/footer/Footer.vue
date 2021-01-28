<template>
  <footer>
    <div class="line"/>
    <div class="container">
      <div class="top-line">
        <router-link
            :to="{ name: 'main' }"
            class="logo"
        >
          Cinema
        </router-link>
        <div class="social">
          <img src="../../assets/images/facebook.svg" alt="facebook">
          <img src="../../assets/images/instagram.svg" alt="instagram">
          <img src="../../assets/images/youtube.svg" alt="youtube">
          <img src="../../assets/images/google-plus.svg" alt="google-plus">
        </div>
      </div>
      <div class="bottom-line">
        © 2021
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style lang="scss" scoped>
  .line {
    width: 100%;
    height: 3px;
    background: #111111;
    margin-bottom: 60px;
  }
  footer {
    background: #ffffff;
    padding-bottom: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .1);
    .container {
      margin-top: 0;
      .top-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          font-size: 34px;
          text-decoration: none;
          font-weight: 700;
          color: #111111;
        }
        .social {
          display: flex;
          justify-content: right;
          align-items: center;
          img {
            width: 40px;
            height: 40px;
            margin-left: 10px;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }

      .bottom-line {
        color: #111111;
        margin-top: 16px;
        margin-bottom: 16px;

      }

    }

  }
</style>