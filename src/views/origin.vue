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
            <div class="bt">
              <h1 id="ymjbt">原命局决策系统</h1>
            </div>
          </div>
          <div class="center1">
            
                <p>
                      <label for="OriName" > 
                      <span>姓名: </span> </label>
                      <br>

                      <input class="input is-info" type="text" id="OriName" name="OriName" 
                      placeholder="请输入您的姓名" maxlength="6" v-model="name" size="20">
                </p>
                
                 <p>
                      <span>性别：</span> 
<br>
                      <input type="radio" id="sex" name="sex" value="1" v-model="data.sex"/> 男
                      <input type="radio" id="sex" name="sex" value="0" v-model="data.sex"/> 女
                  </p>
                  <YYL @getValue="getSonValue"></YYL>
 <p>
    <span>身高：</span>  
<br>

        <input type="radio"  name="tx" value="偏小"/> 偏小
        <input type="radio" name="tx" value="标准" />标准
        <input type="radio" name="tx" value="偏高"/>偏高
 </p>


    <p class="help is-info is-marginless" style="line-height: 20px">
      北方男人——
      <br>
      偏小：170cm以下；标准：170cm-175cm；偏高：176cm以上；
      <br>
      南方男人——
      <br>
      偏小：167cm以下；标准：167cm-172cm；偏高：173cm以上；
      <br>
      北方女人——
      <br>
      偏小：160cm以下；标准：160cm-165cm；偏高：166cm以上；
      <br>
      南方女人——
      <br>
      偏小：157cm以下；标准：157cm-162cm；偏高：163cm以上。
      <br>
      <span style="color: red;">* &nbsp;</span>请根据您的实际情况精准选择。
    </p>



    <p>
    <span>臀部特征（和自己身材比较）：</span>  <br>
    <input type="radio"  name="tbtz" value="瘦弱"  v-model="data.tbtz"/> 瘦弱
    <input type="radio" name="tbtz" value="标准"  v-model="data.tbtz" />标准
    <input type="radio" name="tbtz" value="发达" v-model="data.tbtz" />发达

</p>

<p>
    <span>耳朵特征（大小明显选大小，正常的选正常）：</span> 
    <br>
    <input type="radio"  name="eartz" value="大"  v-model="data.eartz"/> 偏大
    <input type="radio" name="eartz" value="小" v-model="data.eartz" />偏小

      <input type="radio" name="eartz" value="中" v-model="data.eartz" />正常
 
</p>


<p>
  <span>方向（如果没有精准的方向，预测结果的准确性会下降）：</span>
</p>

<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在父亲这边祖坟的什么方向居住工作（学习）：</span>
  <br> 
  <select name="qiqi_direction" id="qiqidirection" v-model="data.qiqi_direction"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>

<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在母亲那边祖坟的什么方向居住工作（学习）：</span>
 
  <br> <select name="qiqi_direction" id="qiqidirection" v-model="data.haha_direction"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在父亲居住地的什么方向居住工作（学习）：</span>
 
  <br> <select name="qiqi_direction" id="qiqidirection" 
  v-model="data.qiqi_direction_home"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在母亲居住地的什么方向居住工作（学习）：</span>
 
  <br> <select name="qiqi_direction" id="qiqidirection" 
  v-model="data.haha_direction_home"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>在自己居住点的什么方向工作（学习）：</span>

  <br> <select name="qiqi_direction" id="qiqidirection" 
  v-model="data.boku_direction_home"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>常去自己居住点的什么方向休闲娱乐：</span>
 
  <br> <select name="qiqi_direction" id="qiqidirection" 
  v-model="data.boku_direction_wan"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span style="color: red;" >*</span>&nbsp;
  <span>常去自己工作地点的什么方向休闲娱乐：</span>
  
  <br> <select name="qiqi_direction" id="qiqidirection" 
  v-model="data.boku_direction_work"
  style="font-size: 10px;"
                >
    <option selected>请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>

  </select>
</p>

<p class="help is-info is-marginless" 
style="padding-bottom: 10px;">
<span style="color: red;" >*</span>&nbsp;
本系统不分析人的死亡时间、智力水平、学历文凭。
</p>

<div class="has-text-centered">


    <button
      class="b1"
      name="bigyButton"
      type="submit"
      value="bigy"
      @click="submit"
      
    >
      开始决策
    </button>
  </div>
    <br>
    <br>

        </div>
  </div>
</template>

<script setup >
import {ref,watch,reactive} from 'vue'
import calendarFormatter from '../assets/js/dateChange.js'
import {originall,getbazi} from '../axios/OriginApi.js'
import YYL from './YYL.vue'
import router from "../router/index.js";
import store from "../store/index.js";
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

const data = ref(
  // {
	// 	sex:"",
	// 	nian:"",
  //   yue:"",
  //   ri:"",
  //   shi:"",
  //   tbtz:"",
  //   eartz:"",
  //   qiqi_direction:"请选择",
  //   haha_direction:"请选择",
  //   qiqi_direction_home:"请选择",
  //   haha_direction_home:"请选择",
  //   boku_direction_wan:"请选择",
  //   boku_direction_home:"请选择",
  //   boku_direction_work:"请选择",
	// }
  {
		sex:"1",
		nian:"1999",
    yue:"1",
    ri:"1",
    shi:"1",
    tbtz:"标准",
    eartz:"中",
    qiqi_direction:"甲",
    haha_direction:"甲",
    qiqi_direction_home:"甲",
    haha_direction_home:"甲",
    boku_direction_wan:"甲",
    boku_direction_home:"甲",
    boku_direction_work:"甲",
	}
  )
const bazi_data = ref({
		nian:"",
    yue:"",
    ri:"",
    shi:"",
	})
  
const submit = async ()  =>{
		if(
      data.value.sex == ''
      || data.value.nian == '请选择'
      || data.value.yue == ''
      || data.value.ri == ''
      || data.value.shi == '请选择'
      || data.value.tbtz == ''
      || data.value.eartz == ''
      || data.value.qiqi_direction == '请选择'
      || data.value.haha_direction == '请选择'
      || data.value.qiqi_direction_home == '请选择'
      || data.value.haha_direction_home == '请选择'
      || data.value.boku_direction_wan == '请选择'
      || data.value.boku_direction_home == '请选择'
      || data.value.boku_direction_work == '请选择'

      ){
			alert('缺少必填内容')
      console.log(data.value);
			return false
		}else{
			originall(data.value).then((res)=>{
		
				if(res.data.code == '0'){
					alert('决策成功');
          router.push({name:"result",params:{}});
          store.state.result=res.data.data;
          store.state.name=data.value.name;
          store.state.sex=data.value.sex;
          store.state.name=name.value;
          
          console.log(store.state);

				}else{
					alert(res.data.msg)

				}
				
			})
      bazi_data.value.nian= data.value.nian;
      bazi_data.value.yue= data.value.yue;
      bazi_data.value.ri= data.value.ri;
      bazi_data.value.shi= data.value.shi;
			getbazi(bazi_data.value).then((res)=>{
		
				if(res.data.code == '0'){
          store.state.bazi.nianZhu = res.data.data.nianZhu
          store.state.bazi.yueZhu = res.data.data.yueZhu
          store.state.bazi.riZhu = res.data.data.riZhu
          store.state.bazi.shiZhu = res.data.data.shiZhu

				}else{
					alert(res.data.msg)

				}
				
			})
		}

	}

const getSonValue = async (value) => {
  data.value.nian=value.year;
  data.value.yue=value.month;
  data.value.ri=value.day;
  data.value.shi=value.time;
}
const result = ref();
const name = ref('');

</script>

<style>
@import url('../assets/css/origin.css');


</style>

