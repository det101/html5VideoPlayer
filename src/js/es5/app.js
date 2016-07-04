'use strict';

/**
 * Created by bilibili_ on 2016/6/15.
 */
function demo(msg) {
  console.log("test");
  alert('--------\r\n' + msg + '\r\n--------');
}

demo('Hi Hello World!');

var Test = require('./Test.js');

var t = new Test();
t.logTest();