<script setup lang="ts">
    import VanillaBench from '@/canvases/vanilla/VanillaCanvasBench';
    import Stats        from "@drecom/stats.js";
    import { onMounted, ref } from 'vue';

    const canvas = ref<HTMLCanvasElement | null>(null);

    const updateFlag = ref(false);

    onMounted(() => {
        const stats = new Stats({ maxFPS: 200, maxMem: 100 });
        document.body.appendChild(stats.dom);

        if (canvas.value) {
            const bench = new VanillaBench(canvas.value, {
                // rectangles are the cheapest for canvas to draw
                rectangles: 2000,
                // circles are slower
                circles: 2000,
                // text is the most expensive draw call
                textLabels: 2000
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
                    // bench.debugRender();
                }
            });

            canvas.value.addEventListener("mouseup", _ => {
                updateFlag.value = false;
            });
        }        
    });
</script>

<template>
    <div>
        <canvas 
            ref="canvas"
            width="800"
            height="800"></canvas>
        <!-- <button @click="">reset</button> -->

    </div>
</template>
