<template>
  <div class="origin-center-wrap">
    <div style="margin-bottom:24px" class="
    			  column
    			  is-half-mobile
    			  is-one-third-tablet
    			  is-one-fifth-desktop
    			">
    </div>
    <div class="container is-fluid has-text-centered-desktop">
      <div class="liunian-bt">
        <h1 id="ymjbt">流年决策系统</h1>
      </div>
    </div>

    <div class="center1">
      <p>
        <label for="OriName">
          <span>姓名: </span> </label>
<br>
        <input class="input is-info" type="text" id="OriName" name="OriName" placeholder="请输入您的姓名" maxlength="6"
          size="20">
      </p>

      <p>
        <span>性别：</span>
        <br>
        <input type="radio" id="gender" name="gender" value="男" v-model="data.gender"/> 男
        <input type="radio" id="gender" name="gender" value="女" v-model="data.gender"/> 女
      </p>

      <YYL @getValue="getDayunCardIndex"></YYL>

      

      <br>
      <p class="has-text-centered">
        <button class="dayun-b1"  @click="submit">
          生成大运
        </button>
        <br>
        
      </p>
      <p class="has-text-centered" style="margin-top: 30px; margin-bottom:10px;">
          <font color="#5f89ff">
          请选择您要决策的大运：
          </font>
          
        <br>
        </p>
      <p class="center1">
        <dayuncard @getValue="getDayunCardIndex" :dayunArr="dayunArr"></dayuncard>
      </p>
      
      <br>


<p class="has-text-centered">
    <button
      class="liunian-b1"
      name="bigyButton"
      type="submit"
      value="bigy"
    >
      生成流年
    </button>
    <br>
    <br>
  </p>
  <p class="has-text-centered">
          <font color="#5f89ff">
          请选择您要决策的流年:
          </font>
        <br>
        </p>
  <p class="center1">
      <liuniancard @getValue="getDayunCardIndex"></liuniancard>
      </p>
      <br>

      <!-- <p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在母亲那边祖坟的什么方向居住工作（学习）：</span>
 <br>

  <select name="qiqi_direction" id="qiqidirection" v-model="data.haha_direction"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在父亲居住地的什么方向居住工作（学习）：</span>
 <br>
  <select name="qiqi_direction" id="qiqidirection" v-model="data.qiqi_direction_home"
  style="font-size: 10px;" placeholder="请选择"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在母亲居住地的什么方向居住工作（学习）：</span>
 <br>
  <select name="qiqi_direction" id="qiqidirection" v-model="data.haha_direction_home">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>

  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在自己居住点的什么方向工作（学习）：</span>
  <br>
  <select name="qiqi_direction" id="qiqidirection" v-model="data.boku_direction_home">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>

  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>常去自己居住点的什么方向休闲娱乐：</span>
  <br>
  <select name="qiqi_direction" id="qiqidirection" v-model="data.boku_direction_wan">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p> -->

<p class="help is-info is-marginless"
style="padding-bottom: 10px;">
  <span style="color: red;" >*</span>&nbsp;
  本系统不分析人的死亡时间、智力水平、学历文凭。
  </p>
      <p class="has-text-centered">
    <button
      class="b1"
      name="bigyButton"
      type="submit"
      value="bigy"
    >
      开始决策
    </button>
    <br>
    <br>
  </p>
    </div>
  </div>
  
</template> 

<script setup>
import { computed,ref, watch, reactive } from 'vue'
import MyItem from './MyItem.vue'
import dayuncard from './dayuncard.vue'
import liuniancard from './liuniancard.vue'
import YYL from './YYL.vue'
import {getdayun} from '../axios/api.js'
const currentIndex = ref(10);
const dayunArr=ref(
    {
      one: "19岁~28岁  [2001年-2010年]  丁巳",
      two: "19岁~28岁  [2001年-2010年]  丁巳",
      three: "29岁~38岁  [2011年-2020年]  戊午",
      four: "39岁~48岁  [2021年-2030年]  己未",
      five: "49岁~58岁  [2031年-2040年]  庚申",
      six: "59岁~68岁  [2041年-2050年]  辛酉",
      seven: "69岁~78岁  [2051年-2060年]  壬戌",
      eight: "79岁~88岁  [2061年-2070年]  癸亥",
      nine: "89岁~98岁  [2071年-2080年]  甲子",
      ten: "99岁~108岁  [2081年-2090年]  乙丑",
    }
);
const getSonValue = async (value) => {
  data.value.nian=value.year;
  data.value.yue=value.month;
  data.value.ri=value.day;
  data.value.shi=value.time;
}
const getDayunCardIndex = async (value) => {
  currentIndex.value=value.value;
}
const data = ref({
		gender:"0",
		nian:"",
    yue:"",
    ri:"",
    shi:"",
    daYunIndex:currentIndex.value,
    qiqi_direction_home:"请选择",
    haha_direction_home:"请选择",
	})
const submit = ()  =>{
		if(
      data.value.gender == ''
      || data.value.nian == ''
      || data.value.yue == ''
      || data.value.ri == ''
      || data.value.shi == ''

      ){
			alert('缺少必填内容')
			return false
		}else{
			getdayun(data.value).then((res)=>{
				if(res.data.code == '0'){
          console.log(res.data.data);
          dayunArr.value=res.data.data
					alert('决策成功')
				}else{
					alert(res.data.msg)
				}
				
			}).finally((err)=>{
                // submintbtn.value = false这里错误之后执行的行为
                // alert(res.data.msg)
            })
		}
	}
   
const tiemarr = [
    { id: 0, title: "甲" },
    { id: 1, title: "卯" },
    { id: 2, title: "乙" },
    { id: 3, title: "辰" },
    { id: 4, title: "巽" },
    { id: 5, title: "巳" },
    { id: 6, title: "丙" },
    { id: 7, title: "午" },
    { id: 8, title: "丁" },
    { id: 9, title: "未" },
    { id: 10, title: "坤" },
    { id: 11, title: "庚" },
    { id: 12, title: "酉" },
    { id: 13, title: "辛" },
    { id: 14, title: "戌" },
    { id: 15, title: "乾" },
    { id: 16, title: "亥" },
    { id: 17, title: "壬" },
    { id: 18, title: "子" },
    { id: 19, title: "癸" },
    { id: 20, title: "丑" },
    { id: 21, title: "艮" },
    { id: 22, title: "寅" },
]

</script>

<style>
@import url('../assets/css/origin.css');
.dayun-card {
  padding-left: 5%;
  padding-top: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  width: 500px;
  height: 550px;
    border-radius: 30px;
    background: #eaf8ff;
  text-align: center;
  box-shadow: 0px;
}


</style>