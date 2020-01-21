class Prototype {
    public primitive: any;
    public component: object;
    public circularReferance: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circularReferance = {
            ...this.circularReferance,
            prototype: { ...this },
        }

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

function clientCode(){
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReferance = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    console.log("p1.primitive:", p1.primitive, "p2.primitive:", p2.primitive, "p1.primitive === p2.primitive:", p1.primitive === p2.primitive);
    console.log("p1.primitive:", p1.component, "p2.primitive:", p2.component, "p1.primitive === p2.primitive:", p1.component === p2.component);
    console.log("p1.circularReferance:", p1.circularReferance, "p2.circularReferance:", p2.circularReferance, "p1.circularReferance === p2.circularReferance:", p1.circularReferance === p2.circularReferance);
    console.log("p1.circularReferance.prototype:", p1.circularReferance.prototype, "p2.circularReferance.prototype:", p2.circularReferance.prototype, "p1.circularReferance.prototype === p2.circularReferance.prototype:", p1.circularReferance.prototype === p2.circularReferance.prototype);
}

clientCode();