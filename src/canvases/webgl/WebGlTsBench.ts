import * as PIXI    from "pixi.js";
import { Viewport } from "pixi-viewport";


import type BenchSettings from "../benchSettings";
import type WebGlDrawable from "./Shapes/WebGLDrawable";


export default class WebGlBench {
    private canvas: HTMLCanvasElement;

    private width: number;
    private height: number;

    private drawables: Array<WebGlDrawable>;
    private settings: BenchSettings;

    private _app: PIXI.Application;
    private _viewport: Viewport;

    constructor(canvas: HTMLCanvasElement, settings: BenchSettings) {
        this.canvas = canvas;

        this.width  = this.canvas.width;
        this.height = this.canvas.height;

        this.drawables = [];

        this.settings = settings;

        this._app = new PIXI.Application({
            view: this.canvas
        });
        this._viewport = new Viewport({
            screenWidth: this.width,
            screenHeight: this.height,
            worldWidth: 5000,
            worldHeight: 5000,
            interaction: this._app.renderer.plugins.interaction
        });

        this._app.stage.addChild(this._viewport);

        this._viewport.drag().wheel().decelerate();
    }
}