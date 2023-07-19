interface IDatabase {
    connect(): void;
    select(): void;
    update(): void;
    insert(): void;
    delete(): void;
}

class PostgresDatabase implements IDatabase {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private name: string;

    constructor(host: string, port: number, user: string, password: string, name: string){
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.name = name;
    }

    connect(): void {
        console.log(`psql connected with ${this.host}:${this.port} | ${this.user} ${this.password} | ${this.name}`);
    }

    select(): void {
        console.log(`psql//SELECT * FROM users;`);
    }

    update(): void {
        console.log(`psql//UPDATE users SET ...`);
    }

    insert(): void {
        console.log('psql//INSERT INTO ...');
    }

    delete(): void {
        console.log(`psql//DELETE ....`) 
    }
}


class MysqlDatabase implements IDatabase {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private name: string;

    constructor(host: string, port: number, user: string, password: string, name: string){
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.name = name;
    }

    connect(): void {
        console.log(`mysql connected with ${this.host}:${this.port} | ${this.user} ${this.password} | ${this.name}`);
    }

    select(): void {
        console.log(`mysql//SELECT * FROM users;`);
    }

    update(): void {
        console.log(`mysql//UPDATE users SET ...`);
    }

    insert(): void {
        console.log('mysql//INSERT INTO ...');
    }

    delete(): void {
        console.log(`mysql//DELETE ....`) 
    }
}

class MongoDatabase implements IDatabase {
    private host: string;
    private port: number;
    private user: string;
    private password: string;
    private name: string;

    constructor(host: string, port: number, user: string, password: string, name: string){
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.name = name;
    }

    connect(): void {
        console.log(`mongodb connected with ${this.host}:${this.port} | ${this.user} ${this.password} | ${this.name}`);
    }

    select(): void {
        console.log(`mongodb//db.getColections('users').find()`);
    }

    update(): void {
        console.log(`mongodb//db.getColections('users').update({$set: {}}}`);
    }

    insert(): void {
        console.log(`mongodb//db.getColections('users').insert({email: '', password: ''}}`);
    }

    delete(): void {
        console.log(`mongodb//db.getColections('users').delete(...)`) 
    }
}

abstract class DatabaseCreator {
    abstract factoryMethod(host: string, port: number, user: string, password: string, name: string): IDatabase;

    connect(host: string, port: number, user: string, password: string, name: string): IDatabase {
        const db = this.factoryMethod(host, port, user, password, name);
        db.connect();
        return db;
    }
}

class PostgresDatabaseCreator extends DatabaseCreator {
    factoryMethod(host: string, port: number, user: string, password: string, name: string): IDatabase {
        return new PostgresDatabase(host, port, user, password, name);
    }
}


class MysqlDatabaseCreator extends DatabaseCreator {
    factoryMethod(host: string, port: number, user: string, password: string, name: string): IDatabase {
        return new MysqlDatabase(host, port, user, password, name);
    }
}

class MongoDatabaseCreator extends DatabaseCreator {
    factoryMethod(host: string, port: number, user: string, password: string, name: string): IDatabase {
        return new MongoDatabase(host, port, user, password, name);
    }
}

function clientCode(creator: DatabaseCreator) {
    const db = creator.connect('127.0.0.1', 27017, 'root', '12345', 'myDb');
    db.insert();
    db.select();
    db.update();
    db.delete();
}

clientCode(new MysqlDatabaseCreator);