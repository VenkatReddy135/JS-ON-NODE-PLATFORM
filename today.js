/*class Customer{
    constructor(name,number){
        this.name=name;
        this.number=number;
    }
    getFullName(){
        return this.name+" "+this.number;
    }
}
    var obj1=new Customer("venkat",82970);
    var obj2=new Customer("hari",92470);
    console.log(obj1.getFullName()); */
/*function customer(name,mobile){
    this.name=name;
    this.mobile=mobile;
}
var emp1=new customer("hari",70320);
var emp2=new customer("ravi",92470);
console.log(emp1.name+" "+emp1.mobile);*/
/*var x=`ravi`;
var y=`hi iam '${x}'.
iam very happy to see you
in the way you see me
          iam very happy and proud`;
console.log(y);*/
/* function add(...x){
     var result=0;
     for(i=0;i<x.length;i++){
         result+=x[i];
         console.log(result);
     }
 }
 add(1,2,3,4,14,67,18);*/
/*var cars=["benz","bmw","alto"];
for(i=0;i<cars.length;i+=2){
    console.log(cars[2]);
}*/
/*var Employee={
    baseSalary:25000,
    overtime:10,
    rate:20,
    getWage:function(){
          return this.baseSalary+(this.overtime*this.rate)
    }
};
console.log(Employee.baseSalary);*/
/*function Staff(baseSalary,overtime,rate,){
    this.baseSalary=baseSalary;
    this.overtime=overtime;
    this.rate=rate;
    this.getWage=function(){
       return this.baseSalary +(overtime*rate);
    };
}
var emply1=new Staff(2400,10,20);
var emply2=new Staff(3000,20,30);
console.log(emply1.rate);*/
var Labour = /** @class */ (function () {
    function Labour(Fname, Lname) {
        this.fname = Fname;
        this.lname = Lname;
    }
    Labour.prototype.getFullName = function () {
        return this.fname + " " + this.lname;
    };
    return Labour;
}());
var lab = new Labour("ravi", "krishna");
console.log(lab.getFullName());
