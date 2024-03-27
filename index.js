#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 35000;
let myPin = 4842;
let pin = await inquirer.prompt({
    name: "pincode",
    type: "number",
    message: "Enter your PIN."
});
if (pin.pincode === myPin) {
    console.log("Welcome to your Account!");
    let actionAns = await inquirer.prompt({
        name: "action",
        message: "choose an option",
        type: "list",
        choices: ["Check Balance", "Withdraw", "Fast Cashout"]
    });
    if (actionAns.action === "Check Balance") {
        console.log(`Your Current balance is: ${myBalance}`);
    }
    else if (actionAns.action === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "What is the Amount you wish to take out?"
        });
        //  myBalance -= WithdrawAmount.amount
        if (WithdrawAmount.amount < myBalance) {
            myBalance -= WithdrawAmount.amount,
                console.log("Successful Transaction!");
            console.log(`Your remaninig Amount is: ${myBalance}`);
        }
        else if (WithdrawAmount.amount > myBalance) {
            console.log(`Transaction Cannot Be Processed!\nYour current Amount is: ${myBalance}`);
        }
    }
    else if (actionAns.action === "Fast Cashout") {
        let cashAmount = await inquirer.prompt({
            name: "cash",
            type: "rawlist",
            message: "Choose your Amount!",
            choices: ["5000", "10000", "20000", "30000", "35000"]
        });
        myBalance -= cashAmount.cash;
        console.log("Successful Transaction!"),
            console.log(`Your remaining Amount is: ${myBalance}`);
    }
}
else if (pin.pincode !== myPin) {
    console.log("Incorrect PIN! Please try Again.");
}
