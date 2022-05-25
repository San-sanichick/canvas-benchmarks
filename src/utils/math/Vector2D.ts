export default class Vector2D {
    private _x: number;
    private _y: number;

    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    public set(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(val: number) {
        this._x = val;
    }

    set y(val: number) {
        this._y = val;
    }

    public add(v2: Vector2D): Vector2D {
        this._x += v2._x;
        this._y += v2._y;

        return this;
    }

    public sub(v2: Vector2D): Vector2D {
        this._x -= v2._x;
        this._y -= v2._y;

        return this;
    }
}