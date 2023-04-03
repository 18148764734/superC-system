<template>
    <br><br><br>
    <div class="result">
        
        <div style="font-size:20px">{{ store.state.dayunresult.partOne.bigTitle }}</div>
        <div style="font-size:18px">{{ store.state.dayunresult.partOne.bigTitle1 }}</div>
        <div>{{ store.state.dayunresult.partOne.b2Title }}</div>
        <div>{{ store.state.dayunresult.partOne.preFace }}</div>
        <div>{{ store.state.dayunresult.partOne.tip }}</div>
        <div>{{ store.state.dayunresult.partOne.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partOne.messageList4" :data="messageList"></MyItem>

        <br><br>
        
        <div style="font-size:20px">{{ store.state.dayunresult.partTwo.bigTitle }}</div>
        <div style="font-size:18px">{{ store.state.dayunresult.partTwo.bigTitle1 }}</div>
        <div>{{ store.state.dayunresult.partTwo.b2Title }}</div>
        <div>{{ store.state.dayunresult.partTwo.preFace }}</div>
        <div>{{ store.state.dayunresult.partTwo.tip }}</div>
        <div>{{ store.state.dayunresult.partTwo.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partTwo.messageList4" :data="messageList"></MyItem>
        <br><br>

        
        <div style="font-size:20px">{{ store.state.dayunresult.partThree.bigTitle }}</div>
        <div style="font-size:18px">{{ store.state.dayunresult.partThree.bigTitle1 }}</div>
        <div>{{ store.state.dayunresult.partThree.b2Title }}</div>
        <div>{{ store.state.dayunresult.partThree.preFace }}</div>
        <div>{{ store.state.dayunresult.partThree.tip }}</div>
        <div>{{ store.state.dayunresult.partThree.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partThree.messageList4" :data="messageList"></MyItem>

        <br><br>
        
        <div style="font-size:20px">{{ store.state.dayunresult.partFour.bigTitle }}</div>
        <div style="font-size:18px">{{ store.state.dayunresult.partFour.bigTitle1 }}</div>
        <div>{{ store.state.dayunresult.partFour.b2Title }}</div>
        <div>{{ store.state.dayunresult.partFour.preFace }}</div>
        <div>{{ store.state.dayunresult.partFour.tip }}</div>
        <div>{{ store.state.dayunresult.partFour.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFour.messageList4" :data="messageList"></MyItem>
        <br><br>

        <div style="font-size:20px">{{ store.state.dayunresult.partFive.bigTitle }}</div>
        <div style="font-size:18px">{{ store.state.dayunresult.partFive.bigTitle1 }}</div>
        <div>{{ store.state.dayunresult.partFive.b2Title }}</div>
        <div>{{ store.state.dayunresult.partFive.preFace }}</div>
        <div>{{ store.state.dayunresult.partFive.tip }}</div>
        <div>{{ store.state.dayunresult.partFive.endMessage }}</div>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList1" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList2" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList3" :data="messageList"></MyItem>
        <MyItem v-for="messageList in store.state.dayunresult.partFive.messageList4" :data="messageList"></MyItem>
        <br><br>


        
    </div>


</template> 

<script setup>
import { computed, ref, watch, reactive } from 'vue'
import MyItem from './MyItem.vue'
import { toRefs } from 'vue'
import store from "../store/index.js";

const props = defineProps({
  //子组件接收父组件传递过来的值
  info: Object,
})
//使用父组件传递过来的值
const {info} =toRefs(props)
const info2 = ref(store.state.dayunresult)

</script>

<style scoped>

.result {
    width: 720px;
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
   }
   
   .result:hover {
    border: #006fff 0.2em solid;
   }
</style>