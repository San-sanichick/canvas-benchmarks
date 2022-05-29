import Vector2D from "@/utils/math/Vector2D";
import randomColor from "@/utils/randomColor";

import type { Canvas, CanvasKit, Paint } from "canvaskit-wasm";

import type WasmDrawable from "./WasmDrawable";

export default abstract class WasmShape implements WasmDrawable {
    public pos: Vector2D;
    protected paint: Paint;
    protected fill: Float32Array;
    protected stroke: Float32Array;

    constructor(x: number, y: number, kit: CanvasKit) {
        this.pos   = new Vector2D(x, y);
        this.paint = new kit.Paint();

        this.fill   = kit.parseColorString(randomColor());
        this.stroke = kit.parseColorString(randomColor());

        
        this.paint.setAntiAlias(true);
    }

    public update(newX: number, newY: number): void {
        this.pos.set(newX, newY);
    };

    public abstract render(kit: CanvasKit, canvas: Canvas): void;
}