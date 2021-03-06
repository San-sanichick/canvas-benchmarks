import type { Canvas, CanvasKit } from "canvaskit-wasm";
import WasmShape from "./WasmShape";

export default class WasmRect extends WasmShape {
    private _width:  number;
    private _height: number;
    
    constructor(x: number, y: number, width: number, height: number, kit: CanvasKit) {
        super(x, y, kit);
        this._width = width;
        this._height = height;
    }

    public update(x: number, y: number, width?: number, height?: number) {
        super.update(x, y);
        if (width)  this._width  = width;
        if (height) this._height = height;
    }
    
    public render(kit: CanvasKit, canvas: Canvas): void {
        const rect = kit.RRectXY(
            kit.LTRBRect(
                this.pos.x,
                this.pos.y,
                this.pos.x + this._width,
                this.pos.y + this._height
                ),
            20, 20);

        this.paint.setColor(this.fill);

        this.paint.setStyle(kit.PaintStyle.Fill);
        canvas.drawRRect(rect, this.paint);

        this.paint.setColor(this.stroke);
        // this.paint.setAlphaf(0.5);
        canvas.drawRect(rect, this.paint)
    };
}