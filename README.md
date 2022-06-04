# canvas-benchmarks

This app aims to test the performance of three canvas configurations

- TS + Canvas API
- TS + WebGL (Pixi.js)
- WASM + WebGL (CanvasKit)
- Custom C++

## Results so far
test data: 2k rectangles, 2k circle, 2k text objects

|Approach|Frametime|FPS|Memory usage|
|--------|---------|---|------------|
|vanilla |    ~25ms|  4|         7MB|
|Pixi.js |    ~16ms| 60|       ~80MB|

Pixi.js is in the lead here, although the test done are not particularly thorough

Todo:
- [x] TS + Canvas API
- [x] TS + WebGL (Pixi.js)
- [x] CanvasKit
- [x] Custom C++ class compiled to WASM
