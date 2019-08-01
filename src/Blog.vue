<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" router>
            <el-menu-item index="/blog">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="/">选项1</el-menu-item>
                <el-menu-item index="/loading">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">关于我们</a></el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data(){
            return {
                activeIndex:"1"
            }
        }

    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>