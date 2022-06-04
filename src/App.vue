<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
    <div class="link-container">
        <router-link to="/">Index</router-link>
        <router-link to="/custom">Custom</router-link>
        <router-link to="/vanilla">Vanilla</router-link>
        <router-link to="/webgl-ts">WebGL + TS</router-link>
        <router-link to="/webgl-wasm">WebGL + WASM</router-link>
        <router-link to="/math">Math test</router-link>
    </div>

</template>

<style>
    .link-container {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        column-gap: 10px;
    }
</style>
