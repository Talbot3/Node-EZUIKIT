const wasm2js = require('wasm2js')
const fs = require('fs')

const wasmBuffer = fs.readFileSync('./js/playctrl/Decoder.wasm');
const js = wasm2js(wasmBuffer);
console.log(js);