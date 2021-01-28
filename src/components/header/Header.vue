<template>
  <header>
    <div class="container">
      <router-link
          :to="{ name: 'main' }"
          class="logo"
      >
        Cinema
      </router-link>
      <div class="links">
        <router-link
            :to="{ name: 'movies' }"
        >
          Films
        </router-link>
        <router-link
            :to="{ name: 'serials' }"
        >
          Serials
        </router-link>
        <router-link
            :to="{ name: 'persons' }"
        >
          Actors
        </router-link>
      </div>
      <div class="auth">
        <a class="btn" @click="changeUserState"
           :class="auth ? 'btn-log-out' : 'btn'"
        >{{ auth ? 'Log out' : 'Log in' }}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 60">
              <path class="arrow-line" d="M0 0l21.2 30L0 60"/>
              <path class="arrow-bg" d="M0 0l21.2 30L0 60V0z"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        auth: false
      }
    },
    created() {
      this.auth = localStorage.getItem('auth') !== null
    },
    methods: {
      changeUserState() {
        if (this.auth) {
          localStorage.removeItem('auth')
          this.$router.push({name: 'main'})
        } else {
          localStorage.setItem('auth', true)
          this.auth = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    background: #111111;
    padding: 10px 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, .1);

    .container {
      margin-top: 0;
      display: flex;
      align-items: center;
    }

    .logo {
      font-size: 34px;
      text-decoration: none;
      font-weight: 700;
      color: #ffffff;
    }

    .links {
      margin-left: 75px;
      display: flex;
      flex-grow: 1;
      align-items: center;

      a {
        text-decoration: none;
        font-weight: 700;
        color: #ffffff;
        font-size: 18px;
        margin-left: 20px;
        border-bottom: 2px solid transparent;
        transition: all 200ms ease-in-out;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .auth {
      justify-content: flex-end;

      .btn {
        display: inline-block;
        padding: 10px;
        font-size: 18px;
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
        stroke: #fff;
        stroke-width: 2;
        stroke-miterlimit: 20;
      }

      .btn .arrow-bg {
        fill: transparent;
        transition: all 200ms ease-in-out;
      }

      .btn:hover {
        background: #ffffff;
        color: #111111;
      }

      .btn:hover .arrow-bg {
        fill: #ffffff;
      }

      .btn-log-out {
        padding: 10px;
        border: 2px solid #fff;
        border-left-width: 0;
      }

      .btn-log-out span {
        transform: rotateY(145deg);
        left: 0;
        right: 100%;
      }
    }
  }
</style>
