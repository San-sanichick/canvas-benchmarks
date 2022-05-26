import { Graphics as PIXIGraphics } from "pixi.js";

import type WebGlDrawable from "./WebGlDrawable";
import Vector2D           from "@/utils/math/Vector2D";
import randomHex          from "@/utils/math/randomHex";

export default abstract class WebGlShape implements WebGlDrawable {
    public    pos: Vector2D;
    protected graphicsObject: PIXIGraphics;
    protected fill: number;
    protected stroke: number;

    constructor(x: number, y: number) {
        this.pos            = new Vector2D(x, y);
        this.fill           = Number(randomHex());
        this.stroke         = Number(randomHex());
        this.graphicsObject = new PIXIGraphics();
    }

    public update(newX: number, newY: number): void {
        this.pos.set(newX, newY);
        this.graphicsObject.position.set(newX, newY);
    }

    public abstract render(): PIXIGraphics;
}