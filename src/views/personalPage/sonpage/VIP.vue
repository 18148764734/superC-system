<template>
  <div class="VIP-container">
    <img  class = "title" src="./../../../assets/img/personalPage/VIP/会员标题.png">
    <img  class = "getVIP" src="./../../../assets/img/personalPage/VIP/开通会员按钮.png" @click="store.state.showGetVIP=true">
    <img  class = "center" src="./../../../assets/img/personalPage/VIP/中间电路板框.png">
    <img  class = "right-top" src="./../../../assets/img/personalPage/VIP/右上角打折.png">
    <img  class = "right-bottom" src="./../../../assets/img/personalPage/VIP/右下角活动名额.png">
    <img  class = "left-top" src="./../../../assets/img/personalPage/VIP/左上决策次数.png">
    <span class="count"> 3 </span>
    <img  class = "left-bottom" src="./../../../assets/img/personalPage/VIP/左下角实体资料打折.png">
  </div>
</template>

<script setup>
  import store from "./../../../store/index.js";
  
</script>


<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.VIP-container {
  position: relative;
  display: flex;
  justify-content: center;
    img{
      transform: scale(1.2);
    }
    .count{
      position: absolute;
      top: 383px;
      left: 177px;
      font-family: "medium";
      color: white;
    }
    .title{
      position: absolute;
      left: 280px;
      top: 50px;
    }
    .getVIP{
      position: absolute;
      left: 380px;
      top: 160px;
    }

    .center{
      position: absolute;
      left: 210px;
      top: 310px;
    }
    .left-bottom{
      position: absolute;
      bottom: 100px;
      left: 80px;
    }
    .left-top{
      position: absolute;
      top: 180px;
      left: 80px;
    }
    
    .right-top{
      position: absolute;
      right: 80px;
      top: 180px;
    }
    .right-bottom{
      position: absolute;
      bottom: 100px;
      right: 80px;
    }
}
</style>