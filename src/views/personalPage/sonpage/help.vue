<template>
  <div class="container">
    <div class="title">扫码企业微信 在线问询</div>
    <div class="card">
      <img src="./../../../assets/img/personalPage/help/人工客服比心.png" alt="">
      <img src="./../../../assets/img/personalPage/help/人工客服比心.png" alt="">
    </div>
  </div>
</template>

<script setup>
</script>


<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
    .title{
      font-size: 30px;
      color: #546bbc;
      font-family: medium;
      font-weight: 100;
      margin-bottom: 90px;
      transform: scale(1.2);
    }
    .card {
      
  transform: scale(1.2);
      margin-top: 20px;
      width: 563px;
      height: 549px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #fff;
      border: 3px solid #ccc;
      border-radius: 40px;
      padding: 10px;
      box-sizing: border-box;
      /* 其他样式 */
    }
}
</style>