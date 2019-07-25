<template>
    <div>
        <el-carousel :interval="4000" type="card" height="300px" style="">
            <el-carousel-item v-for="item in books" :key="item">
                <img :src="item" alt="" style="height: 100%;width: 100%">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "photo",
        data() {
            return {
                books: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949578&di=1e718e70da4578aa572b3bfbc8a631b4&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F54%2F93%2F16pic_5493004_b.jpg'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949577&di=801bb3e3299f14bc8883bd8817c4d781&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F51%2F76%2F16pic_5176235_b.jpg'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949577&di=b9eb07b1a0445058f7cd5adb0fd540a1&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F53%2F35%2F16pic_5335369_b.jpg'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949577&di=08ddb5fa78e16e2a18282ee1df4d6217&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F41%2F83%2F95%2F5667ee70b667c.jpg'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949575&di=eac625c20ccc805a1799d930d135868d&imgtype=0&src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2Ff8f05342c765bdca7fd92ecf302c6a57.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949575&di=83520168628d9e27ff325b389663d07e&imgtype=0&src=http%3A%2F%2Fpic112.nipic.com%2Ffile%2F20161014%2F23192188_134555221032_2.jpg'
                    , 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563377949575&di=8437825454b309af73535a34a975bc54&imgtype=0&src=http%3A%2F%2Fpic106.nipic.com%2Ffile%2F20160814%2F21721949_124354214445_2.jpg'],
            }
        }

    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>