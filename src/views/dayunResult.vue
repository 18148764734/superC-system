<template>
    <br><br><br>
    <div class="dayunresult" :hidden="store.state.pdf" id="dayunresultPage1">
        <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item class='item' name="0">
                    <template #title>
                        <div class="title" style="color: black;"> {{ store.state.dayunresult.partOne.bigTitle }}</div>
                    </template>


                    <div class="layout_title_top">时空坐标大运决策系统</div>
                    <div class="layout_title">“10年周期命运变化” <br> 预测报告</div>

                    <div class="layout_creator">预测专家: {{
                        store.state.user_name }}</div>
                    <div class="layout_time">
                        公元
                        {{ new Date().getFullYear() + "年" + new Date().getMonth() + "月" + new Date().getDate() + "日" }}
                    </div>
                    <br><br>

                </el-collapse-item>
                <el-collapse-item class='item' name="1">


                    <br><br>
                    <template #title>
                        <div class="title">
                            <div class="title">{{ store.state.dayunresult.partOne.bigTitle1 }}&nbsp {{
                                store.state.dayunresult.partOne.b2Title }}</div>
                        </div>
                    </template>
                    <div class="title">基础信息</div>

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
                    <div class="div1">
                        <span class="key">
                            您的大运坐标：
                        </span>
                        <span class="bazi_value">
                            {{ store.state.dayunTime }}
                        </span>

                    </div>


                    <div class="qianyan">{{ store.state.dayunresult.partOne.preFace }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partOne.tip }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partOne.endMessage }}</div>
                    <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList1" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList2" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList3" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList4" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第二部分" name="2">
                    <template #title>
                        <div class="title">{{ store.state.dayunresult.partTwo.bigTitle }}</div>
                    </template>


                    <!-- <div class="div1">
                        <span class="key">
                            您的时间坐标：
                        </span>
                        <span class="bazi_value">
                            {{ store.state.bazi.nianZhu }} &nbsp;&nbsp; {{ store.state.bazi.yueZhu }}
                            &nbsp;&nbsp;
                            {{ store.state.bazi.riZhu }}&nbsp;&nbsp; {{ store.state.bazi.shiZhu }}
                        </span>

                    </div> -->
                    <div class="div1">
                    </div>
                    <div class="title">{{ store.state.dayunresult.partTwo.bigTitle1 }}</div>
                    <div class="title">{{ store.state.dayunresult.partTwo.b2Title }}</div>
                    <div class="qianyan"> {{ store.state.dayunresult.partTwo.preFace }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partTwo.tip }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partTwo.endMessage }}</div>
                    <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList1" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList2" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList3" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList4" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第三部分" name="3">
                    <template #title>
                        <div class="title">{{ store.state.dayunresult.partThree.bigTitle }}</div>
                    </template>
                    <!-- <div class="title">{{ store.state.dayunresult.partThree.bigTitle }}</div> -->
                    <div class="title">{{ store.state.dayunresult.partThree.bigTitle1 }}</div>
                    <div class="title">{{ store.state.dayunresult.partThree.b2Title }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partThree.preFace }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partThree.tip }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partThree.endMessage }}</div>
                    <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList1" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList2" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList3" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList4" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第四部分" name="4">
                    <template #title>
                        <div class="title">{{ store.state.dayunresult.partFour.bigTitle }}</div>
                    </template>
                    <div class="title">{{ store.state.dayunresult.partFour.bigTitle1 }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFour.b2Title }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFour.preFace }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFour.tip }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFour.endMessage }}</div>
                    <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList1" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList2" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList3" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList4" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>
                <el-collapse-item class='item' title="第五部分" name="5">
                    <template #title>
                        <div class="title">{{ store.state.dayunresult.partFive.bigTitle }}</div>
                    </template>
                    <div class="title">{{ store.state.dayunresult.partFive.title }}</div>
                    <div class="title">{{ store.state.dayunresult.partFive.bigTitle1 }}</div>
                    <div class="title">{{ store.state.dayunresult.partFive.b2Title }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFive.preFace }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFive.tip }}</div>
                    <div class="qianyan">{{ store.state.dayunresult.partFive.endMessage }}</div>
                    <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList1" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList2" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList3" :data="messageList">
                    </MyItem>
                    <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList4" :data="messageList">
                    </MyItem>
                    <br><br>
                </el-collapse-item>

            </el-collapse>
            <div class="dayunresult-button">
                <button class="b1" @click="pdfExport()">
                    导出
                </button>
            </div>
        </div>
    </div>
    <div class="dayunresult" :hidden="!store.state.pdf" id="dayunresultPage2">

        <div class="layout_title_top">时空坐标大运决策系统</div>
        <div class="layout_title">“10年周期命运变化” <br><br> 预测报告</div>
        <div class="layout_creator">预测专家: {{
            store.state.user_name }}</div>
        <div class="layout_time">
            公元
            {{ new Date().getFullYear() + "年" + new Date().getMonth() + "月" + new Date().getDate() + "日" }}

        </div>
        <br><br><br><br>
        <div class="title">基础信息</div>

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
        <div class="div1">
            <span class="key">
                您的大运坐标：
            </span>
            <span class="bazi_value">
                {{ store.state.dayunTime }}
            </span>

        </div>

        <br><br>

        <div class="title">{{ store.state.dayunresult.partOne.bigTitle1 }}</div>
        <div class="title">{{ store.state.dayunresult.partOne.b2Title }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partOne.preFace }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partOne.tip }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partOne.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList4" :data="messageList"></MyItem>

        <br><br>

        <div class="title">{{ store.state.dayunresult.partTwo.title }}</div>

        <!-- <div class="div1">
            <span class="key">
                您的时间坐标：
            </span>
            <span class="bazi_value">
                {{ store.state.bazi.nianZhu }} &nbsp;&nbsp; {{ store.state.bazi.yueZhu }}
                &nbsp;&nbsp;
                {{ store.state.bazi.riZhu }}&nbsp;&nbsp; {{ store.state.bazi.shiZhu }}
            </span>

        </div> -->
        <!-- <div class="div1">
            <span class="key">
                您“时间坐标”里隐藏的六亲命运信息：
            </span>
        </div> -->
        <div class="title">{{ store.state.dayunresult.partTwo.bigTitle }}</div>
        <div class="title">{{ store.state.dayunresult.partTwo.bigTitle1 }}</div>
        <div class="title">{{ store.state.dayunresult.partTwo.b2Title }}</div>
        <div class="qianyan"> {{ store.state.dayunresult.partTwo.preFace }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partTwo.tip }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partTwo.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList4" :data="messageList"></MyItem>
        <br><br>

        <div class="title">{{ store.state.dayunresult.partThree.title }}</div>


        <div class="title">{{ store.state.dayunresult.partThree.bigTitle }}</div>
        <div class="title">{{ store.state.dayunresult.partThree.bigTitle1 }}</div>
        <div class="title">{{ store.state.dayunresult.partThree.b2Title }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partThree.preFace }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partThree.tip }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partThree.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList4" :data="messageList"></MyItem>

        <br><br>

        <br><br>

        <div class="title">{{ store.state.dayunresult.partFour.title }}</div>


        <div class="title">{{ store.state.dayunresult.partFour.bigTitle }}</div>
        <div class="title">{{ store.state.dayunresult.partFour.bigTitle1 }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFour.b2Title }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFour.preFace }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFour.tip }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFour.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList4" :data="messageList"></MyItem>
        <br><br>

        <br><br>

        <div class="title">{{ store.state.dayunresult.partFive.title }}</div>
        <div class="title">{{ store.state.dayunresult.partFive.bigTitle }}</div>
        <div class="title">{{ store.state.dayunresult.partFive.bigTitle1 }}</div>
        <div class="title">{{ store.state.dayunresult.partFive.b2Title }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFive.preFace }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFive.tip }}</div>
        <div class="qianyan">{{ store.state.dayunresult.partFive.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList4" :data="messageList"></MyItem>
        <br><br>
        <br><br>

    </div>
    
</template>

<script  setup lang="ts">
import { computed, ref, watch, reactive } from 'vue'
import MyItem from './MyItem.vue'
import { toRefs } from 'vue'
import store from "../store/index.js";
import { getmark } from "../util/watermark";
import { onMounted } from 'vue';

const { watermark } = getmark();
const page = ref(1);
onMounted(() => {

    store.state.watermark = false;
    watermark( "时 空 坐 标 大 运 决 策 系 统 出 品" ,"dayunresultPage1",1 );//水印名
    watermark( "时 空 坐 标 大 运 决 策 系 统 出 品" ,"dayunresultPage2",-1 );//水印名

});
const pdfExport = () => {
    store.state.pdf = true;
    setTimeout(() => {
        store.state.pdf = false;
         window.print()
    }, 500); // 设置0.5秒的延迟

}
let date = new Date(); //Date() 方法可返回当天的日期和时间
const activeNames = ref(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
const handleChange = (val) => {
    console.log(val)
}

const props = defineProps({
    //子组件接收父组件传递过来的值
    info: Object,
})
//使用父组件传递过来的值
const { info } = toRefs(props)
const info2 = ref(store.state.dayunresult)

</script>

<style lang="scss" scoped>
@import '../assets/font/font.css';
@import '../assets/font/font.css';
.b1 {
    position: relative;
    display: inline-block;
    margin:0 auto;/*水平居中*/
    padding: 15px 30px;
    text-align: center;
    font-family: SYHT;
    font-size: 18px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #fefefe;
    background: #6694e1;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid #6694e1;
    border-radius: 25px;
    box-shadow: inset 0 0 0 0 #5bdee3;
}

.b1:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #5bdee3;
    
    border: 2px solid #5bdee3;
    border-radius: 25px;
}

.b1:active {
    transform: scale(0.9);
}
@media print {
    .dayunresult{
        -webkit-print-color-adjust: exact; // 打印页面背景图像
    }
    @page {
    /* 添加页眉边距 */
    margin-top: 50px;
    /* 定义页眉的内容和样式 */
    @top-center {
      font-size: 18px;
      content: "这里是页眉";
      display: running(headfoot);
    }
  }
 
  /* 设置页脚 */
  @page {
    /* 添加页脚边距 */
    margin-bottom: 50px;
    /* 定义页脚的内容和样式 */
    @bottom-center {
      font-size: 16px;
      content: "这里是页脚";
      display: running(headfoot);
    }
}
}

.layout_creator {
    text-align: center;
    font-family: 'title';
    color: black;
    margin-top: 35%;
    margin-bottom: 30%;
    font-size: 21px;
}

.dayunresult-button {
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
    font-size: 20px;
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
    font-family: 'title';
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

.dayunresult {
    font-size: 18px;
    line-height: 30px;
    width: 800px;
    position: relative;
    overflow: visible;
    @media only screen and (max-width: 1030px) {
        width: 500px;
    }

    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    margin:0 auto;
    padding-bottom: 5%;
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(250, 250, 250) 0.2em solid;
    font-family: 'regular';
}

.dayunresult:hover {
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

.item {
    margin-top: 30px;
}</style>