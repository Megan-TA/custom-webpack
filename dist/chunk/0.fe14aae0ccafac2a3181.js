webpackJsonp([0],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function test() {
    var _this = this;

    var v = function v() {
        return alert(_this.id);
    };
    v();
}
test.call({ id: 222 });

function foo() {
    var _this2 = this;

    id = 21;
    setTimeout(function () {
        console.log('id:', _this2.id); // 42
    }, 100);
    console.log(this.id); // 42
}
var id = 22;
foo.call({ id: 42 });

/***/ })

});
//# sourceMappingURL=0.fe14aae0ccafac2a3181.js.map