<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <div class="YYL-center1">
        <span>出生时间：</span>
        <!--公历选择器-->
        <span>公历</span>
        <br>
<div class="YYLcard">
            <span class="YYL-unit">
                <span>年:</span>
                <!--公历年:份选择器-->
                <select name="gcYear" id="gcYear" v-model="g_time.year" 
                @change="g_time.month = ''"
                style="font-size: 10px;"
                >
                <option  selected>请选择</option>
                    <option :value="item" v-for="item in yeararr" :key="item">{{ item }}</option>
                    
                </select>
            </span>

            <span class="YYL-unit">

                <span>月:</span>

                <!--公历月:份选择器-->
                <select name="gcMon" id="gcMon" :disabled="g_time.year == ''" 
                v-model="g_time.month"
                    @change="g_time.day = ''"
                    style="font-size: 10px;"
                >
                <option  selected>请选择</option>

                    <option :value="item" v-for="item in montharr">{{ item }}</option>

                </select>
            </span>

            <span class="YYL-unit">
                <span>日:</span>
                <!--公历日:子选择器-->
                <select name="gcDate" id="gcDate" :disabled="g_time.month == ''" v-model="g_time.day"
                    @change="g_timechangeday"
                    style="font-size: 10px;"
                >
                <option  selected>请选择</option>

                    <option :value="item" v-for="item in dayarr" :key="item">{{ item }}</option>

                </select>
            </span>
            <span class="YYL-unit">

                <span>时:</span>
                <!--公历时辰选择器-->
                <select name="gcTime" id="gcTime" v-model="y_time.time" 
                @change="transValue"
                    style="font-size: 10px;"
                >
                <option  selected>请选择</option>
                    <option v-for="(item, index) in time1" :key="item.id" :value="item.id">
                        {{ item.title }}
                    </option>
                </select>
            </span>
    </div>
            <br>
            <span>出生时间：</span>
            <span>阴历</span>
            <br>
            <div class="YYLcard">
                <span>
                    <span>年:</span>

                    <select name="gcYear" id="gcYear" v-model="y_time.year" 
                    @change="y_time.month = ''" 
                    style="font-size: 10px;"
                >
                        <option  selected>请选择</option>
                        <option :value="item" v-for="item in yeararr" :key="item">{{ item }}</option>

                    </select>

                </span>
                <span>
                    <span>月:</span>

                    <select name="gcMon" id="gcMon" :disabled="y_time.year == ''" v-model="y_time.month"
                        @change="y_time.day = ''"
                    style="font-size: 10px;"
                >
                        <option  selected>请选择</option>

                        <option :value="item" v-for="item in montharr">{{ item }}</option>

                    </select>

                </span>
                
                <span>
                    <span>日:</span>

                    <select name="gcDate" id="gcDate" :disabled="y_time.month == ''" v-model="y_time.day"
                        @change="y_timechange"
                    style="font-size: 10px;"
                >
                        <option  selected>请选择</option>

                        <option :value="item" v-for="item in ydayarr" :key="item">{{ item }}</option>

                    </select>
                </span>
                <span>
                    <span>时:</span>

                    <select name="gcTime" id="gcTime" v-model="y_time.time" 
                    @change="transValue"
                    style="font-size: 10px;"
                >
                        <option  selected>请选择</option>
                        <option v-for="(item, index) in time1" :key="item.id" :value="item.id">{{ item.title }}</option>

                    </select>
                </span>
        </div>
    </div>
</template>
  
<script setup>
import { ref, watch, reactive } from 'vue'
import calendarFormatter from '../assets/js/dateChange.js'
import store from "../store/index.js";
const emit = defineEmits(["getValue"])




let g_time = reactive({
    year: "请选择",
    month: "请选择",
    day: "请选择",
})
// 点击事件触发emit，去调用我们注册的自定义事件getValue,并传递value参数至父组件
const transValue = () => {
    emit("getValue", y_time);

    store.state.yingli=y_time.year+'年' + y_time.month + '月' + y_time.day + '日'
    store.state.yangli=g_time.year+'年' + g_time.month + '月' + g_time.day + '日'
}
let y_time = reactive({
    year: "请选择",
    month: "请选择",
    day: "请选择",
    time: "请选择"
})

let isrun = ref(false)

const fn = (year) => {
    var a1 = (year % 4 == 0) && (year % 100 != 0) //条件1
    var a2 = (year % 400 == 0) //条件2

    if (a1 || a2) {
        return true
    } else {
        return false
    }
}


const g_timechangeday = () => {
    let nongli = calendarFormatter.solar2lunar(parseFloat(g_time.year), parseFloat(g_time.month), parseFloat(g_time.day));
    y_time.year = nongli.lYear
    y_time.month = nongli.lMonth < 10 ? '0' + nongli.lMonth : nongli.lMonth
    y_time.day = nongli.lDay
    transValue();
}

const y_timechange = () => {
    let gongli = calendarFormatter.lunar2solar(parseFloat(y_time.year), parseFloat(y_time.month), parseFloat(y_time.day));
    g_time.year = gongli.cYear
    g_time.month = gongli.cMonth < 10 ? '0' + gongli.cMonth : gongli.cMonth
    g_time.day = gongli.cDay
    transValue();
}


let dayarr = ref([])
let ydayarr = ref([])

watch(() => g_time.month, (newval, oldval) => {

    dayarr.value = []
    let num = new Date(parseFloat(g_time.year), parseFloat(newval), 0).getDate();

    for (let i = 0; i < num; i++) {
        dayarr.value.push(i + 1)
    }
})
watch(() => y_time.month, (newval, oldval) => {

    ydayarr.value = []
    let num = new Date(parseFloat(y_time.year), parseFloat(newval), 0).getDate();

    for (let i = 0; i < num; i++) {
        ydayarr.value.push(i + 1)
    }
})



const getYearBetween = (start, end) => {
    var result = [];
    //使用传入参数的时间
    var startTime = new Date(start);
    var endTime = new Date(end);
    while (endTime - startTime >= 0) {
        //获取年:份
        let year = startTime.getFullYear();
        //加入数组
        result.push(year);
        //更新日:期
        startTime.setFullYear(startTime.getFullYear() + 1);
    }
    return result;
}
let yeararr = getYearBetween('1900-1-1', new Date().getFullYear() + '-' + parseFloat(new Date().getMonth() + 1) + '-' + new Date().getDate()).reverse();

let montharr = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
]

// 

const time1 = [
    { id: 0, title: "早子时(00:00-01:00)" },
    { id: 1, title: "丑时(01:00-03:00)" },
    { id: 2, title: "寅时(03:00-05:00)" },
    { id: 3, title: "卯时(05:00-07:00)" },
    { id: 4, title: "辰时(07:00-09:00)" },
    { id: 5, title: "巳时(09:00-11:00)" },
    { id: 6, title: "午时(11:00-13:00)" },
    { id: 7, title: "未时(13:00-15:00)" },
    { id: 8, title: "申时(15:00-17:00)" },
    { id: 9, title: "酉时(17:00-19:00)" },
    { id: 10, title: "戌时(19:00-21:00)" },
    { id: 11, title: "亥时(21:00-23:00)" },
    { id: 12, title: "晚子时(23:00-24:00)" },

]
</script>

<style lang="scss">
.YYLcard {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media only screen and (max-width: 1030px) {
    flex-direction: column;
    }
}
.YYL-unit{
    color: black;
}
.YYL-unit-select{
    font-size: 1px;
}


.YYL-center1{
    width: 500px;
    margin:0 auto;/*子元素水平居中*/
  }

#gcYear {
    background-color: azure;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    border: 2px dashed lightcoral;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;
}

#gcYear:hover {
    background-color: aquamarine;

}

#gcMon {
    background-color: azure;
    border-radius: 10px;
    height: 30px;
    border: 2px dashed lightcoral;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;

}

#gcMon:hover {
    background-color: aquamarine;
}


#gcDate {
    background-color: azure;
    width: 70px;
    border-radius: 10px;
    height: 30px;
    border: 2px dashed lightcoral;
    margin-top: 5px;
    margin-right: 10px;
    margin-left: 5px;

}

#gcDate:hover {
    background-color: aquamarine;
}

#gcTime {
    background-color: azure;
    border-radius: 10px;
    height: 30px;
    width: 150px;
    border: 2px dashed lightcoral;
    margin-top: 5px;
    margin-left: 5px;

}

#gcTime:hover {
    background-color: aquamarine;
}

#lcYear {
    background-color: cornsilk;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    border: 2px dashed lightcoral;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;

}

#lcYear:hover {
    background-color: mistyrose;
}

#lcMon {
    background-color: cornsilk;
    border-radius: 10px;
    height: 30px;
    border: 2px dashed lightcoral;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;

}

#lcMon:hover {
    background-color: mistyrose;
}

#lcDate {
    background-color: cornsilk;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    border: 2px dashed lightcoral;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;

}

#lcDate:hover {
    background-color: mistyrose;
}

#lcTime {
    background-color: cornsilk;
    border-radius: 10px;
    height: 30px;
    border: 2px dashed lightcoral;
    width: 150px;
    margin-right: 10px;
    margin-top: 5px;
    margin-left: 5px;

}

#lcTime:hover {
    background-color: mistyrose;
}
</style>