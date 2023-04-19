<template>
    <div class="result-Page-unit" @click="handleCheck(data)">
        <span class="unit-ym-title">时空坐标 原命局报告</span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #ffe6de;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 大运报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>
    <div class="result-Page-unit" style="background-color: #defff7;" @click="handleCheck(data)">
        <span class="unit-title">时空坐标 流年报告 </span>
        <span class="unit-name"> 姓名:曾林俊</span>
        <span class="time-location">
            <img src="../assets/img/juecheye/location.png" class="time-location-img">
            <span class="time-location-font">
                乙卯 癸未 壬午 乙已
            </span>
        </span>
        <span class="time">
            预知时间:公元2023年4月7日 23:35
        </span>
    </div>

    <div class="page">
        <img src="../assets/img/juecheye/left.png" class="time-location-img">
        <span class='page-num'>
            1
        </span>
        <span class='page-num'>
            2
        </span>
        <span class='page-num'>
            3
        </span>
        <span class='page-num'>
            4
        </span>
        <span class='page-num'>
            5
        </span>
        <img src="../assets/img/juecheye/right.png" class="time-location-img" style="margin-left: 15px;">
    </div>
</template>

<script setup>

</script>
  
<style scoped>
.page-num {
    font-size: 18px;
    padding-left: 15px;
    color: #848484;
}

.page {
    position: relative;
    bottom: -50px;
    width: 150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    @media only screen and (max-width: 900px) {
        margin-left: 100px;
    }
}

.time {
    font-size: 12px;
    padding-left: 30px;
    @media only screen and (max-width: 900px) {
        padding-left: 0px;
        padding-top: 10px;
        font-size: 18px;
    }
}

.time-location-font {
    padding-left: 10px;
    color: #f8ce5b;
    font-size: 16px;
    font-weight: 500;
    @media only screen and (max-width: 900px) {
        padding-left: 5px;
        font-size: 17px;
    }
}

.time-location-img {
    width: 20px;
    height: 20px;
    @media only screen and (max-width: 900px) {
        margin-left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 21px;
    }
}

.time-location {
    padding-left: 10px;
    width: 200px;
    height: 24px;
    background-color: white;
    border-radius: 16px;
    margin-left: 300px;
    display: flex;
    align-items: center;
    /* 垂直居中 */

    @media only screen and (min-width: 900px) and (max-width: 1580px) {
        margin-left: 60px;
    }

    @media only screen and (max-width: 900px) {
        margin-top:10px;
        margin-left: 0px;
        width: 220px;
        height: 30px;
        border-radius: 12px;
    }
}

.unit-name {
    padding-left: 30px;
    font-size: 12px;
    color: black;
    @media only screen and (max-width: 900px) {
        margin-top:5px;
        padding-left:0px;
        font-size:16px
    }
}

.unit-title {
    color: #495bb5;
    margin-right: 15px;
    font-size: 15px;
    font-weight: 600;
    @media only screen and (max-width: 900px) {
        padding-top: 20px;
        font-size:20px
    }
}
.unit-ym-title {
    color: #495bb5;
    font-size: 15px;
    font-weight: 600;
    @media only screen and (max-width: 900px) {
        padding-top: 20px;
        font-size:20px
    }
}

.result-Page-unit {
    padding-left: 40px;
    color: rgb(98, 97, 97);
    background-color: #dee2ff;
    height: 40px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow:
        0.1px 0.5px 0.9px rgba(0, 0, 0, 0.05),
        1px 4px 7px rgba(0, 0, 0, 0.1);
    ;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        padding-left:0px;
        height: 170px;
        margin-top:40px
    }
}
</style>