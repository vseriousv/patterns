class Counter {
    constructor() {
        if (typeof Counter.instance === "object") {
            return Counter.instance;
        }

        this.count = 0;
        Counter.instance = this;

        return this;
    }

    getCount() {
        return this.count;
    }

    getIncrement() {
        return this.count++;
    }
}

function clientCode() {
    const myCount1 = new Counter();
    const myCount2 = new Counter();

    myCount1.getIncrement();
    myCount1.getIncrement();
    myCount2.getIncrement();
    myCount2.getIncrement();

    console.log(myCount1.getCount());
    console.log(myCount2.getCount());
}

clientCode();