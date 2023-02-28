class Account {
    min_bal=0;
    Acc_Bal=0;

    depoist_Amount(amount){
        this.Acc_Bal=this.Acc_Bal+ amount
    }
    get_Bal(amount) {
        return this.Acc_Bal - amount
    }
    
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log("**Deposit**")
a1.depoist_Amount(100)
a2.depoist_Amount(50000);
console.log(a1)
console.log(a2)

console.log("**get Bal***")
let r1 = a1.get_Bal(50)
let r2= a2.get_Bal(1000)
console.log(r1)
console.log(r2)