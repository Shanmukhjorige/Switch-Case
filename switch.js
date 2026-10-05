//1.Day Number
// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }

//2.simple calculator.
// let a = 10;
// let b = 5;
// let operator = "+";

// switch (operator) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     default:
//         console.log("Invalid operator");
// }

//3.Month Number.
// let month = 4;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     default:
//         console.log("Invalid month");
// }

//4.traffic signal.
// let signal = "yellow";

// switch (signal) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Get Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid signal");
// }

//5.ATM Menu
// let choice = 2;
// let balance = 10000;

// switch (choice) {
//     case 1:
//         console.log("Balance =", balance);
//         break;

//     case 2:
//         let withdraw = 3000;

//         if (withdraw <= balance) {
//             console.log("Withdrawal Successful");
//             console.log("Remaining Balance =", balance - withdraw);
//         } else {
//             console.log("Insufficient Balance");
//         }
//         break;

//     case 3:
//         console.log("Thank you for using ATM");
//         break;

//     default:
//         console.log("Invalid Choice");
// }

//6.food menu with price.
let choice = 3;
let price;

switch (choice) {
    case 1:
        price = 100;
        console.log("Pizza =", price);
        break;

    case 2:
        price = 80;
        console.log("Burger =", price);
        break;

    case 3:
        price = 50;
        console.log("Sandwich =", price);
        break;

    case 4:
        price = 40;
        console.log("Juice =", price);
        break;

    default:
        console.log("Invalid choice");
}