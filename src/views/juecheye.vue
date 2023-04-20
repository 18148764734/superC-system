<template>
    <br>
    <div class="divider">
        <span class="left-line"></span>
        <span class="text">决策结果</span>
        <span class="right-line"></span>
    </div>
    <div class="gif">
        <img src="../assets/img/juecheye/flower.gif" alt="Example GIF">
    </div>
    <br>
    <div class="search">
        <span class="date-select">
            <img 
            src="../assets/img/juecheye/calender.png" class="search-calender-img"
            >
            <span class="search-calender-font"> 
                请选择决策日期
            </span>

            <span class="search-calender-search-img">
                <img 
                src="../assets/img/juecheye/search.png" 
                style="width: 22px;height: 22px;"
                >
            </span>
        </span>
        <span class="search-search-byname">
            <span class="search-byname-font"> 
                请输入被预测者姓名查询报告&nbsp;例:周星驰
            </span>
            <img 
                src="../assets/img/juecheye/x.png" 
                style="width: 16px;height: 16px;"
                >
            <span class="search-byname-right">
                查询
            </span>
        </span>
    </div>
    <div class="result-Page">
        <unit></unit>
    </div>
    <br>
</template>

<script setup>
import unit from './juecheye-unit.vue'

</script>

<style scoped>
.result-Page{
    padding-top: 10px;
    padding-left: 15px;
    background-color: #fbfcff;
    position: relative;
    width: 80%;
    height: 650px;
    margin: 0 auto;
    outline: 1px solid rgb(206, 206, 206);
    border-radius: 20px;
    @media only screen and (max-width: 1080px) {
        height: 2000px;
        width: 380px;
    }
}
.search-byname-right{
    display: flex;
    align-items: center; /* 垂直居中 */
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    font-size: 15px;
    color: white;
    width: 65px;
    height: 30px;
    margin-left: 20px;
    padding-left: 18px;
    background-color: #4dfac9;
}
.search-byname-font{
    color: rgb(165, 160, 160);
    margin-left: 15px;
    width: 320px;
}
.search-search-byname{
    margin-left: 20px;
    display: flex;
    align-items: center; /* 垂直居中 */
    width: 436px;
    font-size: 15px;
    color: rgb(98, 97, 97);
    background-color: #ffffff;
    height: 30px;
    padding-left: 5px;
    border-radius: 100px;
    outline: 1px solid rgb(231, 231, 231);
    margin-bottom: 20px;

}
.search-calender-search-img {
    
    display: flex;
    align-items: center; /* 垂直居中 */
    outline: 1px solid rgb(226, 226, 226);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    width: 40px;
    height: 26px;
    margin-left: 10px;
    padding-left: 8px;
    background-color: white;
}
.search-calender-img {
    width: 22px;
    height: 22px;
}
.search-calender-font {
    margin-left: 35px;
}

.search{
    width: 690px;
    margin: 0 auto;
    display: flex;
    align-items: center; /* 垂直居中 */
    @media only screen and (max-width: 1080px) {
        flex-direction: column;
        width: 360px;
    }
}
.date-select{
    display: flex;
    margin-bottom: 20px;
    align-items: center; /* 垂直居中 */
    width: 212px;
    font-size: 11px;
    font-weight:500;
    color: rgb(98, 97, 97);
    background-color: #defff7;
    height: 30px;
    padding-left: 20px;
    border-radius: 100px;
}
.divider {
    width: 300px;
    margin: 0 auto;
    position: relative;
}
.gif {
    width: 240px;
    margin: 0 auto;
}

.text {
    position: relative;
    z-index: 1;
    display: block;
    width: 80px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #495bb5;
}

.left-line {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 30%;
    background-color: #97a1d4;
    z-index: 0;
}

.right-line {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 30%;
    background-color: #97a1d4;
    z-index: 0;
}
</style>