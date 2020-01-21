class Prototype {
    public primitive: any;
    public component: object;
    public referLink: LinkReferBack;
    
    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.referLink = {
            ...this.referLink,
            prototype: {...this}
        }

        return clone;
    }
}

class LinkReferBack {
    public prototype;

    constructor(prototype: Prototype){
        this.prototype = prototype;
    }
}

function clientCode(){
    const p1 = new Prototype();
    p1.primitive = 765;
    p1.component = new Date;
    p1.referLink = new LinkReferBack(p1);

    const p2 = p1.clone();
    console.log("p1: ", p1);
    console.log("p2: ", p2);
    console.log("p2.__proto__: ", Object.getPrototypeOf(p2));
    console.log("p1.prim: ", p1.primitive);
    console.log("p2.prim: ", p2.primitive);
}

clientCode();