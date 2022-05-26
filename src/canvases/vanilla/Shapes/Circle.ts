import Shape from "./Shape";


export default class Circle extends Shape {
    private _radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this._radius = radius;
    }

    public update(x: number, y: number, radius?: number) {
        super.update(x, y);
        if (radius) this._radius = radius;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath()
            ctx.arc(this.pos.x, this.pos.y, this._radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.fill;
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.stroke;
            ctx.stroke();
        ctx.closePath();
    }

}