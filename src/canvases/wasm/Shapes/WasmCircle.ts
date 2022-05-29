import type { CanvasKit, Canvas } from "canvaskit-wasm";
import WasmShape from "./WasmShape";

export default class WasmCircle extends WasmShape {
    private _radius: number;

    constructor(x: number, y: number, radius: number, kit: CanvasKit) {
        super(x, y, kit);
        this._radius = radius;
    }

    public update(newX: number, newY: number, radius?: number) {
        super.update(newX, newY);
        if (radius) this._radius = radius;
    }

    public render(kit: CanvasKit, canvas: Canvas): void {
        this.paint.setColor(this.fill);
        this.paint.setStyle(kit.PaintStyle.Fill);
        
        canvas.drawCircle(this.pos.x, this.pos.y, this._radius, this.paint);
        
        this.paint.setColor(this.stroke);
        this.paint.setStyle(kit.PaintStyle.Stroke);

        canvas.drawCircle(this.pos.x, this.pos.y, this._radius, this.paint);
    }
}