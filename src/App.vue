<!--<template>-->
    <!--<div id="app">-->
        <!--&lt;!&ndash;<img alt="Vue logo" src="./assets/logo.png">&ndash;&gt;-->
        <!--&lt;!&ndash;<HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
        <!--<router-link to="/home">主页</router-link>-->
        <!--<router-link to="/news">新闻</router-link>-->
        <!--<router-view></router-view>-->
        <!--<button @click="send">发送ajax请求</button>-->
        <!--&lt;!&ndash;自定义的按钮的事件&ndash;&gt;-->
        <!--<mybutton @click.native="send"></mybutton>-->
        <!--<br>-->
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="danger">危险按钮</el-button>-->
        <!--<el-button type="info">信息按钮</el-button>-->
        <!--<el-button type="success">成功按钮</el-button>-->
        <!--<el-button type="warning">警告按钮</el-button>-->
        <!--<br>-->
        <!--<el-button round>圆角</el-button>-->
        <!--<el-button round type="primary">主要按钮</el-button>-->
        <!--<el-button round type="danger">危险按钮</el-button>-->
        <!--<el-button round type="info">信息按钮</el-button>-->
        <!--<el-button round type="success">成功按钮</el-button>-->
        <!--<el-button round type="warning">警告按钮</el-button>-->
        <!--<br>-->
        <!--<el-button plain size="medium">朴素按钮</el-button>-->
        <!--<el-button plain type="primary" size="mini">主要按钮</el-button>-->
        <!--<el-button plain type="danger" size="small">危险按钮</el-button>-->
        <!--<el-button plain type="info">信息按钮</el-button>-->
        <!--<el-button plain type="success">成功按钮</el-button>-->
        <!--<el-button plain type="warning">警告按钮</el-button>-->
        <!--<br>-->
        <!--<el-button icon="el-icon-search"></el-button>-->
        <!--<el-button type="primary" icon="el-icon-edit"></el-button>-->
        <!--<el-button type="info" icon="el-icon-check"></el-button>-->
        <!--<el-button type="success" icon="el-icon-message"></el-button>-->
        <!--<el-button type="warning" icon="el-icon-delete">垃圾箱</el-button>-->
        <!--<el-button type="danger" icon="el-icon-star-off"></el-button>-->
        <!--<el-button type="primary" icon="el-icon-star-on"></el-button>-->
        <!--<br>-->
        <!--<el-button type="primary" disabled>buttonCont</el-button>-->
        <!--<br>-->
        <!--<br>-->
        <!--<el-button-group>-->
            <!--<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>-->
            <!--<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
            <!--&lt;!&ndash;<el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>&ndash;&gt;-->
        <!--</el-button-group>-->
        <!--<br>-->
        <!--<el-button type="primary" :loading="true">加载中</el-button>-->
        <!--<el-button type="primary">加载中<i class="el-icon-loading"></i></el-button>-->
        <!--<br>-->
        <!--<br>-->
        <!--<el-button type="text">文字按钮</el-button>-->

    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import Mybutton from './components/myButton'-->

    <!--export default {-->
        <!--name: "app",-->
        <!--data: function () {-->
            <!--return {-->
                <!--msg: "welcome gongnanxiong"-->
            <!--}-->
        <!--},-->
        <!--mounted() {-->
            <!--console.log("route:" + this.$route)-->
        <!--},-->
        <!--watch: {-->
            <!--$route: function (newValue, oldValue) {-->
                <!--console.log(newValue)-->
                <!--console.log(oldValue)-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--send: function () {-->
                <!--this.axios.get("https://api.github.com/users/tangyang8942").then(function (response) {-->
                    <!--console.log("res" + response)-->

                <!--}).then(function (erro) {-->
                    <!--console.log("erro" + erro)-->
                <!--})-->
            <!--}-->
        <!--},-->
        <!--components: {-->
            <!--Mybutton-->
        <!--}-->
        <!--// components: {-->
        <!--//     vueRouter-->
        <!--//-->
        <!--// }-->
    <!--}-->
<!--</script>-->

<!--<style>-->
    <!--#app {-->
        <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
        <!-- -webkit-font-smoothing: antialiased;-->
        <!-- -moz-osx-font-smoothing: grayscale;-->
        <!--text-align: center;-->
        <!--color: #2c3e50;-->
        <!--margin-top: 60px;-->
    <!--}-->
<!--</style>-->
