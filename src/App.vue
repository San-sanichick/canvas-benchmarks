<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
    <div>
        <router-link to="/">Index</router-link>
        <router-link to="/vanilla">Vanilla</router-link>
        <router-link to="/webgl-ts">WebGL + TS</router-link>
        <router-link to="/webgl-wasm">WebGL + WASM</router-link>
    </div>

</template>

<style>

</style>
