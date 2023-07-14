<script setup>
import { ref, watchEffect, onMounted, reactive } from 'vue'
import { getBillState, getProductList, payApi } from '../axios/api';
import store from "./../store/index.js";
import { QRCode,message,Modal } from 'ant-design-vue';
const isVIP = ref(true);
const backgroundSrc = ref('src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/VIP会员已选择.png');
const gotoVIP = (v) => {
  isVIP.value = v;
  if (v) {
    backgroundSrc.value = 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/VIP会员已选择.png';
    setCurrentVIP(2588,1)
  }
  else {
    backgroundSrc.value = 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/购买次卡（已选择）.png'
    setCurrentVIP(50,4)
  }
}
const currentVIP = ref(1888);
const displayPrice = ref(2560);
watchEffect(() => {
  // displayPrice.value = currentVIP.value;

  var targetValue = 1580;
  switch (currentVIP.value) {
    case 2588:
      targetValue = 1580;
      break;
    case 5160:
      targetValue = 2999;
      break;
    case 2580:
      targetValue = 1580;
      break;
  }
  const interval = 50; // 过渡间隔，单位毫秒
  const increment = 156;
  let currentValue = displayPrice.value;
  const timer = setInterval(() => {
    currentValue -= increment;
    if (currentValue <= targetValue) {
      clearInterval(timer);
      currentValue = targetValue;
    }
    displayPrice.value = currentValue;
  }, interval)
})
const setCurrentVIP = (v,id) => {
  var money = 0; 
  switch(v){
    case 2588: money=1580; break;
    case 5160: money=2999; break;
    case 2580: money=1580; break;
    default: money = v; break;
  }
  currentVIP.value = v;//currentVIP为价格
  displayPrice.value = v;
  data.productId = id;
  data.money = money;
  reloadPay();
}
const selectedStyle = ref({
  backgroundColor: '#04a9ff'
})
const getVIPbackground = (v) => {
  if (currentVIP.value === v) {
    return selectedStyle.value;
  }
  else { return null }
}
const getVIPsrc = (v) => {
  if (v == 1) {
    if (isVIP.value) {
      return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/VIP会员.png';
    } else {
      return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/VIP会员白色.png';
    }
  }

  else if (v == 2) {
    if (isVIP.value) {
      return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/购买次卡（未选择）.png';
    } else {
      return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/购买次卡蓝色.png';
    }
  }
}
const isAliPay = ref(false);
const getSelectedSRC = (v) => {
  if (v == isAliPay.value) {
    return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/已选择.png'
  } else {
    return 'src/assets/img/getVIP/superC经典支付页面UI/superC支付切图/未选择.png'
  }
}
const setAliPay = (v) => {
  if(v){
    data.payMethod = 1;
  }else{
    data.payMethod = 2;
  }
  isAliPay.value = v;
  reloadPay();
}
const isDiscount = ref(true);
const showDiscount = ref(false);
const data = reactive(
    {
      productId: 6,
      payMethod: 2,
      money: 0.01,
      phone: localStorage.getItem("superUserPhone")
    }
  )
const reloadPay = async () => {
  const res = await payApi(data);
  if(data.payMethod == 2){
    wxUrl.value = res.data.data.result
  }else{
    html.value = res.data.data.result;
  }
  queryBills.number = res.data.data.sdbknumber;
  console.log(queryBills.number);
}
let billState = null;
onMounted(async () => {
  
  // 在组件挂载时添加滚动事件监听
  window.addEventListener('scroll', handleScroll);
  setCurrentVIP(2588,1);
  setTimeout(() => {
    showDiscount.value = true;
    // 这里设置定时器是因为。这个showDiscount是一个全屏遮罩,得等他父组件加载完再显示，不然就会位置错乱
  }, 100);
  const  res = await getProductList();
  productList.value = res.data.data;
  const timer = setInterval(
    async ()=>{
      if(store.state.showGetVIP){
        billState =await getBillState(queryBills)
        console.log(billState.data);
        if(billState.data.data!=null){
          message.success("支付成功！")
          visible.value = true;
          clearInterval(timer);
        }
      }
    }
    ,4000)
  reloadPay();
})
const productList = ref();
const html = ref();
const wxUrl = ref();
const queryBills = reactive({
  number:0
});
const hiddenDiscount = () => {
  showDiscount.value = false;
}
const visible = ref(false);
const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

onUnmounted(() => {
  // 在组件卸载时移除滚动事件监听
  window.removeEventListener('scroll', handleScroll);
});
const handleScroll = () => {
  const container = document.querySelector('.VIP-get-container');
  const windowHeight = window.innerHeight;
  const containerHeight = container.offsetHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const top = (windowHeight / 2) + scrollTop - 150 + 'px';
  container.style.top = top;
};
</script>

<template>
  <div class="VIP-get-container">
    <img class="vip-close" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/关闭 2.png"
      @click="store.state.showGetVIP=false">
    <div class="top">

      <img class="title-background" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/上部标题.png">
      <span class="title">欢迎购买时空坐标SDBK会员</span>
    </div>
    <div class="VIP-content">
      <img class="content-background" :src="backgroundSrc">
      <img v-show="isVIP" class="account-card" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/购买次数未选择.png">
      <img v-show="!isVIP" class="vip-card" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/VIP会员（未选择）.png">

      <span class="vip-card-click" @click="gotoVIP(true)">
        <img class="text" :src="getVIPsrc(1)" />
      </span>
      <span class="account-card-click" @click="gotoVIP(false)">
        <img class="text" :src="getVIPsrc(2)" />
      </span>

      <div class="vip-content-main" v-show="isVIP">
        <span class="selected-background" :style="getVIPbackground(2588)">
          <span class="selected-text" style="color: #e8f2fa;">
            90%用户的选择
          </span>
          <span class="white-card" @click="setCurrentVIP(2588,1)">
            <div class="one">个人VIP·年卡</div>
            <br>
            <div class="two">
              <span class="t1">￥</span>
              1880元
              <span class="t2">/年</span>
            </div>
            <div class="three">
              <span class="th1">￥</span>
              2588元
              <span class="th2">/年</span>
            </div>
            <div class="four">（首客优惠券再减300）</div>
            <div class="five">

              <span class="f1">￥</span>
              1580元
              <span class="f2">/年</span>
            </div>

          </span>
        </span>
        <span class="selected-background" :style="getVIPbackground(5160)">
          <span class="selected-text">
            
          </span>
          <span class="white-card" @click="setCurrentVIP(5160,2)">
            <div class="one">个人VIP·2年卡</div>
            <br>
            <div class="two">
              <span class="t1">￥</span>
              2999元
              <span class="t2">/2年</span>
            </div>
            <div class="three">
              <span class="th1">￥</span>
              5160元
              <span class="th2">/年</span>
            </div>
            <div class="four" style=" ">（送三个月）</div>
            <div class="five">

              <span class="f1">￥</span>
              2999元
              <span class="f2">/年</span>
            </div>

          </span>
        </span>
        <span class="selected-background" :style="getVIPbackground(2580)">
          <span class="selected-text">
            
          </span>
          <span class="white-card" @click="setCurrentVIP(2580,3)">
            <div class="one">个人VIP·连续包年</div>
            <br>
            <div class="two">
              <span class="t1">￥</span>
              1580元
              <span class="t2">/年</span>
            </div>
            <div class="three">
              <span class="th1">￥</span>
              2580元
              <span class="th2">/年</span>
            </div>
            <div class="four" style="font-size: 15px;">(往后每年减200元,可随时取消)</div>
            <div class="five">

              <span class="f1">￥</span>
              1580元
              <span class="f2">/年</span>
            </div>


          </span>
        </span>
        <span class="pay-card">
          <span class="wx">
            <img src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/微信支付.png">
            <br>
            <img :src="getSelectedSRC(false)" @click="setAliPay(false)">
            <br>
            微信支付
          </span>
          <span class="ali">
            <img src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/支付宝.png">
            <br>
            <img :src="getSelectedSRC(true)" @click="setAliPay(true)">
            <br>
            支付宝支付
          </span>
          <span class="QRcode" v-show="data.payMethod == 2" >
            <QRCode  :value="wxUrl"></QRCode>
          </span>
          <span class="QRcode" v-show="data.payMethod == 1" >
            <iframe id="myiFrame" class="QRcode-ali" :srcdoc="html"></iframe>
          </span>
          <span class="price">
            <img class="discount" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/优惠券.png">
            <div class="discount-text">已优惠 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;300</div>
            <div class="price-text">
              <span class="one">券后年卡</span>
              <span class="two">￥</span>
              <span class="three">{{ displayPrice }}</span>
              <span class="four">/年</span>
            </div>
          </span>
        </span>
      </div>
      <div class="vip-content-main" v-show="!isVIP">
        <span class="selected-background" style="margin-right:80px" :style="getVIPbackground(50)">
          <span class="selected-text" style="color: #e8f2fa;">

          </span>
          <span class="white-card" @click="setCurrentVIP(50,4)">
            <div class="one">单次决策卡</div>
            <br>
            <div class="two" style="font-size: 45px;">
              <span class="t1">￥</span>
              50元
            </div>
            <div class="four" style="font-weight: 1000; font-size: 25px;">24小时内使用</div>


          </span>
        </span>
        <span class="selected-background" style="margin-left:80px" :style="getVIPbackground(100)">
          <span class="selected-text">
          </span>
          <span class="white-card" @click="setCurrentVIP(100,5)">
            <div class="one">三次决策卡</div>
            <br>
            <div class="two" style="font-size: 45px;">
              <span class="t1">￥</span>
              100元
            </div>
            <div class="four" style="font-weight: 1000; font-size: 25px;">24小时内使用</div>

          </span>
        </span>
        <span class="pay-card">
          <span class="wx" @click="isAliPay = false">
            <img src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/微信支付.png">
            <br>
            <img :src="getSelectedSRC(false)" @click="setAliPay(false)">

            <br>
            微信支付
          </span>
          <span class="ali" @click="isAliPay = true">
            <img src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/支付宝.png">
            <br>
            <img :src="getSelectedSRC(true)" @click="setAliPay(true)">

            <br>
            支付宝支付
          </span>
          <span class="QRcode" v-show="data.payMethod == 2" >
            <QRCode  :value="wxUrl"></QRCode>
          </span>
          <span class="QRcode" v-show="data.payMethod == 1" >
            <iframe id="myiFrame" class="QRcode-ali" :srcdoc="html"></iframe>
          </span>
          <span class="price">
            <div class="price-text">
              <span class="one" style="font-size: 20px;">次决策卡</span>
              <span class="two">￥</span>
              <span class="three" style="font-size: 50px;">{{ currentVIP }}元</span>
            </div>
          </span>
        </span>
      </div>

      <span class="VIP-benefits">
        <span class="benefits-title">
          会员权益：
        </span>
        <span class="benefits-content">
          <br>
          10G超大无存储空间
          <br>
          解锁会员全部功能
          <br>
          解锁会员专属模板
          <br>
          不限制决策次数
          <br>
          无水高清文件下载
        </span>

        <router-link class="goto" to="/VIP">
          <br>
          其他权益请到个人中心
          <br>
          会员中心查看会员权益
        </router-link>

      </span>
      
    </div>
    <div class="discount-card" v-if="showDiscount">
      <img class="discount-img-close" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/关闭 1.png"
        @click="hiddenDiscount()">
      <img class="discount-img" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/首客特惠券.png" alt="">
      <img class="discount-img-button" src="./../assets/img/getVIP/superC经典支付页面UI/superC支付切图/立即领取.png"
        @click="hiddenDiscount()">
    </div>
    
    <Modal v-model:visible="visible" title="失控坐标:" @ok="handleOk">
      <p>支付成功...</p>
    </Modal>
  </div>
</template>




<style lang="scss" scoped>
@import "./..../../../assets/font/font.css";

.VIP-get-container {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.68);
  display: flex;
  width: 1250px;
  height: 850px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  font-family: 'alimama';

  .discount-card {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    /* 设置透明度 */
    top: -100%;
    left: -100%;
    width: 300%;
    height: 250%;
    z-index: 9;

    .discount-img {
      position: relative;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .discount-img-close {
      position: relative;
      top: 30%;
      left: 60%;
      z-index: 10;
      transform: translate(-50%, -50%);
    }

    .discount-img-button {
      position: relative;
      top: 60%;
      left: 31.5%;
      transform: translate(-50%, -50%);
    }
  }

  .top {
    position: relative;
    top: 0px;
    height: 220px;
    width: 100%;

    .title-background {
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .title {
      position: absolute;
      left: 5%;
      top: 25%;
      font-size: 50px;
      color: #fff;
    }
  }
  .vip-close{
    position: absolute;
    right: -15px;
    top: -15px;
    z-index: 15;
  }
  .VIP-content {
    top: 152px;
    position: absolute;

    .vip-content-main {
      position: absolute;
      top: 12%;
      right: 30px;
      // background-color: #a2d5f1;
      z-index: 5;
      width: 900px;
      height: 600px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 5px;

      justify-content: center;
      align-items: center;

      .selected-background {
        position: relative;
        border-radius: 20px;
        margin-left: 25px;
        width: 254px;
        height: 330px;
        display: flex;
        color: #fafafa;
        font-family: 'medium';

        .selected-text {
          z-index: 7;
          position: absolute;
          left: 18%;
          top: 5px;
          font-size: 22px;
        }

        .white-card {
          position: absolute;
          background-color: #ffffff;
          border-radius: 20px;
          left: 2px;
          top: 38px;
          width: 250px;
          height: 290px;
          display: flex;
          flex-direction: column;
          z-index: 6;
          font-size: 18px;
          font-weight: 900;
          padding-top: 20px;
          text-align: center;
          line-height: 39px;

          .one {
            color: black;
            font-size: 22px;
            padding-left: 20px;
            text-align: left;

          }

          .two {
            color: #ffc62e;
            font-size: 28px;

            .t1 {
              font-size: 20px;
              margin-right: -10px;
            }

            .t2 {
              font-size: 18px;
              margin-left: -5px;
            }
          }

          .three {
            color: #ababab;
            text-decoration: line-through;

            .th1 {
              font-size: 10px;
              margin-right: -5px;
            }

            .th2 {
              font-size: 10px;
              margin-left: -5px;
            }
          }

          .four {
            color: black;
          }

          .five {
            color: #ff5a00;
            font-size: 35px;

            .f1 {
              font-size: 20px;
              margin-right: -12px;
            }

            .f2 {
              font-size: 20px;
              margin-left: -5px;
            }
          }
        }
      }

      .pay-card {
        position: relative;
        background-color: #fff;
        border-radius: 30px;
        width: 900px;
        height: 200px;
        margin: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
          display: flex;
          flex-direction: row;
          margin: 10px;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .wx {
          width: 100px;
          padding-top: 5px;
        }

        .ali {
          // padding: 10px;
          width: 100px;
        }

        .QRcode {
          height: 170px;
          width: 250px;
        }

        .QRcode-ali {
          height: 170px;
          width: 250px;
          overflow:visible;
          padding-left: 40px; 
        }

        .price {
          display: flex;
          width: 350px;
          justify-content: center;
          align-items: center;

          .discount {
            height: 50px;
            width: 200px;
          }

          .discount-text {
            color: white;
            position: absolute;
            top: 57px;
            font-size: 20px;
            font-family: 'medium';
            font-weight: 1000;
            padding-left: 10px;
          }

          .price-text {
            display: flex;
            width: 100%;
            height: 50px;
            flex-direction: row;
            width: 350px;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-weight: 1000;
            color: #ff5a00;

            span {
              height: 40px;
              display: flex;
              text-align: center;
              display: flex;
              margin: 0;
            }

            .one {
              color: black;
              margin-right: -1px;
              padding-top: 10px;
            }

            .two {
              font-size: 25px;
              padding-top: 10px;
            }

            .three {
              font-family: 'medium';
              font-size: 40px;
            }

            .four {
              font-size: 25px;
              margin-left: -2px;
              padding-top: 10px;
            }
          }
        }
      }
    }

    span {
      z-index: 2;
    }

    .account-card {
      position: absolute;
      right: 0;
      top: 10px;
      z-index: 0;
    }

    .vip-card {
      position: absolute;
      left: 0;
      top: 10px;
      z-index: 0;
    }

    .account-card-click {
      position: absolute;
      right: 0;
      top: 10px;
      height: 60px;
      width: 50%;
      z-index: 3;

      .text {
        position: relative;
        top: 20%;
        height: 30px;
        left: 10%;
      }
    }

    .vip-card-click {
      position: absolute;
      left: 0;
      height: 60px;
      top: 10px;
      width: 50%;
      z-index: 3;

      .text {
        position: relative;
        top: 20%;
        left: 10%;
        height: 30px;
      }
    }

    .content-background {
      position: relative;
      z-index: 1;
    }

    .VIP-benefits {
      position: absolute;
      left: 5%;
      top: 18%;

    }

    .benefits-title {
      font-size: 40px;
      color: #4862d7;
      font-weight: 1000;
    }

    .benefits-content {
      position: relative;
      left: 2%;
      font-size: 25px;
      color: #04a9ff;
      font-weight: 1000;
      line-height: 75px;
    }

    .goto {

      position: relative;
      left: 4%;
      color: #5068d8;
      font-weight: 600;
      text-decoration: underline;
    }
  }


}</style>