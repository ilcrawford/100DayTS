"use strict";
var Addition = /** @class */ (function () {
    function Addition() {
        this.n1 = 0;
        this.n2 = 0;
    }
    Addition.prototype.Add = function () {
        return this.n1 + this.n2;
    };
    return Addition;
}());
var x = new Addition();
x.n1 = 10.2;
x.n2 = 33.3;
console.log(x);
console.log(x.Add());
