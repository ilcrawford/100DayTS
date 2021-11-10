interface Validate {
    IsValid(): boolean;
}

abstract class LenValidation implements Validate {
    constructor(protected text: string, protected len: number) {}
    IsValid(): boolean {
        return this.CheckForValidity();
    }

    public Debug() {
        console.log(`Checking whether length check of ${this.len} for ${this.text} is valid returns ${this.CheckForValidity()}`)
    }

    protected abstract CheckForValidity(): boolean;
}

class MaxLenValidation extends LenValidation {
    protected CheckForValidity(): boolean {
        return this.text.length <= this.len;
    }
}

class MinLenValidation extends LenValidation {
    protected CheckForValidity(): boolean {
        return this.text.length >= this.len;
    }
}

const validation: Validate[] = [];
validation.push(new MinLenValidation('ABC12345', 10));
validation.push(new MinLenValidation('ABC12345AB12345', 10));
validation.push(new MaxLenValidation('ABC12345', 10));
validation.push(new MaxLenValidation('ABC12345AB12345', 10));

validation.forEach((val: Validate) => {
    console.log(val.IsValid());
    const lv = val as LenValidation;
    lv.Debug();
    // We want to call debug but we can't here.
    // val.Debug(); is not going to work
    // Do something clever here.
});