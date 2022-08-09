export class ArcsBuffer {
  buffer
  constructor(size, width) {
    this.buffer = new ArrayBuffer(size * width)
  }

}

const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view) // Uint8Array(3) [226, 130, 172]


function encodeIntoAtPosition(string, u8array, pos) {
  return encoder.encodeInto(string, pos ? u8array.subarray(pos | 0) : u8array)
}

const arr = new Uint8Array(8)
encodeIntoAtPosition("hello", arr, 2)
console.log(arr.join()) // 0,0,104,101,108,108,111,0

const str = "Hello €我"

// get string length in bytes
const bytes = Buffer.byteLength(str, "utf-8")

console.log(bytes) // 12

