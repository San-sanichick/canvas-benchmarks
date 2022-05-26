import type VanillaDrawable from "./Shapes/VanillaDrawable";

import Rect          from "./Shapes/Rect";
import Circle        from "./Shapes/Circle";
import TextLabel     from "./Shapes/TextLabel";

import randomInRange from "@/utils/randomInRange";
import type BenchSettings from "../benchSettings";



export default class VanillaBench {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    private _width: number;
    private _height: number;

    private _drawables: Array<VanillaDrawable>;
    private _settings: BenchSettings;

    constructor(canvas: HTMLCanvasElement, settings: BenchSettings) {
        this._canvas = canvas;
        this._ctx    = this._canvas.getContext("2d", { alpha: false })!;

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

        this._drawables = [];

        for (let i = 0; i < rectangles; i++) {
            this._drawables.push(
                new Rect(
                    randomInRange(this._width), 
                    randomInRange(this._height),
                    randomInRange(100, 50),
                    randomInRange(100, 50)
                )
            );
        }

        for (let i = rectangles; i < rectangles + circles; i++) {
            this._drawables.push(
                new Circle(
                    randomInRange(this._width),
                    randomInRange(this._height),
                    randomInRange(50, 20)
                )
            );
        }

        for (let i = rectangles + circles; i < rectangles + circles + textLabels; i++) {
            this._drawables.push(
                new TextLabel(
                    randomInRange(this._width),
                    randomInRange(this._height)
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

    public render() {
        this._ctx.clearRect(0, 0, this._width, this._height);

        for (let i = 0; i < this._drawables.length; i++) {
            this._drawables[i].render(this._ctx);
        }
    }

    public debugRender() {
        this._ctx.beginPath();
            this._ctx.rect(this._width - 90, 0, 100, 80);
            this._ctx.fillStyle = "#ccc";
            this._ctx.fill();
        this._ctx.closePath();

        this._ctx.font = '15px serif';
        this._ctx.fillStyle = "black";
        this._ctx.fillText(
            `circle: ${this._settings.circles}`, 
            this._width - 80, 
            20
        );

        this._ctx.fillText(
            `rect: ${this._settings.rectangles}`, 
            this._width - 80, 
            40
        );
        this._ctx.fillText(
            `text: ${this._settings.textLabels}`, 
            this._width - 80, 
            60
        );
    }
}