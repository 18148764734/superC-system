<template>
    <div class='myContainer'>
        <div class="unit">
            <img src="./../../../assets/img/identify/unit-icon.png" alt="">
            <font class="blue">{{ data.whatDo }} </font>
            <font class="green"> {{ data.type }} </font>
        </div>
    </div>
</template>

<script setup>
import { identifyQuery } from "../../../axios/api"
const data = ref(
    {
        whatDo:'',
        type:''
    }
);
    onMounted(
        async ()=>{
            const userPhone = {
                phone: localStorage.getItem('superUserPhone')
            }
            const res = await identifyQuery(userPhone);
            if(res.data.code==0){
                data.value = res.data.data[0];
            }
            console.log(data.value);
        }
    )
</script>
<style lang="scss" scoped>
    .myContainer {
        display: flex;
        justify-content: center;
        align-items:flex-start;
        padding-top: 100px;
        .unit{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #a4a4a4;
            border-radius: 20px;
            width: 600px;
            height: 100px;
            font-size: 19px;
            font-weight:bold ;
        }
        .blue{
            color: #4b63b8;
            margin-left: 10px;
            margin-right: 150px;
        }
        .green{
            color: #1cd95d; 
        }
    }
</style>