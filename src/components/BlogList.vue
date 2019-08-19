<template>
    <div>
        <br>
        <el-row>
            <el-col :span="4">
                <!--@keydown.enter=seach:键盘事件，按下enter键的时候开始搜索-->
                <!--element-ui自身封装了一层div在input标签外面，把原来的事件隐藏了 所以要加上.native才能出发键盘事件-->
                <el-input placeholder="目前只支持书名搜索" v-model="keyword" clearable @keydown.enter.native="seach"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="success" icon="el-icon-search" style="margin-left: 3px" @click="seach">搜索</el-button>
                <!--<router-link to="/addblog">-->
                <!--<el-button type="success" icon="el-icon-circle-plus-outline" style="margin-left: 3px">新增</el-button>-->
                <!--</router-link>-->
                <el-button type="success" icon="el-icon-circle-plus-outline" style="margin-left: 3px" @click="addBlog">
                    新增
                </el-button>


            </el-col>
        </el-row>
        <!--table-->
        <el-table v-loading="loading" style="width: 100%" :border="true" :stripe="true"
                  :data="tableData.results">
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="title" label="书名"></el-table-column>
            <el-table-column prop="url" label="购买链接">
                <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="table_a">{{scope.row.url}}</a>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="出版日期"></el-table-column>
            <el-table-column prop="auth" label="作者"></el-table-column>
            <el-table-column prop="create_time" label="上架时间"></el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="total,prev, pager, next, jumper"
                :total="totalCount" style="margin-top: 20px;position: absolute;right: 3px">
        </el-pagination>
        <!-- dialog+form:添加   close-on-click-modal:是否可以通过点击 modal 关闭 Dialog   close-on-press-escape：是否可以通过按下 ESC 关闭 Dialog   show-close：是否显示关闭按钮-->
        <el-dialog title="添加图书" :visible.sync="dialogFormVisible" width="350px" :center="true"
                   :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false"
                   @close="close_add_dialog">
            <!--ruleForm-->
            <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm">
                <el-form-item label="著作名称" prop="title">
                    <el-input v-model="ruleForm.title" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="购买链接" prop="url">
                    <el-input v-model="ruleForm.url" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-date-picker
                            v-model="ruleForm.date"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择日期" style="width: 300px">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="作者" prop="auth">
                    <el-input v-model="ruleForm.auth" style="width: 300px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="blog_submit('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>

        <!--dialog+form:更新-->
        <el-dialog title="更新链接" :visible.sync="dialogFormVisible1" width="350px" :center="true"
                   :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" @close="close_add_dialog">
            <!--ruleForm-->
            <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm">
                <el-form-item label="著作名称" prop="title">
                    <el-input v-model="ruleForm.title" style="width: 300px" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="链接" prop="url">
                    <el-input v-model="ruleForm.url" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-date-picker
                            v-model="ruleForm.date"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择日期" style="width: 300px" :disabled="true">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="作者" prop="auth">
                    <el-input v-model="ruleForm.auth" style="width: 300px" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <!--dialogFormVisible1 = false-->
                <el-button @click="dialogFormVisible1=false">取 消</el-button>
                <el-button type="primary" @click="submit_update('ruleForm',form_update.index,form_update.row)">更 新
                </el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                //搜索的关键字
                keyword: "",
                loading: false,
                // 列表数据绑定
                tableData: [],
                //模态对话框打开状态 true;false
                dialogFormVisible: false,
                dialogFormVisible1: false,
                //el-form 对其方式 top right left
                labelPosition: "top",
                //添加内容的时候绑定的数据
                ruleForm: {
                    title: '',
                    url: '',
                    date: "",
                    auth: '',
                },
                //绑定行的数据，更新的时候用
                form_update: {
                    index: "",
                    row: "",
                },
                //el-form的校验规则
                rules: {
                    title: [{required: true, message: '请输入名称', trigger: 'blur'}, {
                        min: 3,
                        max: 15,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }],
                    url: [{required: true, message: '请输入链接', trigger: 'blur'}],
                    date: [{required: true, message: '请输入日期', trigger: 'blur'}],
                    auth: [{required: true, message: '作者', trigger: 'blur'}],

                },
                currentPage: 1
            }
        },
        computed: {
            totalCount: function () {
                return this.tableData.count
            }
        },
        methods: {

            //格式化时间
            formatterdate: function (d) {
                return this.$moment(d).format("YYYY-MM-DD");
            },
            //改变当前页码
            handleCurrentChange: function (val) {
                console.log(val)
                this.flushData(val)
                this.currentPage = val
            },
            //搜索按钮
            seach: function () {
                if (this.keyword === "") {
                    this.flushData(this.currentPage)
                } else {
                    console.log(3333333333)
                    this.loading = true
                    this.$http.post("http://127.0.0.1:8888/vueapi/blogseach", {keyword: this.keyword}).then(function (response) {
                        console.log(response)
                        if (response.status === 200) {
                            if (response.data.code === 1000) {
                                this.tableData = response.data.data
                                this.currentPage = 1
                                console.log(this.tableData)
                                for (let i = 0; i < this.tableData.results.length; i++) {
                                    if (this.tableData.results[i].create_time != null) {
                                        //python 默认返回的时间字符串格式为2019-07-31T06:32:19Z   前端处理字符串：去掉T 和 Z
                                        this.tableData.results[i].create_time = this.tableData.results[i].create_time.replace("T", " ").replace("Z", "")
                                        this.loading = false
                                    }
                                }

                            } else {
                                this.$message("请求数据失败")
                                this.loading = false
                            }

                        } else {
                            this.loading = false
                        }
                    })

                }
            },
            //关闭添加dialog时候的回调
            close_add_dialog: function () {
                this.ruleForm = {}
            },
            //编辑按钮,把index, row的值赋值给form_update
            handleEdit: function (index, row) {
                //打开dialog编辑
                this.dialogFormVisible1 = true
                //把当前行的值都赋值给form 使其默认展示
                this.form_update.index = index
                this.form_update.row = row
                // this.ruleForm = Object.assign(true, {}, row)
                // 把对象row的值赋值（拷贝）给ruleForm 使其让点开编辑按钮的时候当前行的值已经在el-form中,这里不让用=，因为用=直接引用了相同的内存地址导致在dalog中修改的值会带动table上的值一起改动
                this.ruleForm = JSON.parse(JSON.stringify(row))

            },
            //删除按钮
            handleDelete: function (row) {
                this.$confirm('是否删除（下架这本书）?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.get("http://127.0.0.1:8888/vueapi/blogdelete", {params: {id: row.id}}).then(function (response) {
                        console.log(response)
                        if (response.status === 200) {
                            if (response.data.code === 1000) {
                                //删除成功后刷新列表
                                this.flushData(this.currentPage)
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });

                            } else {
                                this.$message(response.data.message)
                            }

                        } else {
                            this.$message("请求失败")
                        }
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            //新增按钮，弹出模态对话框添加内容
            addBlog: function () {
                this.dialogFormVisible = true
            },
            //刷新列表数据
            flushData: function (page) {
                this.loading = true
                //加载数据操作
                this.$http.get("http://127.0.0.1:8888/vueapi/bloglist?page=" + page).then(function (response) {
                    console.log(response)
                    if (response.status === 200) {
                        if (response.data.code === 1000) {
                            this.tableData = response.data.data
                            console.log(this.tableData)
                            for (let i = 0; i < this.tableData.results.length; i++) {
                                if (this.tableData.results[i].create_time != null) {
                                    //python 默认返回的时间字符串格式为2019-07-31T06:32:19Z   前端处理字符串：去掉T 和 Z
                                    this.tableData.results[i].create_time = this.tableData.results[i].create_time.replace("T", " ").replace("Z", "")
                                    this.loading = false
                                }
                            }

                        } else {
                            this.$message("请求数据失败")
                            this.loading = false
                        }

                    } else {
                        this.loading = false
                    }
                })

            },
            //forname:refs的值  提交数据的校验一些规则，如果验证通过调用添加blog的接口
            blog_submit: function (forname) {
                this.$refs[forname].validate((valid) => {
                    if (valid) {
                        //掉接口添加，添加完关闭dialog，自动更新列表
                        this.$http.get("http://127.0.0.1:8888/vueapi/blogadd", {params: this.ruleForm}).then(function (response) {
                            console.log(this.ruleForm)
                            console.log(response)
                            if (response.status === 200) {
                                if (response.data.code === 1000) {
                                    // 添加成功
                                    this.$message('添加成功')
                                    this.dialogFormVisible = false
                                    this.ruleForm = {}
                                    this.flushData(this.currentPage)

                                } else {
                                    this.$message(response.data.message)
                                    this.ruleForm = {}
                                }

                            } else {
                                this.$message("服务器开小差了")
                                this.ruleForm = {}
                            }

                        })
                        this.dialogFormVisible = false
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //更新数据 需要传入行的数据  传入r（row对象）目的是拿到当前著作在数据库中的id
            submit_update: function (forname, i, r) {
                this.$refs[forname].validate((valid) => {
                    if (valid) {
                        //掉接口添加，添加完关闭dialog，自动更新列表
                        this.ruleForm.id = r.id //服务端更新的时候是根据id进行更新的
                        this.$http.get("http://127.0.0.1:8888/vueapi/blogupdate", {params: this.ruleForm}).then(function (response) {
                            console.log(response)
                            if (response.status === 200) {
                                if (response.data.code === 1000) {
                                    // 更新成功
                                    this.$message('更新成功')
                                    this.dialogFormVisible1 = false
                                    this.ruleForm = {}
                                    this.flushData(this.currentPage)

                                } else {
                                    this.ruleForm = {}
                                    this.$message(response.data.message)
                                }

                            } else {
                                this.ruleForm = {}
                                this.$message("服务器开小差了")
                            }

                        })
                        this.dialogFormVisible = false
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
        ,

        // 创建Vue的时候自动更新列表
        mounted() {
            this.flushData(this.currentPage)
        }
    }
</script>

<style scoped>
    .table_a {
        text-decoration: none;
    }
</style>