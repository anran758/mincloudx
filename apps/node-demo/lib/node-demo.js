'use strict';
const {sayHi} = require('@mincloud/core')

function nodeDemo() {
    return "Hello from nodeDemo";
}

sayHi()

module.exports = nodeDemo;
