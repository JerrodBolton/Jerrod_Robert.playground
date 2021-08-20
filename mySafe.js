// // alert("What is today")

// function getLocalStorageWithdraw(){ 
    
//     console.log(withdraw);
    
//     const moneyAmount = JSON.stringify(withdraw);

//  localStorage.setItem("everyTransaction", moneyAmount);
// }

// function getUpdatedLS() {
//     const oldData = localStorage.getItem("everyTransaction");
  
//     const  allTransaction = JSON.parse(oldData);
//     // I put this here so that I can this can happen first.
//     if (allTransaction !== null) {
//         withdraw = allTransaction;
//     }
//     //  if the top Statement is false than this one what happened.
//     else {
//       console.log("The storage is ready to be looked at... ");
//     }
//   }
//   // I put this here b/c  I want to call the function
//   getUpdatedLS();


let userName = prompt("what is your name");  

function welcomeBack() {
  document.write(`Welcome back, to your safe ${userName}!!`);
}

welcomeBack();
 


// // I think that I need to make something to pass

// store all the deposits and withdrawals in arrays 

const deposits = []; 
const withdrawals = [];
// initialize the total bance to 25
let totalBalance = 25;
// we start off with $25 so that we can make a withdraw inthe website 
// we got all the elements  here so that it can be a global scopesk in the whole JavaScript
const balanceLabel = document.getElementById("balanceLabel"); 
const userDeposit = document.getElementById("userDeposit");
const depositButton = document.getElementById("depositButton");
const userWithdraw = document.getElementById("userWithdraw");
const withdrawButton = document.getElementById("withdrawButton");

// Create our number formatter.
const $formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    //  this a number formatter that converts numbers to dollars
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  //  source: mdn: international number formatting function
  // url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat 
  });
  // ============================================================================================================================//
// we decided to add an event listener to the deposit button that listens for a click and executes the deposit function
// accept deposits from user, store deposits in array
depositButton.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) { //returns a boolean that indicates whether a value is the reserved value NaN
        alert("Please enter a number.");
        
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));
        // 

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = $formatter.format(totalBalance);
        document.getElementById("balanceLabel").innerHTML = totalBalanceFormatted;

    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});
 // ============================================================================================================================//
// also added an event listener to the deposit button that listens for a click and executes the withdrawal function
// accept withdrawals from user, store withdrawals in array
withdrawButton.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        } 
        else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));
        getLocalStorageWithdraw();

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = $formatter.format(totalBalance);
        document.getElementById("balanceLabel").innerHTML = totalBalanceFormatted;

    // print withdrawal to console to verify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
      
}
}
});

// format TotalBalance to show $ XX.XX (2 decimal places)
let totalBalanceFormatted = $formatter.format(totalBalance);
document.getElementById("balanceLabel").innerHTML = totalBalanceFormatted;





// ================================================================================================================================================================================================================
// //let the ues be able to make a account so that they can login in the bank
// // you will have to work with form

// // this is where the user will input their name
// 'use strict'
// let userName = prompt("what is your name");
// var allAccount = []; // we're store all accounts here

// class Account {
//   constructor(name, balance) {
//     this.name = userName;
//     this.balance = balance;
//     allAccount.push(this);
//   }
//   depositFunds = ($money,newBalance)=>{
//     if($money != null){
// alert('please enter a valid deposit')
//     } else if($money != 0 ){
// alert('please enter a valid deposit')
//     } else {
//       newBalance = $money + this.balance; 
//       return newBalance
//     }
//   }
//   withdrawFunds = ($withdrawn) =>{
//     if($withdrawn < this.balance){
//       this.balance = this.balance - $withdrawn
//     } else if($withdrawn < this.balance){
//       alert('insufficient funds');
//     } else if($withdrawn = null || 0){
//       alert('please enter a valid deposit')
//     }  else{
// return this.balance
//     }
//   }
  
// }



// function welcomeBack() {
//   document.write(`Welcome back, ${userName}!!`);
// }

// function UserInformation() {
//   let startingQuestion = prompt("Is this your first time here?").toUpperCase();
//   //  So I can know if the user been here before

//   if (startingQuestion === "YES") {
//     let accountMakingDecision = prompt(
//       "Would you like to make a account"
//     ).toUpperCase();

//     // asking for a starting balance for new accounts
//     let deposit = prompt("How much are you depositing today");

//     //  console.log(deposit);
//     let $deposit = parseInt(deposit);

//     //  we just want to know if it's here
//     console.log($deposit);

//     let newAcct = new Account(userName, $deposit);
//     console.log(newAcct);
//     console.log(allAccount);
//   } else if (startingQuestion === "NO") {
//     // we need to put what happen if they she no
//     alert("Thanks for return");
//     welcomeBack();
//   }
  
// }
// UserInformation();



