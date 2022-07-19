# canvas-benchmarks

This app aims to test the performance of three canvas configurations

- TS + Canvas API
- TS + WebGL (Pixi.js)
- WASM + WebGL (CanvasKit)
- Custom C++

## Results so far
test data: 1,5k rectangles, 1,5k circle, 1,5k text objects

|Approach |FPS|Memory usage|
|---------|---|------------|
|vanilla  |  9|      ~145MB|
|Pixi.js  | 76|      ~200MB|
|SDL2     | 63|      ~165MB|
|CanvasKit| 45|      ~300MB|

Pixi.js is in the lead here, although the tests done are not particularly thorough

Todo:
- [x] TS + Canvas API
- [x] TS + WebGL (Pixi.js)
- [x] Custom C++ class compiled to WASM
- [x] CanvasKit
