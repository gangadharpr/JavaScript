class Account{
    min_Bal=500;
    constructor(Name,Id,Amount){
        this.Name=Name
        this.Id=Id
        this.Amount=Amount
    }
    get_Deposit(amount){
        this.Amount=this.Amount + Amount
    }
    get_Bal(){
        return this.amount -this.min_Bal
    }
}
let a1=new Account("Ravi" ,101,2000)
console.log(a1)
a1.get_Deposit(2000)
console.log(a1)
a1.get_Bal(1000)
console.log(a1)

console.log(a1.get_Bal)