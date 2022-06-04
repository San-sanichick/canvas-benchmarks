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

        this.paint.setColor(this.stroke);
        this.paint.setAlphaf(0.5);
        this.paint.setMaskFilter(kit.MaskFilter.MakeBlur(kit.BlurStyle.Normal, 10, true));
        canvas.drawRect(rect, this.paint)

        this.paint.setColor(this.fill);
        // this.paint.setShader(kit.Shader.MakeLinearGradient(
        //     [this.pos.x, this.pos.y], 
        //     [this.pos.x + this._width, this.pos.y + this._height], 
        //     [this.fill, this.stroke],
        //     [0, 1], 
        //     kit.TileMode.Repeat)
        // );

        // this.paint.setShader(null as any);
        this.paint.setMaskFilter(null as any);
        this.paint.setStyle(kit.PaintStyle.Fill);
        canvas.drawRRect(rect, this.paint);

        canvas.save();
            canvas.rotate(45, this.pos.x + this._width / 2, this.pos.y + this._height / 2);
            this.paint.setColor(this.stroke);
            this.paint.setPathEffect(kit.PathEffect.MakeDash([5, 5]))
            this.paint.setStyle(kit.PaintStyle.Stroke);
            canvas.drawRRect(rect, this.paint);
        canvas.restore();
    };
}