import { Text, TextStyle } from "pixi.js";

import Vector2D           from "@/utils/math/Vector2D";
import type WebGlDrawable from "./WebGlDrawable";
import randomInRange      from "@/utils/randomInRange";
import randomColor        from "@/utils/randomColor";


export default class WebGlTextLabel implements WebGlDrawable {
    public pos: Vector2D;
    private _textObject: Text;

    constructor(x: number, y: number) {
        this.pos = new Vector2D(x, y);

        const style = new TextStyle({
            fontFamily: "Times New Roman",
            fontSize: randomInRange(10, 28),
            fill: [randomColor()]
        });

        this._textObject = new Text("Hello World", style);
    }

    update(x: number, y: number) {
        this.pos.set(x, y);
        this._textObject.position.set(x, y);
    };

    public render() {
        this._textObject.x = this.pos.x;
        this._textObject.y = this.pos.y;
        return this._textObject;
    };
    
}