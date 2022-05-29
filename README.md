# canvas-benchmarks

This app aims to test the performance of three canvas configurations

- TS + Canvas API
- TS + WebGL (Pixi.js)
- WASM + WebGL (????)

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
- [ ] WASM + WebGL (?????????????)

## On WASM
There are several options that I have discovered:

- Write a test using C++ & SDL2, compile that to WASM using Emscripten;
- Use CanvasKit;
- Suffer.

CanvasKit is a weird thing. It's a pain to install (regular import is broken), and I'm either using it wrong, or it doesn't perform that well.

The next step in the plan is to write a test in C++ using SDL2, compile that to WASM, and see how that works.
