// The requirements for the validation are going to be really straightforward.

//  * The validation will determine whether a string is greater than or equal to a minimum number of characters.
//  * The validation will determine whether a string is less than or equal to a maximum number of characters.
//  * The validation will use a single method called IsValid to determine whether or not the string is valid.

interface Validate {
    IsValid(): boolean;
}

class MinLengthValidation implements Validate {
    constructor(private text: string, private minLength: number) {}

    IsValid(): boolean {
        return this.text.length >= this.minLength;
    }
}

class MaxLengthValidation implements Validate {
    constructor(private text: string, private maxLength: number) {}

    IsValid(): boolean {
        return this.text.length <= this.maxLength;
    }
}

console.log(new MinLengthValidation('ABC12345', 10).IsValid()); // Should print false
console.log(new MinLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print true
console.log(new MaxLengthValidation('ABC12345', 10).IsValid()); // Should print true
console.log(new MaxLengthValidation('ABC12345AB12345', 10).IsValid()); // Should print false