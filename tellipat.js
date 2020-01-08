var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(fname, lname, number) {
        this.Fname = fname;
        this.Lname = lname;
        this.Number = number;
    }
    Employee.prototype.getfullName = function () {
        return this.Fname + " " + this.Lname;
    };
    return Employee;
}());
var Labour = /** @class */ (function (_super) {
    __extends(Labour, _super);
    function Labour() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Labour.prototype.getfullNAme = function () {
        return this.Fname;
    };
    return Labour;
}(Employee));
var lab1 = new Labour("harry", "potter", 13324);
console.log(lab1.getfullNAme());
var emp1 = new Employee("harry", "potter", 13324);
console.log(emp1.getfullName());
console.log(emp1.Fname);
