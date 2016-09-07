/**
 * Created by bilibili_ on 2016/6/15.
 */
function demo (msg) {
    console.log("test");
}

demo('Hi Hello World!');

let  Test = require('./Test.js');

let t = new Test();
t.logTest();

var handler = {
    id: '123456',

    init: function() {
        document.addEventListener('click',
            event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        console.log('Handling ' + type  + ' for ' + this.id);
    }
};
handler.init();

// 假定某段buffer包含如下字节 [0x02, 0x01, 0x03, 0x07]
var buffer = new ArrayBuffer(4);
var v1 = new Uint8Array(buffer);
v1[0] = 2;
v1[1] = 1;
v1[2] = 3;
v1[3] = 7;

var uInt32View = new Uint32Array(buffer);
var a = uInt32View[0];
console.log(a.toString());
var uInt16View = new Uint16Array(buffer);
console.log(uInt16View[0],uInt16View[1]);
// 计算机采用小端字节序
// 所以头两个字节等于258
if (uInt16View[0] === 258) {
    console.log('OK'); // "OK"
}

// 赋值运算
uInt16View[0] = 255;    // 字节变为[0xFF, 0x00, 0x03, 0x07]
uInt16View[0] = 0xff05; // 字节变为[0x05, 0xFF, 0x03, 0x07]
uInt16View[1] = 0x0210; // 字节变为[0x05, 0xFF, 0x10, 0x02]

console.log(1e3, 5e3);