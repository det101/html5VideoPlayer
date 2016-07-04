/**
 * Created by bilibili_ on 2016/6/15.
 */
function demo (msg) {
    console.log("test");
    alert('--------\r\n' + msg + '\r\n--------')
}

demo('Hi Hello World!');

let  Test = require('./Test.js');

let t = new Test();
t.logTest();