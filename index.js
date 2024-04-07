import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 15000;
let myPin = 2424;
//Print welcome message
console.log("Welcome to Galaxy junction Atm Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code: "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login successfully.");
    //console.log(`Current account balance is ${myBalance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operatin",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw amount", "Check balance"]
        }
    ]);
    if (operationAnswer.operatin === "Withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                messsage: "Enter the amount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operatin === "Check balance") {
        console.log(`Your account balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect , Try again");
}
