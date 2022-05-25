import type Vector2D from "@/utils/math/Vector2D";

export default interface Drawable {
    pos: Vector2D;
    update: (x: number, y: number, ...args: any[]) => void;
    render: (ctx: CanvasRenderingContext2D) => void;
}