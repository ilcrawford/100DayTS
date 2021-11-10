"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LenValidation = /** @class */ (function () {
    function LenValidation(text, len) {
        this.text = text;
        this.len = len;
    }
    LenValidation.prototype.IsValid = function () {
        return this.CheckForValidity();
    };
    LenValidation.prototype.Debug = function () {
        console.log("Checking whether length check of " + this.len + " for " + this.text + " is valid returns " + this.CheckForValidity());
    };
    return LenValidation;
}());
var MaxLenValidation = /** @class */ (function (_super) {
    __extends(MaxLenValidation, _super);
    function MaxLenValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaxLenValidation.prototype.CheckForValidity = function () {
        return this.text.length <= this.len;
    };
    return MaxLenValidation;
}(LenValidation));
var MinLenValidation = /** @class */ (function (_super) {
    __extends(MinLenValidation, _super);
    function MinLenValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinLenValidation.prototype.CheckForValidity = function () {
        return this.text.length >= this.len;
    };
    return MinLenValidation;
}(LenValidation));
var validation = [];
validation.push(new MinLenValidation('ABC12345', 10));
validation.push(new MinLenValidation('ABC12345AB12345', 10));
validation.push(new MaxLenValidation('ABC12345', 10));
validation.push(new MaxLenValidation('ABC12345AB12345', 10));
validation.forEach(function (val) {
    console.log(val.IsValid());
    var lv = val;
    lv.Debug();
    // We want to call debug but we can't here.
    // val.Debug(); is not going to work
    // Do something clever here.
});
