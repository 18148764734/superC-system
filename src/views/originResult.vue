<template>
    <br><br><br>
    <div class="result" ref="pdf">
        <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item class='item' name="0">
                    <template #title>
                        <div class="title" style="color: black;"> 时空坐标原命局决策系统 &nbsp 先天命运分析报告</div>
                    </template>
                    <div class="layout_title_top">时空坐标原命局决策系统</div>
                    <div class="layout_title">先天命运分析报告</div>

                    <div class="layout" style="margin-top: 35%;margin-bottom: 30%;font-size: 21px;">预测专家: {{
                        store.state.user_name }}</div>
                    <div class="layout_time">
                        公元
                        {{ new Date().getFullYear() }}年
                        {{ new Date().getMonth() }}月
                        {{ new Date().getDate() }}日
                    </div>
                    <br><br>

                </el-collapse-item>
                <el-collapse-item class='item' name="1">

                    <template #title>
                        <div class="title">{{ store.state.result.partOne.title }}</div>
                    </template>
                    <div class="div1">
                        <span class="key">您的姓名：</span>
                        {{ store.state.name }}
                    </div>
                    <div class="div1">
                        <span class="key">
                            您的性别：
                        </span>
                        {{ store.state.sex == 0 ? '女' : '男' }}
                    </div>
                    <div class="div1">
                        <span class="key">
                            您的出生时间：
                        </span>
                        <span class="rili">公历</span>
                        {{ store.state.yangli }}
                    </div>
                    <div class="div1">
                        <span class="rili" style="padding-left:138px ;">农历</span>
                        {{ store.state.yingli }}
                    </div>

                    <div class="div1">
                        <span class="key">
                            您的时间坐标：
                        </span>
                        <span class="bazi_value">
                            {{ store.state.bazi.nianZhu }} &nbsp;&nbsp; {{ store.state.bazi.yueZhu }}&nbsp;&nbsp; {{
                                store.state.bazi.riZhu }}&nbsp;&nbsp; {{ store.state.bazi.shiZhu }}
                        </span>

                    </div>

                    <MyItem v-for="messageList in store.state.result.partOne.messageList" :data="messageList"></MyItem>

                    <div class="shensha_title">{{ store.state.result.partOne.shenSha.title }}</div>
                    <div class="qianyan">{{ store.state.result.partOne.shenSha.qianYan }}</div>
                    <MyItem v-for="messageList in store.state.result.partOne.shenSha.messageList" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第二部分" name="2">
                    <template #title>
                        <div class="title">{{ store.state.result.partTwo.title }}</div>
                    </template>
                    <div class="div1">
                        <span class="key">
                            您的时间坐标：
                        </span>
                        <span class="bazi_value">
                            {{ store.state.bazi.nianZhu }} &nbsp;&nbsp; {{ store.state.bazi.yueZhu }}
                            &nbsp;&nbsp;
                            {{ store.state.bazi.riZhu }}&nbsp;&nbsp; {{ store.state.bazi.shiZhu }}
                        </span>

                    </div>
                    <div class="div1">
                        <span class="key">
                            您“时间坐标”里隐藏的六亲命运信息：
                        </span>
                    </div>
                    <MyItem v-for="messageList in store.state.result.partTwo.messageList" :data="messageList"></MyItem>
                </el-collapse-item>
                <el-collapse-item class='item' title="第三部分" name="3">
                    <template #title>
                        <div class="title">{{ store.state.result.partThree.title }}</div>
                    </template>


                    <MyItem v-for="messageList in store.state.result.partThree.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第四部分" name="4">
                    <template #title>
                        <div class="title">{{ store.state.result.partFour.title }}</div>
                    </template>

                    <div class="qianyan">{{ store.state.result.partFour.qianYan }}</div>
                    <div>{{ store.state.result.partFour.endMessage }}</div>

                    <MyItem v-for="messageList in store.state.result.partFour.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第五部分" name="5">
                    <template #title>
                        <div class="title">{{ store.state.result.partFive.title }}</div>
                    </template>

                    <div class="qianyan">{{ store.state.result.partFive.qianYan }}</div>
                    <MyItem v-for="messageList in store.state.result.partFive.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第六部分" name="6">
                    <template #title>
                        <div class="title">{{ store.state.result.partSix.title }}</div>
                    </template>

                    <div class="qianyan">{{ store.state.result.partSix.qianYan }}</div>
                    <MyItem v-for="messageList in store.state.result.partSix.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第七部分" name="7">
                    <template #title>
                        <div class="title">{{ store.state.result.partSeven.title }}</div>
                    </template>

                    <div class="qianyan">{{ store.state.result.partSeven.qianYan }}</div>
                    <MyItem v-for="messageList in store.state.result.partSeven.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第八部分" name="8">
                    <template #title>
                        <div class="title">{{ store.state.result.partEight.title }}</div>
                    </template>

                    <div class="qianyan">{{ store.state.result.partEight.qianYan }}</div>
                    <MyItem v-for="messageList in store.state.result.partEight.messageList" :data="messageList"></MyItem>
                    <br><br>
                </el-collapse-item>
            </el-collapse>
        

        </div>


        <div class="result-button">
            <button
                class="b1"
                @click="pdfExport"
                >
                生成PDF
            </button>
        </div>
        <!-- <div  @click="pdfExport(this)"> 
            这是待转换的页面，点击 
            <button >
                导出
            </button> 
            点击导出PDF
        </div> -->
    </div>
</template> 

<script setup>
import { computed, ref, watch, reactive } from 'vue'
import MyItem from './MyItem.vue'
import { toRefs } from 'vue'
import store from "../store/index.js";
import {downloadPDF} from "../util/pdf.js"
const pdfExport = (this1) => {
    downloadPDF(this1.$refs.pdf)
}
let date = new Date(); //Date() 方法可返回当天的日期和时间
const activeNames = ref(['0','1','2','3','4','5','6','7','8','9'])
const handleChange = (val) => {
    console.log(val)
}

const props = defineProps({
    //子组件接收父组件传递过来的值
    info: Object,
})
//使用父组件传递过来的值
const { info } = toRefs(props)
const info2 = ref(store.state.result)

</script>

<style lang="scss" scoped>
@import '../assets/font/font.css';

.layout {
    text-align: center;
    font-family: 'title';
    color: black;
}
.result-button {
    text-align: center;
    font-family: 'title';
    color: black;
    width: 100%;
    margin-top: 20px;
}

.layout_time {
    text-align: center;
    font-weight: 900px;
    font-family: 'title';
    color: black;
    padding-bottom: 20%;
}

.layout_title_top {
    text-align: center;
    font-weight: 1500px;
    font-size: 24px;
    padding-top: 30%;
    font-family: 'title';
    color: black;

}

.layout_title {
    text-align: center;
    font-size: 48px;
    padding-top: 20px;
    font-family: 'heavy';
    color: black;
}

.key {
    font-size: 19px;
    font-weight: 900;
    color: black;
}

.bazi_value {
    font-size: 24px;
    color: #ed7d31;
}

.rili {
    color: #00b0f0;
    font-size: 20px;
    font-weight: 600;

}

.result {
    font-size: 18px;
    line-height: 30px;
    width: 70%;
    @media only screen and (max-width: 1030px) {
        width: 480px;
    }
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 50px;
    margin: auto;
    padding-bottom: 5%;
    background: rgb(255, 255, 255);
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(250, 250, 250) 0.2em solid;
    font-family: 'regular';
}

.result:hover {
    border: #006fff 0.2em solid;
}

.title {
    width: 100%;
    font-family: 'title';
    font-size: 25px;
    color: #5b9bd5;
    text-align: center;
    margin-top: 0px;
}



.shensha_title {
    font-size: 25px;
    font-family: 'title';
    color: black;
    margin-top: 20px;
}

.qianyan {
    font-size: 15px;
    color: #9ba399;
    padding-bottom: 10px;
}

.div1 {
    font-size: 18px;
}
.item{
    margin-top: 30px;
}
</style>