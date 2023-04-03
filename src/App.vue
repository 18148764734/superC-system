<script setup >
    console.log(import.meta.env)
</script>

<template>
  
   <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped>
    body{
        padding: 0;
        margin: 0;
    }
</style>
