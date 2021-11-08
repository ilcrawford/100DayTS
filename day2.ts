class Addition {
    n1: number = 0;
    n2: number = 0;

    public Add(): number {
        return this.n1 + this.n2;
    }
}

const x = new Addition();
x.n1 = 10.2;
x.n2 = 33.3;

console.log(x);
console.log(x.Add());