<template>
	<div class="container">
		<img class="back" src="./../../../../assets/img/personalPage/accountMessage/login_out/back.png"
			@click="goto('/accountMessage')">
		<img class="logout-img" src="./../../../../assets/img/personalPage/accountMessage/login_out/告别.png">
		<div>
			<span class="title">真的要告别善音同学了吗？</span>
			<br>
			<img class="logout-button" src="./../../../../assets/img/personalPage/accountMessage/login_out/改变主意.png"
				@click="goto('/accountMessage')">
			<img class="logout-button" src="./../../../../assets/img/personalPage/accountMessage/login_out/确认注销.png"
				@click="goto('/account_logout2')">
		</div>

	</div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
let router = useRouter();
const goto = (path) => router.push(path);
</script>

<style lang="scss" scoped>
@import "./../../../../assets/font/font.css";

.container {
	position: relative;
	display: flex;
	justify-content: center;
	padding-top: 30px;
	flex-direction: column;
	padding-left: 30px;
	line-height: 10px;

	.logout-button {
		margin: 20px;
		padding-top: 100px;
	}

	.logout-img {
		margin-bottom: 40px;
	}

	.back {
		position: absolute;
		top: 40px;
		left: 40px;
	}

	.title {
		font-size: 30px;
		color: #546bbc;
		font-family: medium;
		font-weight: 100;
		margin: 50px;
	}


}
</style>