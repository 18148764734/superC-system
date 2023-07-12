<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="top">
          <font class="font">订单名称</font>
          <font class="font">订单金额</font>
          <font class="font">订单类型</font>
          <font class="font">下单时间</font>
          <font class="font">订单状态</font>
        </div>
      </el-header>
      <el-main class="bills-list">
        <el-collapse style="height: 780px">
          <billsUnit
            v-for="bill in billsList"
            :key="bill.orderId"
            :bill="bill"
          />
        </el-collapse>
      </el-main>
      <div class="bottom">
        
      </div>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getBills } from "../../../axios/api";
import billsUnit from "./bills-unit.vue";
const billsList = ref();
const billsCondition = reactive({
  pageNum: 1,
  phone: localStorage.getItem("superUserPhone"),
  pageSize: 10,
});
onMounted(async () => {
  const res = await getBills(billsCondition);
  billsList.value = res.data.data.data;
  console.log(billsList.value);
});
</script>

<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.container {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  flex-direction: column;
  padding-left: 30px;
  line-height: 10px;
  align-items: center;
  .top {
    border: 3px solid #89fef6;
    border-radius: 20px;
    width: 800px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    .font {
      color: #3dccff;
      font-size: 23px;
      padding: 30px;
      font-family: medium;
    }
  }
  .bottom {
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin: 0 auto;
    width: 50px;
    height: 50px;
  }
  .bills-list {
    /* 隐藏默认滚动栏 */
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* 定义滚动栏样式 */
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #57e9f4;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: #57e9f4;
    }
  }
}
</style>
