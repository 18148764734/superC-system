<template>
    <div class="liunian-card">
        <span :class="currentIndex==0?'liunian-card-unit-active':'liunian-card-unit'" @click="select(0)">
        {{ year1 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi1 }}</span>
        </span>
        <span :class="currentIndex==1?'liunian-card-unit-active':'liunian-card-unit'" @click="select(1)">
             {{year2 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi2 }}</span>

        </span>
        <span :class="currentIndex==2?'liunian-card-unit-active':'liunian-card-unit'" @click="select(2)">
           {{ year3 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi3 }}</span>

        </span>
        <span :class="currentIndex==3?'liunian-card-unit-active':'liunian-card-unit'" @click="select(3)">
             {{ year4 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi4 }}</span>

        </span>
        <span :class="currentIndex==4?'liunian-card-unit-active':'liunian-card-unit'" @click="select(4)">
             {{ year5 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi5 }}</span>

        </span>
        <span :class="currentIndex==5?'liunian-card-unit-active':'liunian-card-unit'" @click="select(5)">
             {{ year6 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi6 }}</span>

        </span>
        <span :class="currentIndex==6?'liunian-card-unit-active':'liunian-card-unit'" @click="select(6)">
             {{ year7 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi7 }}</span>

        </span>
        <span :class="currentIndex==7?'liunian-card-unit-active':'liunian-card-unit'" @click="select(7)">
             {{ year8 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi8 }}</span>

        </span>
        <span :class="currentIndex==8?'liunian-card-unit-active':'liunian-card-unit'" @click="select(8)">
             {{ year9 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi9 }}</span>

        </span>
        <span :class="currentIndex==9?'liunian-card-unit-active':'liunian-card-unit'" @click="select(9)">
             {{ year10 }} &nbsp;&nbsp;&nbsp; <span class="liunian-card-bazi">{{ bazi10 }}</span>

        </span>
    </div>


</template> 

<script setup>
import { computed, ref, watch, reactive } from 'vue'
import MyItem from './MyItem.vue'

const currentIndex = ref(10);
const dayunArr=ref(
    {
      one: "2057 丁丑",
      two: "2058 戊寅",
      three: "2059 己卯",
      four: "2060 庚辰",
      five: "2061 辛已",
      six: "2062 王午",
      seven: "2863 癸未",
      eight: "2064 甲申",
      nine: "2065 乙西",
      ten: "2066 丙成",
      
    }
);


const select = (index) => {
    currentIndex.value=index;
    emit("getValue", currentIndex);
}
const emit = defineEmits(["getValue"])

// 以下是拆分字符串
const arr1=reactive(dayunArr.value.one.split(' '))
const year1 = ref(arr1[0])
const bazi1 = ref(arr1[1])

const arr2=reactive(dayunArr.value.two.split(' '))
const year2 = ref(arr2[0])
const bazi2 = ref(arr2[1])


const arr3=reactive(dayunArr.value.three.split(' '))
const year3 = ref(arr3[0])
const bazi3 = ref(arr3[1])


const arr4=reactive(dayunArr.value.four.split(' '))
const year4 = ref(arr4[0])
const bazi4 = ref(arr4[1])

const arr5=reactive(dayunArr.value.five.split(' '))
const year5 = ref(arr5[0])
const bazi5 = ref(arr5[1])

const arr6=reactive(dayunArr.value.six.split(' '))
const year6 = ref(arr6[0])
const bazi6 = ref(arr6[1])

const arr7=reactive(dayunArr.value.seven.split(' '))
const year7 = ref(arr7[0])
const bazi7 = ref(arr7[1])

const arr8=reactive(dayunArr.value.eight.split(' '))
const year8 = ref(arr8[0])
const bazi8 = ref(arr8[1])

const arr9=reactive(dayunArr.value.nine.split(' '))
const year9 = ref(arr9[0])
const bazi9 = ref(arr9[1])

const arr10=reactive(dayunArr.value.ten.split(' '))
const year10 = ref(arr10[0])
const bazi10 = ref(arr10[1])


</script>

<style scoped>

.liunian-card-unit-active .liunian-card-bazi{
    font-size: 17px;
    color: #b581ea;
}
.liunian-card-unit .liunian-card-bazi{
    font-size: 17px;
    color:  rgb(107, 107, 107); 
}

.liunian-card {
    padding: 10px 5px 5px 5px;
    width: 300px;
    height:230px;
    border-radius: 30px;
    text-align: center;
    background: #defff2;
    margin: 0 auto;
}
.liunian-card-unit{
    color: rgb(107, 107, 107);
    display: inline-block;
    font-weight: 400;
    width: 130px;
    height: 40px;
    font-size: 20px;
    background-color: #defff2;
    border-radius: 50px;
    margin-bottom: 1px;
    margin-right: 5px;
    padding-bottom: 2px;
}
.liunian-card-unit:hover {
    background-color: #ffffff;
    color: #b581ea;
    margin-bottom: 0.5px;

    border: 1px dashed rgb(0, 0, 0);
}
.liunian-card-unit:hover .liunian-card-bazi{
    color: #b581ea;
}


.liunian-card-unit-active{
    color: #b581ea;
    display: inline-block;
    margin-right: 5px;

    font-weight: 400;
    width: 130px;
    height: 40px;
    font-size: 20px;
    background-color: #ffffff;
    border-radius: 50px;
    border: 1px dashed rgb(0, 0, 0);
    margin-top: 0px;
}
</style>