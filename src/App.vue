<template>
    <div id="main" class="app-main">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
export default {
  data() {
    return {};
  },
  components:{
    Header,
    Footer
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #fff;

}

.app-main {
  width: 100%;
  height: 100%;
}

.br button {
  margin-right: 5px;
}

.operation button {
  margin-right: 5px;
}

.ivu-btn-text:focus {
  box-shadow: none !important;
}
</style>
