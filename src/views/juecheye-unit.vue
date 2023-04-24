<template>
    <div class="result-Page-unit"
    :background-color="red"
    :style="{backgroundColor:background}"
     @click="handleCheck()">
        <span class="unit-title">时空坐标 {{ props.data.historyType }}</span>
        <span class="unit-name"> 姓名:{{ props.data.userName }}</span>
        <span class="center"></span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                {{ props.data.subjectBazi }}
            </span>
        </span>
        <span class="time">
            预知时间:{{ props.data.historyTime }}
        </span>
    </div>
    
    
</template>

<script setup>
import { computed, ref, watch, reactive, onMounted } from 'vue'
import { getId } from '../axios/OriginApi.js'
import store from "../store/index.js";
import router from "../router/index.js";

const props = defineProps({
    //子组件接收父组件传递过来的值
    data:undefined,
})
var background=props.data.historyType=='原命题报告'?'#dee2ff':
props.data.historyType=='大运报告'?'#ffe6de':
'#defff7';

const handleCheck = () => {
    getId(props.data.historyId).then((res) => {
                
                store.state.result=res.data.data;
                store.state.time = res.data.data.decisionTime;
                
                store.state.name=props.data.userName;
                console.log(store.state.name);
                router.push({name:"result",params:{}});
                
            }
        ).finally((err) => {
            // submintbtn.value = false这里错误之后执行的行为
            // alert(res.data.msg)
        })
  };
</script>
  
<style scoped>


.time {
    font-size: 12px;
    padding-left: 30px;
    width: 260px;
    @media only screen and (max-width: 1110px) {
        padding-left: 0px;
        padding-top: 10px;
        font-size:16px
    }
}

.time-location-font {
    padding-left: 10px;
    color: #f8ce5b;
    font-size: 16px;
    font-weight: 500;
    @media only screen and (max-width: 1110px) {
        padding-left: 5px;
        font-size: 17px;
    }
}

.time-location-img {
    width: 20px;
    height: 20px;
    @media only screen and (max-width: 1110px) {
        margin-left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 21px;
    }
}

.time-location {
    padding-left: 10px;
    width: 200px;
    height: 24px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    /* 垂直居中 */

    @media only screen and (min-width: 1110px) and (max-width: 1580px) {
        margin-left: 60px;
    }

    @media only screen and (max-width: 1110px) {
        margin-top:10px;
        margin-left: 0px;
        width: 220px;
        height: 30px;
        border-radius: 12px;
    }
}
.center {
  flex: 1;
  @media only screen and (max-width: 1110px) {
        display: none;
    }
}
.unit-name {
    padding-left: 30px;
    font-size: 12px;
    color: black;
    @media only screen and (max-width: 1110px) {
        margin-top:5px;
        padding-left:0px;
        font-size:16px
    }
}

.unit-title {
    color: #495bb5;
    font-size: 15px;
    font-weight: 600;
    width: 145px;
    @media only screen and (max-width: 1110px) {
        padding-top: 20px;
        font-size:20px;
        width: 190px;
    }
}

.result-Page-unit {
    padding-right: 20px;
    padding-left: 40px;
    color: rgb(98, 97, 97);
    height: 40px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow:
        0.1px 0.5px 0.9px rgba(0, 0, 0, 0.05),
        1px 4px 7px rgba(0, 0, 0, 0.1);
    ;

    @media only screen and (max-width: 1110px) {
        flex-direction: column;
        padding-left:20px;
        height: 170px;
        margin-top:40px
    }
}

</style>