'use strict';
const {sayHi} = require('@mincloud/io')

function nodeDemo() {
    return "Hello from nodeDemo";
}

sayHi()

module.exports = nodeDemo;
