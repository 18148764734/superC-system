<template>
  <div class="main-center-wrap">
    <div style="margin-bottom: 24px"></div>
    <div class="main m-2">
      <a href="main.html">您已获得免费3次决策机会，请点击进入对应的决策系统。</a>

    </div>
<!-- 原命路由跳转 -->
    <div class="container is-fullhd content has-text-centered has-background-primary-light" style="margin-bottom: 0">
      <div class="enterSystem">
        <form>
          <router-link to="/origin">
            <img src="../assets/img/1.jpg" class="round" />
            <p class="has-text-centered">
            <button class="button is-warning m-4">
              点击进入原命决策系统
            </button>
          </p>
          </router-link>

          
          <br />
        </form>
      </div>

<!-- 大运路由跳转 -->
      <div class="enterSystem">
        <form>
          <router-link to="/dayun">
            <img src="../assets/img/2.jpg" id="bigy" class="round" alt="大运" href="#" />
            <p class="has-text-centered">
            <button class="button is-warning m-4">
              点击进入大运决策系统
            </button>
          </p>
          </router-link>
          
          <br />
        </form>
      </div>

<!-- 流年路由跳转 -->
      <div class="enterSystem">
        <form>
          <router-link to="/liunian">
            <img src="../assets/img/3.jpg" id="watern" class="round" alt="流年"  />
            <p class="has-text-centered">
            <button class="button is-warning m-4" @click="toLiunian()">
              点击进入流年决策系统
            </button>
          </p>
          </router-link>
          
          
          <br />
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import router from "../router/index.ts";
function goto(value) {
  router.push({path: '/'+value})
}
function toOrigin() {
  router.push({path: '/origin'})
}
function toDayun() {
  router.push({path: '/dayun'})
}
function toLiunian() {
  router.push({path: '/liunian'})
}
</script>


<style>
@import url("../assets/css/main.css");
</style>