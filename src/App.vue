<template>
    <Header @login-click="loginClicked" @register-click="registerClicked" />
    <div class="main-container">
      <router-view></router-view>
    </div>
    <Footer />
</template>


<script>
import  Header  from './components/Header'
import Footer from './components/Footer'
import router from './router/index'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    loginClicked() {
      router.push('login')
    },
    registerClicked() {
      router.push('apply')
    }
  }
}
</script>

<style scoped>
.main-container {
  margin: auto;
  height: 100%;
  width: auto;
}
</style>
