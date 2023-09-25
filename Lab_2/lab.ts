enum Category {
    analyst = "Business analyst",
    developer = "Developer",
    designer = "Designer",
    qa = "QA",
    scrum = "Scrum master",
}

interface PrizeLogger {
    (str: string): void;
}

interface MyWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: PrizeLogger;
}

function prizeLoggerI(str: string) {
    console.log(str)
}

function getAllWorkers(): Array<MyWorker> {
    let workers: Array<MyWorker> = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.developer, markPrize: prizeLoggerI },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.qa, markPrize: prizeLoggerI },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.designer, markPrize: prizeLoggerI },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.scrum, markPrize: prizeLoggerI },
    ];

    return workers;
}

function getWorkerByID(id: number): MyWorker | undefined {
    return getAllWorkers().find(worker => worker.id == id);
}

function printWorker(worker: MyWorker): void {
    console.log(worker.name + ' ' + worker.surname + ' got salary ' + worker.salary);
}

// Task 2.2
let logPrize: PrizeLogger = prizeLoggerI;
logPrize("test");
//

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPunlished: number;
}

interface Librarian extends Person {
    department: string;
    assisCustomer(custName: string): void;
}

let favouriteAuthor: Author = {
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

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assisCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favouriteLibrarian: Librarian = new UniversityLibrarian();
favouriteLibrarian.name = 'Jane'
favouriteLibrarian.assisCustomer('Ann');


abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log("Creating new ReferenceItem....")
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private __publisher: string;

    static department: string = 'main department';

    publisherGetter() : string {
        return this.__publisher.toUpperCase();
    }
    publisherSetter(newPublisher: string): void {
        this.__publisher = newPublisher;
    }

    constructor(public title: string, protected year: number){};

    printItem() : void{
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    };

    abstract printCitation() : void;
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number){
        super(title, year);
    };

    printItem() : void{
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition}`);
    };

    printCitation(){
        console.log(`${this.title} - ${this.year}`);
    }
}

// let ref: ReferenceItem = new ReferenceItem('item1', 2001);
// ref.publisherSetter('new publisher');
// ref.printItem();
// console.log(ref.publisherGetter());

let refBook: Encyclopedia = new Encyclopedia('encyclopedia1', 2016, 2);
refBook.printItem();
