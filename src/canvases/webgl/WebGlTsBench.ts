import * as PIXI    from "pixi.js";
import { Viewport } from "pixi-viewport";


import type BenchSettings from "../benchSettings";
import type WebGlDrawable from "./Shapes/WebGlDrawable";
import WebGlRect from "./Shapes/WebGlRect";
import randomInRange from "@/utils/randomInRange";


export default class WebGlBench {
    private _canvas: HTMLCanvasElement;

    private _width: number;
    private _height: number;

    private _drawables: Array<WebGlDrawable>;
    private _settings: BenchSettings;

    // private _app: PIXI.Application;
    // private _viewport: Viewport;
    private _renderer: PIXI.Renderer;
    private _stage: PIXI.Container;

    constructor(canvas: HTMLCanvasElement, settings: BenchSettings) {
        this._canvas = canvas;

        this._width  = this._canvas.width;
        this._height = this._canvas.height;

        this._drawables = [];
        this._settings = settings;

        this._renderer = new PIXI.Renderer(
            {
                width:  this._width,
                height: this._height,
                view:   this._canvas
            }
        );

        this._stage = new PIXI.Container();

        // this._app = new PIXI.Application({
        //     view: this._canvas
        // });
        // this._viewport = new Viewport({
        //     screenWidth:  this._width,
        //     screenHeight: this._height,
        //     worldWidth:   this._worldWidth,
        //     worldHeight:  this._worldHeight,
        //     interaction:  this._app.renderer.plugins.interaction
        // });

        // this._app.stage.addChild(this._viewport);

        // this._viewport.drag().wheel();
    }

    public init() {

        const {
            rectangles,
            circles,
            textLabels
        } = this._settings;

        for (let i = 0; i < rectangles; i++) {
            this._drawables.push(
                new WebGlRect(
                    randomInRange(this._width), 
                    randomInRange(this._height),
                    randomInRange(100, 50),
                    randomInRange(100, 50)
                )
            );
        }

        for (let i = 0; i < this._drawables.length; i++) {
            this._stage.addChild(this._drawables[i].render());
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

    public render() {
        this._renderer.reset();
        this._renderer.render(this._stage);
    }
}