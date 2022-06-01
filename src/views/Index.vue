<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Stats        from "@drecom/stats.js";
    
    import wModule from '@/wasm/module';

    const canvas = ref<HTMLCanvasElement | null>(null);
    const updateFlag = ref(false);


    onMounted(async () => {
        const stats = new Stats({ maxFPS: 200, maxMem: 100 });
        document.body.appendChild(stats.dom);

        window.addEventListener('keydown', function(event){
            event.stopImmediatePropagation();
        }, true);

        window.addEventListener('keyup', function(event){
            event.stopImmediatePropagation();
        }, true);

        if (canvas.value) {
            // @ts-ignore
            const instance = new wModule({
                canvas: document.querySelector<HTMLCanvasElement>("#canvas")!
            });
            const res = await instance;
            
            const Benchmark = res.Benchmark;
            const bench = new Benchmark({
                rectangles: 8000,
                circles:    0,
                textLabels: 0
            });
    
            bench.init();
            bench.render();

            bench.startLoop();

            // canvas.value.addEventListener("mousedown", (e) => {
            //     if (e.button === 0) {
            //         updateFlag.value = true;
            //     }
            // });


            // canvas.value.addEventListener("mousemove", _ => {
            //     if (updateFlag.value) {
            //         stats.begin();
            //             bench.loop();
            //         stats.end();
            //     }
            // });

            // canvas.value.addEventListener("mouseup", _ => {
            //     updateFlag.value = false;
            // });
        }
    });
</script>



<template>
    <div>
        <h1>index</h1>
        <canvas ref="canvas" id="canvas"></canvas>
    </div>
</template>