/*var x=10;
var y=20;
function add(){
    return x*y;
}
console.log(add());*/

let Employee={
    x:10,
    y:20,
    wage:function(){
        return this.x*this.y;
    }
};
console.log(Employee.wage());
