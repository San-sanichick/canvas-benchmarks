import { Renderer as PIXIRenderer, Container as PIXIContainer } from "pixi.js";
// import { PIXIViewport }            from "pixi-viewport";


import type BenchSettings from "../benchSettings";
import type WebGlDrawable from "./Shapes/WebGlDrawable";
import WebGlRect from "./Shapes/WebGlRect";
import randomInRange from "@/utils/randomInRange";
import WebGlCircle from "./Shapes/WebGlCircle";
import WebGlTextLabel from "./Shapes/WebGlTextLabel";


export default class WebGlBench {
    private _canvas: HTMLCanvasElement;

    private _width: number;
    private _height: number;

    private _drawables: Array<WebGlDrawable>;
    private _settings: BenchSettings;

    private _worldWidth: number;
    private _worldHeight: number;

    // private _viewport: PIXIViewport;
    private _renderer: PIXIRenderer;
    private _stage:    PIXIContainer;

    constructor(canvas: HTMLCanvasElement, settings: BenchSettings) {
        this._canvas = canvas;

        this._width  = this._canvas.width;
        this._height = this._canvas.height;

        this._worldWidth = 5000;
        this._worldHeight = 5000;

        this._drawables = [];
        this._settings = settings;

        this._renderer = new PIXIRenderer(
            {
                width:  this._width,
                height: this._height,
                view:   this._canvas
            }
        );

        this._stage = new PIXIContainer();

        // this._app = new PIXI.Application({
        //     view: this._canvas
        // });
        // this._viewport = new Viewport({
        //     screenWidth:  this._width,
        //     screenHeight: this._height,
        //     worldWidth:   this._worldWidth,
        //     worldHeight:  this._worldHeight,
        //     interaction:  this._renderer.plugins.interaction
        // });

        // this._stage.addChild(this._viewport);

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

        for (let i = 0; i < circles; i++) {
            this._drawables.push(
                new WebGlCircle(
                    randomInRange(this._width),
                    randomInRange(this._height),
                    randomInRange(5, 50)
                )
            );
        }

        for (let i = 0; i < textLabels; i++) {
            this._drawables.push(
                new WebGlTextLabel(
                    randomInRange(this._width),
                    randomInRange(this._height)
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