class Employee{
    Fname:string;
    Lname:string;
    Number:number;
    constructor(fname:string,lname:string,number:number){
         this.Fname=fname;
         this.Lname=lname;
         this.Number=number;
    }
    getfullName():string{
        return `${this.Fname} ${this.Lname}`;
    }
}
class Labour extends Employee{

    
    getfullNAme(){
      return this.Fname;
    }

    }
   var lab1=new Labour("harry","potter",13324);
    console.log(lab1.getfullNAme());

    var emp1=new Employee("harry","potter",13324);
 console.log(emp1.getfullName());
 console.log(emp1.Fname);