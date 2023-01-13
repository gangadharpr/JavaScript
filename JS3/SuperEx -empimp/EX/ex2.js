const Account=require("./ex")
class current extends Account{
    constructor(Id,name,amount){
    super(Id,name,amount)
    this.amount=amount
    
    }
}
let c1 = new current (102, "Priyanka", 600000)
console.log(c1)