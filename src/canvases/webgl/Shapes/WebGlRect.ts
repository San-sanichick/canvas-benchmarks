import type { Graphics as PIXIGraphics } from "pixi.js";
import WebGlShape from "./WebGlShape";

export default class WebGlRect extends WebGlShape {
    private _width:  number;
    private _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this._width  = width;
        this._height = height;
    }

    public update(x: number, y: number, width?: number, height?: number) {
        super.update(x, y);
        if (width) {
            this._width  = width
            this.graphicsObject.width = this._width;
        };
        
        if (height) {
            this._height = height;
            this.graphicsObject.height = this._height;
        }
    }

    public render(): PIXIGraphics {

        this.graphicsObject.lineStyle(2, this.stroke);
        this.graphicsObject.beginFill(this.fill);
        this.graphicsObject.drawRect(this.pos.x, this.pos.y, this._width, this._height);
        this.graphicsObject.endFill();

        return this.graphicsObject;
    }
}
