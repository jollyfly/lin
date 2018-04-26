<template>
  <div>
    <van-nav-bar :title=appData.title fixed></van-nav-bar>
    <div class="home-index-body">
      <img src="../../static/119.jpg"/>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="like-o">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>留言</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">动态</van-tabbar-item>
      <van-tabbar-item icon="more-o">更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Icon, Tabbar, TabbarItem, NavBar} from 'vant';

  export default {
    name: 'Home',
    components: {
      [Icon.name]: Icon,
      [TabbarItem.name]: TabbarItem,
      [Tabbar.name]: Tabbar,
      [NavBar.name]: NavBar
    },
    methods: {},
    data() {
      return {
        active:0,
        appData: {
          title: "首页"
        }
      }
    }
  }

</script>

<style>
  .home-index-body img{
    width: 100%;
    margin-top: 45px;
  }
</style>
