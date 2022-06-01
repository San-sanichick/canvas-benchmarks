<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import wModule from '@/wasm/module';

    const init = async () => {
        // @ts-ignore
        const instance = new wModule({
            canvas: document.querySelector<HTMLCanvasElement>("#canvas")!
        });
        const res = await instance;
        const Benchmark = res.Benchmark;
        const bench = new Benchmark({
            rectangles: 200,
            circles:    200,
            textLabels: 200
        });

        bench.init();
        bench.render();
    }

    onMounted(() => {     
        init();
    });
</script>



<template>
    <div>
        <h1>index</h1>
        <canvas id="canvas"></canvas>
    </div>
</template>