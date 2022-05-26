import { Graphics } from "pixi.js";

import Vector2D from "@/utils/math/Vector2D";
import type WebGlDrawable from "./WebGlDrawable";

export default abstract class WebGlShape implements WebGlDrawable {
    public    pos: Vector2D;
    protected graphicsObject: Graphics;
    protected fill: number;
    protected stroke: number;

    constructor(x: number, y: number) {
        this.pos = new Vector2D(x, y);
        this.fill = 0xCCCCCC;
        this.stroke = 0xFFFFFF;
        this.graphicsObject = new Graphics();
    }

    public update(newX: number, newY: number): void {
        this.pos.set(newX, newY);
        this.graphicsObject.position.set(newX, newY);
    }

    public abstract render(): Graphics;
}