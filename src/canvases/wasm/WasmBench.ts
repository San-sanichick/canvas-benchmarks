import type { Canvas, CanvasKit }    from "canvaskit-wasm";

import type BenchSettings from "../benchSettings";
import type WasmDrawable  from "./Shapes/WasmDrawable";

import randomInRange      from "@/utils/randomInRange";
import WasmRect from "./Shapes/WasnRect";


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

    public init() {
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