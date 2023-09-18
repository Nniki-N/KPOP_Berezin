var Category;
(function (Category) {
    Category["analyst"] = "Business analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["qa"] = "QA";
    Category["scrum"] = "Scrum master";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.developer },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.qa },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrum }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log(workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.available) {
            console.log(worker.name + " " + worker.surname);
            break;
        }
    }
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.designer; }
    var workers = [];
    for (var _i = 0, _a = getAllWorkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.category == category) {
            workers.push(worker.surname);
        }
    }
    return workers;
}
function logWorkersNames(workers) {
    console.log(workers);
}
function getWorkerByID(id) {
    var worker = [];
    worker.push(getAllWorkers().find(function (myWorker) { return myWorker.id == id; }).name);
    worker.push(getAllWorkers().find(function (myWorker) { return myWorker.id == id; }).surname);
    worker.push(getAllWorkers().find(function (myWorker) { return myWorker.id == id; }).salary);
    return worker;
}
function createCustomerID(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
    console.log("Name: ".concat(name, " ").concat(age != undefined ? ', age: ' + age : '', " ").concat(city != undefined ? ', city: ' + city : ''));
}
function chekoutWorkers(customer, workersIDs) {
    var workers = [];
    var _loop_1 = function (id) {
        var worker = getAllWorkers().find(function (worker) { return worker.id == id; });
        if (worker.available) {
            workers.push(worker.name + ' ' + worker.surname);
        }
    };
    for (var _i = 0, workersIDs_1 = workersIDs; _i < workersIDs_1.length; _i++) {
        var id = workersIDs_1[_i];
        _loop_1(id);
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
getAllWorkers().forEach(function (worker) {
    if (worker.category == Category.designer) {
        console.log(worker.name + ' ' + worker.surname);
    }
});
console.log(getWorkerByID(1));
/// Task 1.4
console.log('\nTask 1.4 -------------------------------------');
var myID = createCustomerID('Ann', 10);
console.log(myID);
var idGenerator = function (name, id) { return name + id; };
idGenerator = createCustomerID;
console.log(idGenerator('Ann', 20));
/// Task 1.5
console.log('\nTask 1.5 -------------------------------------');
createCustomer('Andrew');
createCustomer('Andrew', 13);
createCustomer('Andrew', 13, 'Kyiv');
getWorkersNamesByCategory();
logFirstAvailable();
var myWorkers = chekoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(function (worker) { return console.log(worker); });
