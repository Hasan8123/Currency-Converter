import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.00335,
        "EUR": 0.00315,
        "GBP": 0.00270,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "EUR": 0.94,
        "GBP": 0.80,
        "PKR": 300
    },
    "EUR": {
        "USD": 1.06,
        "EUR": 1,
        "GBP": 0.85,
        "PKR": 317.18
    },
    "GBP": {
        "USD": 1.24,
        "EUR": 1.16,
        "GBP": 1,
        "PKR": 369.94
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EUR", "GBP"],
        message: "Select Your Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EUR", "GBP"],
        message: "Select Your Convertion Currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Convertion Amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(` Your Convertion From ${from} To ${to} Is ${result}`);
}
else {
    console.log("Invalid Inputs");
}
