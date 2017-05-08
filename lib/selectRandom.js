"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPlainObject = require("lodash.isplainobject");
function selectRandom(o) {
    if (isPlainObject(o)) {
        var keys = Object.keys(o);
        var _o = o;
        return _o[keys[keys.length * Math.random() << 0]];
    }
    if (Array.isArray(o)) {
        return o[o.length * Math.random() << 0];
    }
    throw new Error('Either object literal or array must be presented.');
}
exports.default = selectRandom;
