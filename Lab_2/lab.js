var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Category;
(function (Category) {
    Category["analyst"] = "Business analyst";
    Category["developer"] = "Developer";
    Category["designer"] = "Designer";
    Category["qa"] = "QA";
    Category["scrum"] = "Scrum master";
})(Category || (Category = {}));
function prizeLoggerI(str) {
    console.log(str);
}
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.developer, markPrize: prizeLoggerI },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.qa, markPrize: prizeLoggerI },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.designer, markPrize: prizeLoggerI },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrum, markPrize: prizeLoggerI },
    ];
    return workers;
}
function getWorkerByID(id) {
    return getAllWorkers().find(function (worker) { return worker.id == id; });
}
function printWorker(worker) {
    console.log(worker.name + ' ' + worker.surname + ' got salary ' + worker.salary);
}
// Task 2.2
var logPrize = prizeLoggerI;
logPrize("test");
var favouriteAuthor = {
    name: 'Ann',
    email: 'ann_author@gmail.com',
    numBooksPunlished: 2,
};
// let favouriteLibrarian: Librarian = {
//     name: 'Jane',
//     email: 'jane_author@gmail.com',
//     department: 'Main department',
//     assisCustomer: function assisCustomer(custName: string) {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// };
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assisCustomer = function (custName) {
        console.log("".concat(this.name, " is assisting ").concat(custName));
    };
    return UniversityLibrarian;
}());
var favouriteLibrarian = new UniversityLibrarian();
favouriteLibrarian.name = 'Jane';
favouriteLibrarian.assisCustomer('Ann');
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.publisherGetter = function () {
        return this.__publisher.toUpperCase();
    };
    ReferenceItem.prototype.publisherSetter = function (newPublisher) {
        this.__publisher = newPublisher;
    };
    ;
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
    };
    ;
    ReferenceItem.department = 'main department';
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    ;
    Encyclopedia.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, " by ").concat(ReferenceItem.department));
        console.log("Edition: ".concat(this.edition));
    };
    ;
    Encyclopedia.prototype.printCitation = function () {
        console.log("".concat(this.title, " - ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
// let ref: ReferenceItem = new ReferenceItem('item1', 2001);
// ref.publisherSetter('new publisher');
// ref.printItem();
// console.log(ref.publisherGetter());
var refBook = new Encyclopedia('encyclopedia1', 2016, 2);
refBook.printItem();
