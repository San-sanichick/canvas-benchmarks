import type VanillaDrawable from "./Shapes/VanillaDrawable";

import Rect          from "./Shapes/Rect";
import Circle        from "./Shapes/Circle";
import TextLabel     from "./Shapes/TextLabel";

import randomInRange from "@/utils/randomInRange";
import type BenchSettings from "../benchSettings";



export default class VanillaBench {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private width: number;
    private height: number;

    private drawables: Array<VanillaDrawable>;
    private settings: BenchSettings;

    constructor(canvas: HTMLCanvasElement, settings: BenchSettings) {
        this.canvas = canvas;
        this.ctx    = this.canvas.getContext("2d", { alpha: false })!;

        this.width  = this.canvas.width;
        this.height = this.canvas.height;

        this.drawables = [];

        this.settings = settings;
    }

    public init() {
        const {
            rectangles,
            circles,
            textLabels
        } = this.settings;

        this.drawables = [];

        for (let i = 0; i < rectangles; i++) {
            this.drawables.push(
                new Rect(
                    randomInRange(this.width), 
                    randomInRange(this.height),
                    randomInRange(100, 50),
                    randomInRange(100, 50)
                )
            );
        }

        for (let i = rectangles; i < rectangles + circles; i++) {
            this.drawables.push(
                new Circle(
                    randomInRange(this.width),
                    randomInRange(this.height),
                    randomInRange(50, 20)
                )
            );
        }

        for (let i = rectangles + circles; i < rectangles + circles + textLabels; i++) {
            this.drawables.push(
                new TextLabel(
                    randomInRange(this.width),
                    randomInRange(this.height)
                )
            );
        }
    }

    public update() {
        for (let i = 0; i < this.drawables.length; i++) {
            this.drawables[i].update(
                this.drawables[i].pos.x + randomInRange(2, -2), 
                this.drawables[i].pos.y + randomInRange(2, -2)
            );
        }
    }

    public render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.drawables.length; i++) {
            this.drawables[i].render(this.ctx);
        }
    }

    public debugRender() {
        this.ctx.beginPath();
            this.ctx.rect(this.width - 90, 0, 100, 80);
            this.ctx.fillStyle = "#ccc";
            this.ctx.fill();
        this.ctx.closePath();

        this.ctx.font = '15px serif';
        this.ctx.fillStyle = "black";
        this.ctx.fillText(
            `circle: ${this.settings.circles}`, 
            this.width - 80, 
            20
        );

        this.ctx.fillText(
            `rect: ${this.settings.rectangles}`, 
            this.width - 80, 
            40
        );
        this.ctx.fillText(
            `text: ${this.settings.textLabels}`, 
            this.width - 80, 
            60
        );
    }
}