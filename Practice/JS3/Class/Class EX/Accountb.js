class Account {
    min_Bal = 500; // class properties
    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount;
    }
    open_Accouont() {    // members
        console.log("Account Opened Successfully")
    }
    deposit(amount) {  //members
        this.acc_Amount = this.acc_Amount + amount
    }
    get_Bal() { //members
        return this.acc_Amount - this.min_Bal
    }
}
let a1 = new Account(101, "Rahul", 5000) //creating object
let a2 = new Account(102, "Priyanka", 45000)// creating object
console.log(a1)// properties
console.log(a2)//properties
a1.deposit(2000)
a2.deposit(6000)
console.log(a1)
console.log(a2)
a1.get_Bal(2000)
console.log(a1)

console.log("****printing Bal***")

console.log(a1.get_Bal())
console.log(a2.get_Bal())