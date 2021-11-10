"use strict";
// The requirements for the validation are going to be really straightforward.
var MinLengthValidation = /** @class */ (function () {
    function MinLengthValidation(text, minLength) {
        this.text = text;
        this.minLength = minLength;
    }
    MinLengthValidation.prototype.IsValid = function () {
        return this.text.length >= this.minLength;
    };
    return MinLengthValidation;
}());
var MaxLengthValidation = /** @class */ (function () {
    function MaxLengthValidation(text, maxLength) {
        this.text = text;
        this.maxLength = maxLength;
    }
    MaxLengthValidation.prototype.IsValid = function () {
        return this.text.length <= this.maxLength;
    };
    return MaxLengthValidation;
}());
console.log(new MinLengthValidation('ABC12345', 10).IsValid()); // Should print false
console.log(new MinLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print true
console.log(new MaxLengthValidation('ABC12345', 10).IsValid()); // Should print true
console.log(new MaxLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print false
