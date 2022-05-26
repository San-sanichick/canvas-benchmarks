import Vector2D      from "@/utils/math/Vector2D";
import randomColor   from "@/utils/randomColor";
import type VanillaDrawable from "./VanillaDrawable";

export default abstract class Shape implements VanillaDrawable {
    public pos: Vector2D;
    public fill: string;
    public stroke: string;

    constructor(x: number, y: number) {
        this.pos = new Vector2D(x, y);
        this.fill = randomColor();
        this.stroke = randomColor();
    }

    update(newX: number, newY: number): void {
        this.pos.set(newX, newY);
    };

    abstract render(ctx: CanvasRenderingContext2D): void;

}