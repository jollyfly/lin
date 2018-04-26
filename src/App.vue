<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {Cell, CellGroup, Icon, NavBar, Tabbar, TabbarItem} from 'vant';

  export default {
    name: 'App',
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [NavBar.name]: NavBar,
      [TabbarItem.name]:TabbarItem,
      [Tabbar.name]:Tabbar
    },

    methods: {


    },

  };
</script>

<style>
  body {
    background-color: #f8f8f8;
  }

</style>
