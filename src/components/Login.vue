<template>
  <div>
    <van-nav-bar title="登陆"></van-nav-bar>
    <van-row>
      <van-cell-group class="cc-login-cell-group">
        <van-field label="用户名" placeholder="请输入用户名"
                   required/>
        <van-field type="password" label="密码" placeholder="请输入密码" required/>
      </van-cell-group>
    </van-row>

    <van-row>
      <van-col span="16" offset="4">
        <van-button size="large" type="primary" @click="login">登陆</van-button>
      </van-col>
    </van-row>

  </div>
</template>

<script>
  import {Field, CellGroup, NavBar, Row, Col, Button,Dialog} from 'vant'

  export default {
    name: "Login",
    components: {
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Row.name]: Row,
      [Col.name]: Col,
      [Dialog.name]:Dialog

    },
    userVO() {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
      login(){
        Dialog.alert({
          title:'提示',
          message:'请稍后再试'
        }).then(()=>{
          this.$router.push({
            name:"Home"
          })
        })
      }
    }
  }
</script>

<style>
  .cc-login-cell-group{
    margin: 30px 5px;
  }
</style>
