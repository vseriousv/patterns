interface myFactory {
    createDoor():Door;
    createWind():Wind;
}

class WoodenFactory implements myFactory {
    public createDoor(): Door {
        return new WoodenDoor();
    }

    public createWind(): Wind {
        return new WoodenWind();
    }
}

class MetalFactory implements myFactory {
    public createDoor(): Door {
        return new MetalDoor();
    }

    public createWind(): Wind {
        return new MetalWind();
    }
}

interface Door {
    open(): string;
}

class WoodenDoor implements Door {
    public open(): string {
        return '*Открывается со скрипом деревянная дверь*';
    }
}

class MetalDoor implements Door {
    public open(): string {
        return '*Открывается со звоном металлическая дверь*';
    }
}

interface Wind {
    open(): string;
    compatibility(collaborator: Door): string;
}

class WoodenWind implements Door {
    public open(): string {
        return '*Открывается со скрипом деревянное окно*';
    }
    public compatibility(collaborator: Door): string {
        const result = collaborator.open();
        return `Это деревянное окно открывается также как и (${result})`;
    }
}

class MetalWind implements Door {
    public open(): string {
        return '*Открывается со звоном металлическое окно*';
    }
    public compatibility(collaborator: Door): string {
        const result = collaborator.open();
        return `Это металличиское окно открывается также как и (${result})`;
    }
}

function clientCode(factory: myFactory){
    const myDoor = factory.createDoor();
    const myWind = factory.createWind();

    console.log(myWind.open());
    console.log(myWind.compatibility(myDoor));

}

console.log('Создаем деревянный комплект : ');
clientCode(new WoodenFactory());

console.log(' ');

console.log('Создаем металлический комплект: ');
clientCode(new MetalFactory());
