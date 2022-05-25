import type Drawable from "./Drawable";
import Vector2D      from "@/utils/math/Vector2D";
import randomColor   from "@/utils/randomColor";
import randomInRange from "@/utils/randomInRange";

export default class TextLabel implements Drawable {
    public pos: Vector2D;
    private _fill: string;
    private _fontSize: number;

    constructor(x: number, y: number) {
        this.pos = new Vector2D(x, y);
        this._fill = randomColor(); 
        this._fontSize = randomInRange(10, 48);
    }

    public update(x: number, y: number) {
        this.pos.set(x, y);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this._fill;
        ctx.font = `${this._fontSize}px serif`;
        ctx.fillText("HELLO WORLD", this.pos.x, this.pos.y);
    };

}