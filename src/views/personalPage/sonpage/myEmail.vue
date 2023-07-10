<template>
  <div class="email-Container">
      <unit v-for="unit in emailListData.list" :key="unit.id"
      :data="unit"/>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getEmaiList } from "../../../axios/api";
import unit from "./myEmail-unit.vue";
const query = reactive(
  {
    pageNum:1
  }
);
const emailListData = ref(
    {
      list: []
    } 
  );
  onMounted(
    async ()=>{
      const res = await getEmaiList(query);
      console.log(res.data.data);
      emailListData.value = res.data.data;
    }
  )
</script>


<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.email-Container {
  padding: 45px;
  display: flex;
  flex-direction: column;
  overflow: auto;
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
</style>