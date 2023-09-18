enum Category {
    analyst = "Business analyst",
    developer = "Developer",
    designer = "Designer",
    qa = "QA",
    scrum = "Scrum master"
}

type MyWorker = {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
};

function getAllWorkers(): Array<MyWorker> {
    let workers: Array<MyWorker> = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.qa },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrum }
    ];

    return workers;
}

function logFirstAvailable(workers: Array<MyWorker> = getAllWorkers()): void {
    console.log(workers.length);

    for (let worker of workers) {
        if (worker.available) {
            console.log(worker.name + ` ` + worker.surname);
            break;
        }
    }
}

function getWorkersNamesByCategory(category: Category = Category.designer): Array<string> {
    let workers: Array<string> = [];

    for (let worker of getAllWorkers()) {
        if (worker.category == category) {
            workers.push(worker.surname);
        }
    }

    return workers;
}

function logWorkersNames(workers: string[]): void {
    console.log(workers);
}

function getWorkerByID(id: number): Array<any> {

    let worker: any[] = [];

    worker.push(getAllWorkers().find(myWorker => myWorker.id == id).name);
    worker.push(getAllWorkers().find(myWorker => myWorker.id == id).surname);
    worker.push(getAllWorkers().find(myWorker => myWorker.id == id).salary);

    return worker;
}

function createCustomerID(name: string, id: number): string {
    return name + id;
}


function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name} ${age != undefined ? ', age: ' + age  : ''} ${city != undefined ? ', city: ' + city : ''}`);
}

function chekoutWorkers(customer: string, workersIDs: number[]): Array<string> {
    let workers: Array<string> = [];

    for (let id of workersIDs) {
        let worker = getAllWorkers().find(worker => worker.id == id);

        if (worker.available) {
            workers.push(worker.name + ' ' + worker.surname);
        }
    }

    console.log(customer);

    return workers;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

/// Task 1.1
console.log('Task 1.1 -------------------------------------');
logFirstAvailable();

/// Task 1.2
console.log('\nTask 1.2 -------------------------------------');
logWorkersNames(getWorkersNamesByCategory());

/// Task 1.3
console.log('\nTask 1.3 -------------------------------------');
getAllWorkers().forEach(worker => {
        if (worker.category == Category.designer) {
            console.log(worker.name + ' ' + worker.surname);
        }
    }
);

console.log(getWorkerByID(1));

/// Task 1.4
console.log('\nTask 1.4 -------------------------------------');
let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (string, number) => string = (name: string, id: number) => name + id;
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 20))

/// Task 1.5
console.log('\nTask 1.5 -------------------------------------');
createCustomer('Andrew');
createCustomer('Andrew', 13);
createCustomer('Andrew',13, 'Kyiv');

getWorkersNamesByCategory();
logFirstAvailable();

let myWorkers = chekoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(worker => console.log(worker));
