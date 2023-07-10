<script setup>
	import {
		ref
	} from 'vue';
	import {
		DatePicker,
		message,
		TimePicker,
		Upload,
		Button
	} from 'ant-design-vue';
	import dayjs from 'dayjs';
	import 'dayjs/locale/zh-cn';
	import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
	import {
		defineComponent
	} from 'vue';
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		getUserData,
		updateUser,
		getAddress
	} from './../../../../axios/api.js'
	import {
		ElNotification
	} from 'element-plus'
	import Cookies from 'js-cookie'
	import store from "../../../../store/index.js";
	import {
		onMounted
	} from 'vue';
	const handleChange = (info) => {
		if (info.file.status !== 'uploading') {
			message.success(`正在解析头像`);
		}
		if (info.file.status === 'done') {

		} else if (info.file.status === 'error') {
			message.error(`你上传的头像有异常`);
		}
	};
	const handleSuccess = (res) => {
		if(res.code==0){
			message.success(`头像上传成功！`);
			reloadUserData();
		}else{
			message.error(res.msg);
		}
	}
	const fileList = ref([]);
	const headers = {
		token: Cookies.get('token')
	};
	dayjs.locale('zh-cn');
	let router = useRouter();

	const goto = (path) => router.push(path);
	onMounted(() => {
		reloadUserData();
	});

	const reloadUserData = () => {
		nameActive.value = false;
		resumeActive.value = false;
		emailActive.value = false;
		addressActive.value = false;
		birthActive.value = false;
		user_info.value.phone = localStorage.getItem('superUserPhone');
		getUserData(user_info.value).then(async (res) => {
			if (res.data.code == '0') {
				user_info.value = res.data.data;
				const parts = user_info.value.userDate.split('-');
				const year = parts[0]; // 年份
				const month = parts[1]; // 月份
				const day = parts[2]; // 日
				const hour = parts[3]; // 小时

				user_info.value.userDate = `${year}年${month}月${day}日${hour}时`;

				// 获取地址
				const addressRes = await getAddress(
					{userId: user_info.value.sdid}
					);
					user_info.value.address=addressRes.data.data.specificAddress;
					console.log(user_info.value.address);
			} else {
				alert(res.data.msg + '为了安全考虑，关闭浏览器后需重新登录')
			}
		}).finally(() => {

		})
	}
	const isHover = ref(false);
	const currentUpdate = ref('');
	const getHoverSrc = (v) => {
		if (v === currentUpdate.value) {
			return "src/assets/img/personalPage/accountMessage/update_A.png";
		} else {
			return "src/assets/img/personalPage/accountMessage/update.png";
		}
	}
	const user_info = ref({
		sdid: '',
		userName: '',
		phone: '',
		password: '',
		userInfo: '',
		email: '',
		address: '',
		userDate: '',
		userPhoto: '',
	})
	const updateData = ref({
		phone: user_info.value.phone,
		userName: "",
		userInfo: "",
		email: "",
		userDate: ""
	});
	const clearUpdateData = () => {
		updateData.value = {
			phone: user_info.value.phone,
			userName: "",
			userInfo: "",
			email: "",
			userDate: ""
		}

	}

	const address = ref('');
	const dateFormat = 'YYYY年MM月DD日';
	const birth = ref('');
	const birth_hour = ref("");;

	const nameActive = ref(false);
	const resumeActive = ref(false);
	const emailActive = ref(false);
	const addressActive = ref(false);
	const birthActive = ref(false);
	const updateUserName = () => {
		nameActive.value = true;
		clearUpdateData();
		updateData.value.userName = user_info.value.userName;
	}
	const updateInfo = () => {
		resumeActive.value = true;
		clearUpdateData();
		updateData.value.userInfo = user_info.value.userInfo;
	}
	const updateEmail = () => {
		emailActive.value = true;
		clearUpdateData();
		updateData.value.email = user_info.value.email;
	}
	const updateDate = () => {
		birthActive.value = true;
		clearUpdateData();
	}
	const submitUpdate = (type) => {
		if (type == 'birth') {
			updateData.value.userDate += birth.value;
			updateData.value.userDate += birth_hour.value;
		}
		updateUser(updateData.value).then((res) => {
			if (res.data.code != 0) {
				ElNotification.warning({
					title: '修改失败',
					message: res.data.msg,
					showClose: false,
					duration: 5000,
				})
			} else {
				ElNotification.success({
					title: '修改成功！',
					message: '注：用户名一年仅可以修改3次',
					showClose: false,
				})
			}
		});
		reloadUserData();
	}
</script>
<template>
	<div class="account-message-index-container">


		<!-- 用户头像 -->
		<span class="icon">
			<!-- <img src="./../../../../assets/img/personalPage/accountMessage/def_icon.png" style=""> -->
			<img :src="user_info.userPhoto" style="">
			<Upload v-model:file-list="fileList" action="http://superc.vipgz4.91tunnel.com/api/upload
			" :showUploadList="false" :headers="headers" @change="handleChange" :on-success="handleSuccess">
				<img class="update" :src="getHoverSrc('icon')" @mouseover="currentUpdate = 'icon'"
					@mouseout="currentUpdate = ''">
			</Upload>
		</span>

		<!-- 用户名 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/name.png">
			预测专家
			<font v-show="!nameActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.userName }}</font>
			<img v-show="!nameActive" :src="getHoverSrc('name')" @mouseover="currentUpdate = 'name'"
				@mouseout="currentUpdate = ''" @click="updateUserName()">
			<el-input v-show="nameActive" v-model="updateData.userName" class="elInput" />
			<img v-show="nameActive" src="./../../../../assets/img/personalPage/accountMessage/yes.png"
				@click="submitUpdate()">
			<img v-show="nameActive" src="./../../../../assets/img/personalPage/accountMessage/no.png"
				@click="nameActive = false">

		</div>
		<div class='divider'></div>

		<!-- id -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/id.png">
			SSID
			<font v-show="!idActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.sdid }}</font>
		</div>
		<div class='divider'></div>

		<!-- 密码 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/password.png">
			密码
			<font v-show="!passwordActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.password }}</font>
			<img v-show="!passwordActive" :src="getHoverSrc('password')" @mouseover="currentUpdate = 'password'"
				@mouseout="currentUpdate = ''" @click="goto('repswd')">
		</div>
		<div class='divider'></div>

		<!-- 手机 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/phone.png">
			手机
			<font v-show="!phoneActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.phone }}</font>
			<img v-show="!phoneActive" :src="getHoverSrc('phone')" @mouseover="currentUpdate = 'phone'"
				@mouseout="currentUpdate = ''" @click="goto('rephone')">
		</div>
		<div class='divider'></div>

		<!-- 简介 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/resume.png">
			个人简介
			<font v-show="!resumeActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.userInfo }}</font>
			<img v-show="!resumeActive" :src="getHoverSrc('resume')" @mouseover="currentUpdate = 'resume'"
				@mouseout="currentUpdate = ''" @click="updateInfo()">
			<el-input v-show="resumeActive" v-model="updateData.userInfo" class="elInput" />
			<img v-show="resumeActive" src="./../../../../assets/img/personalPage/accountMessage/yes.png"
				@click="submitUpdate()">
			<img v-show="resumeActive" src="./../../../../assets/img/personalPage/accountMessage/no.png"
				@click="resumeActive = false">
		</div>
		<div class='divider'></div>

		<!-- 邮箱 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/email.png">
			邮箱
			<font v-show="!emailActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.email }}</font>
			<img v-show="!emailActive" :src="getHoverSrc('email')" @mouseover="currentUpdate = 'email'"
				@mouseout="currentUpdate = ''" @click="updateEmail()">
			<el-input v-show="emailActive" v-model="updateData.email" class="elInput" />
			<img v-show="emailActive" src="./../../../../assets/img/personalPage/accountMessage/yes.png"
				@click="submitUpdate()">
			<img v-show="emailActive" src="./../../../../assets/img/personalPage/accountMessage/no.png"
				@click="emailActive = false">
		</div>
		<div class='divider'></div>

		<!-- 生日 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/birth.png">
			阳历生日
			<font v-show="!birthActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.userDate }}</font>
			<img v-show="!birthActive" :src="getHoverSrc('birth')" @mouseover="currentUpdate = 'birth'"
				@mouseout="currentUpdate = ''" @click="updateDate()">
			<DatePicker v-show="birthActive" v-model:value="birth" class="elInput" style="width: 200px;"
				:format="dateFormat" placeholder="请输入您的生日日期" valueFormat="YYYY-MM-DD-" :locale="locale" />
			<TimePicker v-show="birthActive" v-model:value="birth_hour" format="HH时" valueFormat="HH"
				:locale="locale" />
			<img v-show="birthActive" src="./../../../../assets/img/personalPage/accountMessage/yes.png"
				@click="submitUpdate('birth')">
			<img v-show="birthActive" src="./../../../../assets/img/personalPage/accountMessage/no.png"
				@click="birthActive = false">
		</div>
		<div class='divider'></div>

		<!-- 地址 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/address.png">
			地址管理
			<font v-show="!addressActive" class="contentInput" style="color: #8f8f8f;">{{ user_info.address }}</font>
			<img v-show="!addressActive" :src="getHoverSrc('address')" @mouseover="currentUpdate = 'address'"
				@mouseout="currentUpdate = ''" @click="goto('/updateAddress/'+user_info.sdid+'/'+user_info.address)">
		</div>
		<div class='divider'></div>

		<!-- 注销 -->
		<div class="unit">
			<img src="./../../../../assets/img/personalPage/accountMessage/out.png">
			账号注销
			<router-link to="/account_logout" class="contentInput"
				style="color: #ffbc4d;font-size:18px">立即注销</router-link>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	@import "./../../../../assets/font/font.css";

	.account-message-index-container {
		position: relative;
		display: flex;
		justify-content: center;
		padding-top: 30px;
		flex-direction: column;
		padding-left: 50px;
		line-height: 10px;

		.icon {
			position: absolute;
			top: 100px;
			right: 140px;
			width: 178px;
			height: 178px;

			.update {
				position: absolute;
				top: 5px;
				right: 2px;
			}
		}

		.unit {
			width: 650px;
			text-align: left;
			height: 60px;
			display: flex;
			align-items: center;
			color: #ff9072;
			font-size: 23px;
			font-family: medium;

			.elInput {
				width: 150px;
			}

			.contentInput {
				padding-left: 20px;
				padding-right: 30px;
				text-align: center;
				color: #8f8f8f;
			}

			img {
				margin-right: 20px;
			}
		}

		.divider {
			width: 80%;
			border-top: 1px solid #efefef;
			/* 上边框为1像素宽的实线 */
			margin: 10px 0;
			/* 设置分割线上下的外边距 */
		}



	}
</style>