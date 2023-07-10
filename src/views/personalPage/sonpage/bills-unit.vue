<script setup>
const props = defineProps(["bill"]);
</script>
<template>
  <div class="bills-unit">
    <el-collapse-item :name="bill.id">
      <template #title>
        <font class="name">{{ bill.productName }}</font>
        <font class="total">{{ bill.payMoney }}</font>
        <font class="type">{{ bill.productType }}</font>
        <font class="time">{{ bill.orderTime }}</font>
        <font class="state">{{ bill.payStatus }}</font>
      </template>
      <span class="bill-content">
        <div class="content-line">
            <a href="" class="content-a">取消订单</a>
        </div>
        <div class="content-line">
          <span class="content-title">产品名称:</span>
          <span class="content-value">{{ bill.productName }}</span>

          <span class="content-title">付款时间:</span>
          <span class="content-value">{{ bill.payTime ? bill.payTime : "---" }}</span>
        </div>
        <div class="content-line">
          <span class="content-title">订单号码:</span>
          <span class="content-value">{{ bill.orderId }}</span>

          <span class="content-title">支付方式:</span>
          <span class="content-value" style="color:#4d65b9;width: 200px;">
            {{ bill.payMethodType }}
            <a class="content-a" style="margin-left: 10px;"> 点击更换支付方式</a>
        </span>
        </div>
        <div class="content-line">
          <span class="content-title">SDBK交易号:</span>
          <span class="content-value">{{ bill.sdbknumber }}</span>

          <span class="content-title">购买天数:</span>
          <span class="content-value">{{ bill.dayTimeType }}</span>
        </div>
      </span>
    </el-collapse-item>
  </div>
</template>
<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.bills-unit {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  padding-left: 50px;
  line-height: 10px;
  font-family: medium;
  width: 800px;
  .bill-content {
    .content-line {
      flex-basis: 100%; /* 独占一行 */
      line-height: 30px;
        .content-a{
            color: red;
            font-size: 14px;
        }
      .content-title {
        display:inline-block;
        width: 100px;
      }
      .content-value{
        display:inline-block;
        width: 150px;
        margin-left: 10px;
        margin-right: 50px;
      }
    }

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 100;
  }
  .name {
    font-size: 16px;
    font-weight: 800;
    color: #060606;
  }
  .total {
    font-size: 14px;
    font-weight: 800;
    color: #5068ba;
    padding-left: 85px;
  }
  .type {
    font-size: 14px;
    font-weight: 800;
    padding-left: 95px;
    padding-right: 30px;
    color: #5068ba;
  }
  .time {
    font-size: 14px;
    font-weight: 800;
    padding-left: 35px;
    padding-right: 30px;
    color: #060606;
  }
  .state {
    font-size: 16px;
    font-weight: 800;
    padding-left: 45px;
    padding-right: 45px;
    color: #48d970;
  }
}
</style>
