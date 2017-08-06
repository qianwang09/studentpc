<template>
  <div id="app">
    <div class="top">
      <Menu mode="horizontal" :theme="menuTheme" active-name="1" class="nav">
        <Menu-item name="1">
          <!-- <Icon type="ios-paper"></Icon> -->
          <!-- <a href="/" class="">邦邦留学</a> -->
          <router-link to="/">邦邦留学</router-link>
        </Menu-item>
        <Menu-item name="2">
          <!-- <a @click="routeTo('#servicefeature')" class="">服务特色</a> -->
          <!-- <a href="#servicefeature" class="">服务特色</a> -->
          <router-link to="/#servicefeature">服务特色</router-link>
        </Menu-item>
        <Menu-item name="3">
          <!-- <Icon type="ios-people"></Icon> -->
          <!-- <a @click="routeTo('#serviceprocess')" class="">服务流程</a> -->
          <router-link to="/#serviceprocess">服务流程</router-link>
        </Menu-item>
        </Menu-item>
        <Menu-item name="4">
          <!-- <Icon type="ios-people"></Icon> -->
          <!-- <a href="/caselist" class="">优质案例</a> -->
           <router-link to="/caselist">优质案例</router-link>
        </Menu-item>
        </Menu-item>
        <Menu-item name="5">
          <!-- <Icon type="ios-people"></Icon> -->
          <!-- <a @click="routeTo('#aboutus')" class="">关于我们</a> -->
          <router-link to="/#aboutus">关于我们</router-link>
        </Menu-item>
      </Menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuTheme: 'light',
    }
  },
  methods:{
    routeTo(ancher) {
      this.$router.push('/'+ancher);
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  padding-top: 90px;
}

.top {
  position: fixed;
  z-index: 3000;
  left: 0;
  top: 0;
  height: 85px;
  width: 100%;
}

.nav {
  width: 1000px;
  margin: 0 auto;
  background: url(./assets/img/logo.png) no-repeat;
  background-position: center left;
  padding-left: 250px;
  height: 80px;
  line-height: 80px;

  a {
    font-weight: bold;
    font-size: 20px;
    // color: #000000;
    color: rgb(61,61,61);
    // background-color: #f6f6f6;
    padding: 0 15px;
    display: inline-block;
    line-height: 80px;
    text-align: center;
  }
  a:hover,
  a.active {
    color: #fff;
    background-color: #2e7acf;
    text-decoration: none;
  }
  .ivu-menu-item-selected a{
    color: #fff;
    background-color: #2e7acf;
    text-decoration: none;
  }
}
</style>
