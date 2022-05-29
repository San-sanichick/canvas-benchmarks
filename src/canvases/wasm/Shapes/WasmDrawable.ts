import type Vector2D   from "@/utils/math/Vector2D";
import type { Canvas, CanvasKit } from "canvaskit-wasm";


export default interface WasmDrawable {
    pos: Vector2D;
    update: (x: number, y: number, ...args: any[]) => void;
    render: (kit: CanvasKit, canvas: Canvas) => any;
}