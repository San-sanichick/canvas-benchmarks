import Shape from "./Shape";

export default class Rect extends Shape {
    private _width:  number;
    private _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this._width  = width;
        this._height = height;
    }

    public update(x: number, y: number, width?: number, height?: number) {
        super.update(x, y);
        if (width)  this._width  = width;
        if (height) this._height = height;
    }
    
    render(ctx: CanvasRenderingContext2D): void {
        // throw new Error("Method not implemented.");
        ctx.beginPath();
            ctx.rect(this.pos.x, this.pos.y, this._width, this._height);
            ctx.fillStyle = this.fill;
            ctx.fill();
            ctx.strokeStyle = this.stroke;
            ctx.stroke();
        ctx.closePath();
    }

}