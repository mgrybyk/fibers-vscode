# Debug Fibers in IDEs

## Purpose

Simple example of debug limitation in *VSCode*, *IntelliJ* and other IDEs (or maybe NodeJS?) if [Fibers](https://github.com/laverdet/node-fibers) is used.

## Usage

1. `git clone https://github.com/mgrybyk/fibers-vscode.git`
2. `cd fibers-vscode`
3. `npm install`
4. Open project in your IDE
5. Put breakpoint at line 12 in `index.js`
6. run `index.js` in debug mode
7. Enter in debug console `step(100)`

**Actual Result**  
execution terminated, no logs except of `Canceled` in debug console.

**Expected Result**  
should be possible to debug in IDE. Please help!

## Structure

Full flow describing my use case
- `lib.js` stub for 3rd party library
- `async.js` code example using Promises
- `index.js` same as `async.js` but wrapped with Fibers.

Small reproducible example
- `fibersShort.js` 
