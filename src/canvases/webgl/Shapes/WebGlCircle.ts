import type { Graphics as PIXIGraphics } from "pixi.js";
import WebGlShape                        from "./WebGlShape";

export default class WebGlCircle extends WebGlShape {
    private _radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this._radius = radius;
    }

    public update(newX: number, newY: number, radius?: number) {
        super.update(newX, newY);
        if (radius) this._radius = radius;
    }
    
    public render(): PIXIGraphics {
        
        this.graphicsObject.lineStyle(2, this.stroke);
        this.graphicsObject.beginFill(this.fill, 0.5);
        this.graphicsObject.drawCircle(this.pos.x, this.pos.y, this._radius);
        this.graphicsObject.endFill();

        return this.graphicsObject;
    }

}