<template>
    <div id="aaa">
        <!--style="height: 1000px;border: 1px solid #eee"-->
        <el-container style="height: 1500px;border: 1px solid #eee">
            <el-aside width="150px" style="border: 1px #ccc solid">
                <el-menu :default-openeds="['1', '3']" @open="open" @close="close" mode="vertical" background-color="#eee" text-color="#303133">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>导航一
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="el-icon-message"></i>分组1
                            </template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>导航二
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="el-icon-message"></i>分组2
                            </template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-message"></i>导航三
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="el-icon-message"></i>分组3
                            </template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="4" @click="click1">导航四</el-menu-item>
                    <el-menu-item index="5">导航五</el-menu-item>
                    <el-menu-item index="6">导航六</el-menu-item>
                    <el-menu-item index="7">导航七</el-menu-item>
                </el-menu>
            </el-aside>
            <!--右边布局-->
            <el-container>
                <!--右-上-->
                <el-header style="text-align: right;font-size: 12px;position:relative;">
                    <!--clearable:可清空-->
                    <el-input v-model="input" placeholder="请输入内容" style="width: 200px;position: absolute;left: 20px" clearable></el-input>
                    <el-input v-model="input" placeholder="请输入内容" style="width: 200px;position: absolute;left: 240px" :disabled="true"></el-input>
                    <!--suffix-icon:后缀icom-->
                    <el-input v-model="input" placeholder="请输入日期" style="width: 200px;position: absolute;left: 460px" suffix-icon="el-icon-date"></el-input>
                    <el-input v-model="input" placeholder="请输入日期" style="width: 200px;position: absolute;left: 680px" prefix-icon="el-icon-search"></el-input>
                    <!--solt方式-->
                    <el-input v-model="input" placeholder="请输入日期" style="width: 200px;position: absolute;left: 900px">
                        <i slot="suffix" class="el-icon-date hello" @click="ccc"></i>
                    </el-input>
                    <!--输入带建议-->
                    <!--@select 选择的时候出发的事件，item参数代表选中的行-->
                    <el-autocomplete style="position: absolute;left: 1120px; width: 200px" placeholder="输入带建议" clearable
                                     :fetch-suggestions="querySelect"  v-model="content1" @select="select"></el-autocomplete>
                    <!--trigger="click"：点击激活  默认是hover激活-->
                    <el-dropdown trigger="click">
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <span>龚南熊</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :class="{kkk:true}">查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>

                    </el-dropdown>

                </el-header>
                <!--右-body-->
                <el-main >
                    <tableT></tableT>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import tableT from "./components/tableT"
    export default {
        name: "ap",
        data() {
            return {
                result: [{id: 1, name: "zhangsan", age: 18}, {id: 1, name: "zhangsan", age: 18}, {
                    id: 1,
                    name: "zhangsan",
                    age: 18
                }, {id: 1, name: "zhangsan", age: 18}, {id: 1, name: "zhangsan", age: 18}, {
                    id: 1,
                    name: "zhangsan",
                    age: 18
                }, {id: 1, name: "zhangsan", age: 18},],
                input:"kkk",
                results:[],
                content1:"",
            }
        },
        methods: {
            open: function () {
                console.log("open")
            },
            close: function () {
                console.log("close")
            },
            click1:function () {
                console.log("click1")
            },
            ccc:function () {
                console.log(this.input)
            },
            querySelect:function (queryString,cb) {
                var likes=[];
                if(queryString){
                    likes=this.results;
                }
                else {
                    for (let i = 0; i < this.results; i++) {
                        if(this.results[i].toLocaleString.indexOf(queryString)){

                        }
                    }
                }



                cb(likes)
            },
            select:function(item){
                console.log("item")
                console.log(item)
            },
            loadAll(){
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ]
            }
        },
        components:{
            tableT
        },
        mounted() {
            this.results=this.loadAll()
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
    .kkk:hover{
        color: red;
    }
    .hello:hover{
        color: royalblue;
    }
</style>