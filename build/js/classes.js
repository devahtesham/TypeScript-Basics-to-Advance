"use strict";
// =========== simple class structure
class Engineer {
    // ----- this is making my code duplication, to avoid this we use access modifiers/visibility modifiers 
    // field: string
    // university: string
    // batch: number
    // isEmployeed: boolean
    constructor(field, university, batch, salary, isEmployeed = true // we can also make an argument optional by setting its default paramater value
    ) {
        this.field = field;
        this.university = university;
        this.batch = batch;
        this.salary = salary;
        this.isEmployeed = isEmployeed;
        this.field = field;
        this.university = university;
        this.batch = batch;
        this.isEmployeed = isEmployeed;
        this.salary = salary;
    }
    problemSolving() {
        return `${this.field} Engineers are good problem solver`;
    }
    salaryInfo(range = 'min') {
        return `The avaerage salary of an Engineer is ${this.salary} ${range}`;
    }
    employementStatus() {
        return `Eployement Status is ${this.isEmployeed}`;
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
    constructor(field, university, batch, salary, incomeDigit) {
        super(field, university, batch, salary);
        this.incomeDigit = incomeDigit;
        this.incomeDigit = incomeDigit;
    }
    webDevs() {
        // this.salary is accessible here due to protected in nature, but this.isEmployeed is not accessible due to private in nature
        return `Web Devs has salary of ${this.salary} and mostly they are EMPLOYEED`;
    }
    testProtectedFunction() {
        return this.problemSolving();
    }
}
const softEngObj = new SoftEng("JS Dev", "MAJU", 2012, 230000, 6);
class Web {
    constructor(tech, experience, designation) {
        this.tech = tech;
        this.experience = experience;
        this.designation = designation;
        this.tech = tech,
            this.experience = experience;
        this.designation = designation;
    }
    coding(lang) {
        return `I code in ${lang}`;
    }
}
const webObj = new Web("TypeScript", 3, "Soft Developer");
// console.log(webObj.coding("TypeScript"));
// ============= STATIC KEYWORD
class FrontendDev {
    constructor(name, company, salaryPackage) {
        this.name = name;
        this.company = company;
        this.salaryPackage = salaryPackage;
        this.name = name;
        this.company = company;
        this.salaryPackage = salaryPackage;
    }
    // static method
    static FrontendEng(skill) {
        return `They are good at ${skill} and ${FrontendDev.tech}`;
    }
    creativity(percentage) {
        return `They are ${percentage} % creative people and good at ${FrontendDev.tech}`;
    }
}
// static property
FrontendDev.tech = "ReactJS";
// console.log(FrontendDev.company);   // throws an error due to non static property, required instantiation
// console.log(FrontendDev.tech);
// console.log(FrontendDev.FrontendEng("JS"));
// const frontendObj = new FrontendDev("Ahti","Gaditek",70000);
// console.log(frontendObj.tech);  // throws an error due to static property, required Class.propety
// console.log(frontendObj.creativity(90));
class JrFrontendDev extends FrontendDev {
    constructor(name, company, salaryPackage) {
        super(name, company, salaryPackage);
        this.name = name;
        this.company = company;
        this.salaryPackage = salaryPackage;
    }
}
console.log(JrFrontendDev.tech);
console.log(JrFrontendDev.FrontendEng("OOP"));
