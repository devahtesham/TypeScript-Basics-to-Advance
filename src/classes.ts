// =========== simple class structure
class Engineer {
    // ----- this is making my code duplication, to avoid this we use access modifiers/visibility modifiers 

    // field: string
    // university: string
    // batch: number
    // isEmployeed: boolean
    constructor(
        public field: string,
        public university: string,
        public batch: number,
        protected salary: number,
        private isEmployeed: boolean = true           // we can also make an argument optional by setting its default paramater value
    ) {
        this.field = field
        this.university = university
        this.batch = batch
        this.isEmployeed = isEmployeed
        this.salary = salary
    }

    protected problemSolving(): string {
        return `${this.field} Engineers are good problem solver`
    }

    public salaryInfo(range: string = 'min'): string {
        return `The avaerage salary of an Engineer is ${this.salary} ${range}`
    }

    private employementStatus(): string {
        return `Eployement Status is ${this.isEmployeed}`
    }
}

// lets create objects
// const eng1 = new Engineer("Software", "UBIT", 2023,100000, true);
// console.log(eng1.batch);        // this accessible bcz it is public
// console.log(eng1.salary);       // this is not acceptable bcz it is protected 
// console.log(eng1.isEmployeed);       // this is not acceptable bcz it is private 
// console.log(eng1.problemSolving());
// console.log(eng1.salaryInfo("minimum"));
// console.log(eng1.employementStatus());

// ================== INHERITANCE
class SoftEng extends Engineer {
    constructor(
        field: string,
        university: string,
        batch: number,
        salary: number,
        public incomeDigit: number
    ) {
        super(field, university, batch, salary)
        this.incomeDigit = incomeDigit
    }


    public webDevs(): string {
        // this.salary is accessible here due to protected in nature, but this.isEmployeed is not accessible due to private in nature
        return `Web Devs has salary of ${this.salary} and mostly they are EMPLOYEED`
    }

    public testProtectedFunction(): string {
        return this.problemSolving()
    }
}

const softEngObj = new SoftEng("JS Dev", "MAJU", 2012, 230000, 6);
// console.log(softEngObj.webDevs());
// console.log(softEngObj.employementStatus());
// console.log(softEngObj.testProtectedFunction());

// ================= CREATING A CLASS USING AN INTERFACE 
interface Developer {
    tech: string,
    experience: number,
    designation: string,
    coding(lang: string): string
}

class Web implements Developer {
    constructor(public tech: string, public experience: number, public designation: string) {
        this.tech = tech,
            this.experience = experience
        this.designation = designation

    }

    public coding(lang: string): string {
        return `I code in ${lang}`
    }
}

const webObj = new Web("TypeScript", 3, "Soft Developer");
// console.log(webObj.coding("TypeScript"));

// ============= STATIC KEYWORD

class FrontendDev {

    constructor(public name: string, public company: string, public salaryPackage: number) {
        this.name = name
        this.company = company
        this.salaryPackage = salaryPackage
    }
    // static property
    static tech: string = "ReactJS"

    // static method
    public static FrontendEng(skill: string): string {
        return `They are good at ${skill} and ${FrontendDev.tech}`
    }


    public creativity(percentage: number): string {
        return `They are ${percentage} % creative people and good at ${FrontendDev.tech}`
    }

}

// console.log(FrontendDev.company);   // throws an error due to non static property, required instantiation
// console.log(FrontendDev.tech);
// console.log(FrontendDev.FrontendEng("JS"));

// const frontendObj = new FrontendDev("Ahti","Gaditek",70000);
// console.log(frontendObj.tech);  // throws an error due to static property, required Class.propety
// console.log(frontendObj.creativity(90));

class JrFrontendDev extends FrontendDev {
    constructor(public name: string, public company: string, public salaryPackage: number) {
        super(name, company, salaryPackage)
    }
}

// console.log(JrFrontendDev.tech);
// console.log(JrFrontendDev.FrontendEng("OOP"));


// ================ GETTERS AND SETTERS 

class Product {
    private stock: string[];

    constructor(){
        this.stock = []
    }

    // getter function
    public get productStock():string[]{
        return this.stock
    }

    // setter function
    public set productStock(products:string[]){
        this.stock = products
    }

}
const gymWears = new Product()
// setting a value
gymWears.productStock = ["Tank","Shorts","Shoes"];
// console.log(gymWears.productStock);


// extend the Product class to check the existance of getter and setter in it or not
class MensJeans extends Product{
}

const jeans = new MensJeans()
jeans.productStock=["new jeans","narrow jeans"];
console.log(jeans.productStock);









