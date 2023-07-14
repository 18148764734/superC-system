<template>
  <div class="email-Container">
      <unit v-for="unit in emailListData.list" :key="unit.id"
      :data="unit"/>
      <div class="bottom">
        <img src="./../../../assets/img/personalPage/bills/上一页.png" @click="query.pageNum>1?query.pageNum--:haha()">
        <span class="page"  v-for="(page,index) in pageArr" :key="index" @click="query.pageNum = page">
          {{page}}
        </span>
        <img src="./../../../assets/img/personalPage/bills/下一页.png" @click="query.pageNum<pageArr.length?query.pageNum++:haha()">
      </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { message } from 'ant-design-vue'
import { getEmaiList } from "../../../axios/api";
import unit from "./myEmail-unit.vue";
const query = reactive(
  {
    pageNum:1
  }
);
const pageArr = ref([]);

const emailListData = ref(
    {
      list: []
    } 
  );
  onMounted(
    async ()=>{
      const res = await getEmaiList(query);
      emailListData.value = res.data.data;
      pageArr.value.length = res.data.data.pages;
      for(var i = 0; i < pageArr.value.length;i++){
        pageArr.value[i]=i+1;
      }
    }
  )
  watch(
    query,
  async ()=>{
    const res = await getEmaiList(query);
    emailListData.value = res.data.data;
  }
)
const haha = () => {
  message.error("不能再翻页了！")
}
</script>


<style lang="scss" scoped>
@import "./../../../assets/font/font.css";
.email-Container {
  .bottom {
    position: absolute;
    bottom: 30px;
    transform: translate(-50%, -50%);
    left: 50%;
    display: flex;
    .page{
      color: #4b63b8;
      font-size: 18px ;
      font-family: "medium";
      display: flex;
      align-items: center;
      margin: 5px;
      cursor: pointer;
    }
    img{
      cursor: pointer;

    }
  }
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