<script setup lang="ts">
    import WebGlBench from '@/canvases/webgl/WebGlTsBench';
    import Stats      from '@drecom/stats.js';
    import { onMounted, ref } from 'vue';

    const canvas = ref<HTMLCanvasElement | null>(null);

    const updateFlag = ref(false);

    onMounted(() => {
        const stats = new Stats({ maxFPS: 200, maxMem: 100 });
        document.body.appendChild(stats.dom);

        if (canvas.value) {
            const bench = new WebGlBench(canvas.value, {
                // Pixi.js seems to handle both rectangles and circles quite well
                rectangles: 200,
                circles:    200,
                // text is the bottleneck here, right now I'm not using BitmapText,
                // which is supposed to be faster, but more complicated to setup
                textLabels: 200
            });

            bench.init();
            bench.render();

            canvas.value.addEventListener("mousedown", (e) => {
                if (e.button === 0) {
                    updateFlag.value = true;
                }
            });

            canvas.value.addEventListener("mousemove", _ => {
                if (updateFlag.value) {
                    stats.begin();
                        bench.update();
                        bench.render();
                    stats.end();
                }
            });

            canvas.value.addEventListener("mouseup", _ => {
                updateFlag.value = false;
            });
        }
    })
</script>

<template>
    <div>
        <canvas 
            ref="canvas"
            width="800"
            height="800"></canvas>
    </div>
</template>
