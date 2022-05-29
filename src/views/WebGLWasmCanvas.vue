<script setup lang="ts">
    import { onMounted, ref }           from "vue";

    // ? https://github.com/vitejs/vite/discussions/7901
    // @ts-ignore
    import CanvasKitInit from "canvaskit-wasm/bin/canvaskit.js";
    import CanvasKitWasm from "canvaskit-wasm/bin/canvaskit.wasm?url";
    import Stats      from '@drecom/stats.js';
    import type { Canvas, CanvasKit, CanvasKitInit as ckInitType } from "canvaskit-wasm";
    import WasmBench from "@/canvases/wasm/WasmBench";


    const canvas = ref<HTMLCanvasElement | null>(null);

    const ckInit: typeof ckInitType = CanvasKitInit;

    const updateFlag = ref(false);

    onMounted(async () => {
        const stats = new Stats({ maxFPS: 200, maxMem: 200 });
        document.body.appendChild(stats.dom);

        if (canvas.value) {
            const kit = await ckInit({ locateFile: () => CanvasKitWasm });

            const surface = kit.MakeCanvasSurface(canvas.value!);

            const bench = new WasmBench(canvas.value, kit, {
                rectangles: 2000,
                circles:    0,
                textLabels: 0
            });

            bench.init();

            const draw = (canvas: Canvas) => {
                bench.update();
                bench.render(canvas);
            }

            surface?.requestAnimationFrame(draw);
            
            canvas.value.addEventListener("mousedown", (e) => {
                if (e.button === 0) {
                    updateFlag.value = true;
                }
            });

            canvas.value.addEventListener("mousemove", _ => {
                if (updateFlag.value) {
                    stats.begin();
                        surface?.requestAnimationFrame(draw);
                    stats.end();
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

    </div>
</template>
