import type Vector2D from "@/utils/math/Vector2D";

export default interface WebGlDrawable {
    pos: Vector2D;
    update: (x: number, y: number, ...args: any[]) => void;
    render: () => any;
}