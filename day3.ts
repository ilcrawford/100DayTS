// The class will allow me to add an x and a y value to represent a single point.
// The class will provide me with an IsEmpty method so I can determine whether or not the x and y numbers aren’t set to 0,0.
// The only way to change the x and y value is through an Offset method.
// I will be able to add a Point to a point to get a new point.
// I can determine whether two points are equal (have the same coordinates) through an IsEqual method
// I will have a ToString method which will tell people using the class what the x and y values are.

class Point {
    private x: number;
    private y: number;

    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    }

    public IsEmpty(): boolean {
        return this.x=== 0 && this.y === 0;
    }

    public IsEqual(p: Point): boolean {
        return this.x === p.x && this.y === p.y;
    }

    public Offset(p: Point) {
        this.x += p.x;
        this.y += p.y;
    }
}

const p1 = new Point(4,5);
const p2 = new Point(7,9);

console.log(p1);
console.log(p2);
console.log(p1.IsEmpty());
console.log(p1.IsEqual(p2));
p1.Offset(p2);
console.log(p1);
