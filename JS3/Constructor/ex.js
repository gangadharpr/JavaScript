class Account {
    acc_Id;
    acc_Name;
    acc_Bal = 0
    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Bal = amount
    }
deposit(amount){
    this.acc_Bal=this.acc_Bal+amount
}
withdraw(amount){
    this.acc_Bal=this.acc_Bal-amount
}
}
let a1 = new Account(101, "Rahul", 5000)
console.log(a1)
a1.withdraw(2000)
console.log(a1)
a1.withdraw(500)
console.log(a1)
a1.deposit(10000)
console.log(a1)