<template>
    <div>
        <br>
        <el-row>
            <el-col :span="4">
                <el-input placeholder="目前只支持书名搜索"></el-input>
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
        <el-table :data="tableData" style="width: 100%" :border="true" :stripe="true" :height="1000"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
                  fit>
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column prop="title" label="书名"></el-table-column>
            <el-table-column prop="url" label="链接">
                <template slot-scope="scope">
                    <a :href="scope.row.url" target="_blank" class="table_a">{{scope.row.url}}</a>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="auth" label="作者"></el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- dialog+form:添加-->
        <el-dialog title="添加著作" :visible.sync="dialogFormVisible" width="350px" :center="true">
            <!--ruleForm-->
            <el-form :model="form" :label-position="labelPosition" :rules="rules" ref="ruleForm">
                <el-form-item label="著作名称" prop="title">
                    <el-input v-model="form.title" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="链接" prop="url">
                    <el-input v-model="form.url" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-date-picker
                            v-model="form.date"
                            type="date"
                            placeholder="选择日期" style="width: 300px">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="作者" prop="auth">
                    <el-input v-model="form.auth" style="width: 300px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="blog_submit('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>

        <!--dialog+form:更新-->
        <el-dialog title="更新著作" :visible.sync="dialogFormVisible1" width="350px" :center="true">
            <!--ruleForm-->
            <el-form :model="form" :label-position="labelPosition" :rules="rules" ref="ruleForm">
                <el-form-item label="著作名称" prop="title">
                    <el-input v-model="form.title" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="链接" prop="url">
                    <el-input v-model="form.url" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-date-picker
                            v-model="form.date"
                            type="date"
                            placeholder="选择日期" style="width: 300px">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="作者" prop="auth">
                    <el-input v-model="form.auth" style="width: 300px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
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
                // 列表数据绑定
                tableData: [],
                //模态对话框打开状态 true;false
                dialogFormVisible: false,
                dialogFormVisible1: false,
                //el-form 对其方式 top right left
                labelPosition: "top",
                //添加内容的时候绑定的数据
                form: {
                    id: "",
                    title: '',
                    url: '',
                    date: this.formatterdate(this),
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
            }
        },

        methods: {
            //格式化时间
            formatterdate: function (d) {
                return this.$moment(d).format("YYYY-MM-DD HH:mm:ss");
            },
            //搜索按钮
            seach: function () {

            },
            //编辑按钮,把index, row的值赋值给form_update
            handleEdit: function (index, row) {
                console.log(index)
                console.log(row)
                //打开dialog编辑
                this.dialogFormVisible1 = true
                //把当前行的值都赋值给form 使其默认展示
                this.form_update.index = index,
                    this.form_update.row = row
                this.form = row

            },
            //删除按钮
            handleDelete: function () {

            },
            //新增按钮，弹出模态对话框添加内容
            addBlog: function () {
                this.dialogFormVisible = true
            },
            //刷新列表数据
            flushData: function () {
                this.$http.get("http://127.0.0.1:8888/vueapi/bloglist").then(function (response) {
                    console.log(response)
                    if (response.status === 200) {
                        if (response.data.code === 1000) {
                            this.tableData = response.data.data
                        } else {
                            this.$message("请求数据失败")
                        }

                    } else {

                    }
                })
            },
            //forname:refs的值  提交数据的校验一些规则，如果验证通过调用添加blog的接口
            blog_submit: function (forname) {
                this.$refs[forname].validate((valid) => {
                    if (valid) {
                        //掉接口添加，添加完关闭dialog，自动更新列表
                        this.$http.get("http://127.0.0.1:8888/vueapi/blogadd", {params: this.form}).then(function (response) {
                            console.log(this.form)
                            console.log(response)
                            if (response.status === 200) {
                                if (response.data.code === 1000) {
                                    // 添加成功
                                    this.$message('添加成功')
                                    this.dialogFormVisible = false
                                    this.form={}
                                    this.flushData()

                                } else {
                                    this.$message(response.data.message)
                                }

                            } else {
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
            //更新数据 需要传入行的数据
            submit_update: function (forname, i, r) {
                this.$refs[forname].validate((valid) => {
                    if (valid) {
                        //掉接口添加，添加完关闭dialog，自动更新列表
                        this.form.id = r.id
                        this.$http.get("http://127.0.0.1:8888/vueapi/blogupdate", {params: this.form}).then(function (response) {
                            console.log('aaa')
                            console.log(this.form)
                            console.log(response)
                            if (response.status === 200) {
                                if (response.data.code === 1000) {
                                    // 更新成功
                                    this.$message('更新成功')
                                    this.dialogFormVisible1 = false
                                    this.flushData()

                                } else {
                                    this.$message(response.data.message)
                                }

                            } else {
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
        },

        // 创建Vue的时候自动更新列表
        mounted() {
            this.flushData()
        }
    }
</script>

<style scoped>
    .table_a {
        text-decoration: none;
    }
</style>