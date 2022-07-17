import type { Canvas, CanvasKit }    from "canvaskit-wasm";
import axios from "axios";

import type BenchSettings from "../benchSettings";
import type WasmDrawable  from "./Shapes/WasmDrawable";

import WasmRect   from "./Shapes/WasmRect";
import WasmCircle from "./Shapes/WasmCircle";

import randomInRange from "@/utils/randomInRange";
import WasmText from "./Shapes/WasmText";

export default class WasmBench {
    private _canvas: HTMLCanvasElement;

    private _width: number;
    private _height: number;

    private _kit: CanvasKit;

    private _settings: BenchSettings;

    private _drawables: Array<WasmDrawable>;


    constructor(canvas: HTMLCanvasElement, kit: CanvasKit, settings: BenchSettings) {
        this._canvas = canvas;
        this._kit = kit;

        this._width  = this._canvas.width;
        this._height = this._canvas.height;

        this._drawables = [];
        this._settings = settings;
    }

    public async init() {
        const {
            rectangles,
            circles,
            textLabels
        } = this._settings;

        for (let i = 0; i < rectangles; i++) {
            this._drawables.push(
                new WasmRect(
                    randomInRange(this._width),
                    randomInRange(this._height),
                    randomInRange(100, 50),
                    randomInRange(100, 50),
                    this._kit
                )
            );
        }

        for (let i = 0; i < circles; i++) {
            this._drawables.push(
                new WasmCircle(
                    randomInRange(this._width),
                    randomInRange(this._height),
                    randomInRange(100, 50),
                    this._kit
                )
            );
        }

        const fontMgr = await this.loadFonts();
        for (let i = 0; i < textLabels; i++) {
            this._drawables.push(
                new WasmText(
                    randomInRange(this._width),
                    randomInRange(this._height),
                    this._kit,
                    fontMgr!
                )
            );
        }

    }

    private async loadFonts() {
        const fontUrls = [
            "https://storage.googleapis.com/skia-cdn/google-web-fonts/Roboto-Regular.ttf",
        ];

        const promises = [];

        for (let i = 0; i < fontUrls.length; i++) {
            promises.push(
                axios.get(fontUrls[i], {
                    responseType: "arraybuffer"
                })
            );
        }

        try {
            const res = await Promise.all(promises);

            const fontData = [];
            for (let i = 0; i < res.length; i++) {
                fontData.push(res[i].data);
            }
            
            return this._kit.FontMgr.FromData(fontData as any);
        } catch (error) {
            console.error(error);
        }
    }

    public update() {
        for (let i = 0; i < this._drawables.length; i++) {
            this._drawables[i].update(
                this._drawables[i].pos.x + randomInRange(2, -2), 
                this._drawables[i].pos.y + randomInRange(2, -2)
            );
        }
    }

    public render(renderer: Canvas) {
        renderer.clear(this._kit.BLACK);
        for (let i = 0; i < this._drawables.length; i++) {
            this._drawables[i].render(this._kit, renderer);
        }
    }
}