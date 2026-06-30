
// Add Money Functionality
document.getElementById("home-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const Acc_no = "11309429057";
    const pinNumber = "1234";

    const totalBalance = parseFloat(document.getElementById("available-balance").innerText);
    const accountNumberValue = document.getElementById("accountNumber").value;
    const pinNumberValue = document.getElementById("pinNumber").value;
    const addBalanceValue = parseFloat(document.getElementById("addBalance").value);

    // Validation
    if (accountNumberValue.length !== 11) {
        alert("Account Number must be 11 digits");
        return;
    }

    if (accountNumberValue !== Acc_no  ) {
        alert("Invalid Account Number");
        return;
    }
     if (  pinNumberValue !== pinNumber) {
        alert("Invalid  PIN");
        return;
    }

    if (isNaN(addBalanceValue) || addBalanceValue <= 0) {
        alert("Enter a valid amount");
        return;
    }

    const newBalance = totalBalance + addBalanceValue;
    document.getElementById("available-balance").innerText = newBalance;

    alert(`Balance ${addBalanceValue} added successfully.`);
});


// Cash Out Functionality
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const Acc_no = "11309429057";
    const pinNumber = "1234";

    const totalBalance = parseFloat(document.getElementById("available-balance").innerText);
    const accountNumberValue = document.getElementById("cash-account-number").value;
    const pinNumberValue = document.getElementById("cash-pin-number").value;
    const withdrawAmount = parseFloat(document.getElementById("cash-amount").value);

    // Validation
    if (accountNumberValue.length !== 11) {
        alert("Account Number must be 11 digits");
        return;
    }

    if (accountNumberValue !== Acc_no ) {
        alert("Invalid Account Number");
        return;
    }
    if (  pinNumberValue !== pinNumber) {
        alert("Invalid  PIN");
        return;
    }

    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (withdrawAmount > totalBalance) {
        alert("Insufficient Balance");
        return;
    }

    const newBalance = totalBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = newBalance;

    alert(`Balance ${withdrawAmount} withdrawn successfully.`);
});


// cash-out-btn
document.getElementById("cash-out-btn").addEventListener("click", function (event) {

    event.preventDefault();

document.getElementById("add_money_section").style.display = " none";
 
document.getElementById("cash-out-section").style.display = "block";
 

});
// add-money-btn
document.getElementById("add-money-btn").addEventListener("click", function (event) {

    event.preventDefault();

document.getElementById("add_money_section").style.display = " block";
 
document.getElementById("cash-out-section").style.display = " none";
 

});

// log out btn
document.getElementById("logout-btn").addEventListener("click", function (event) {
      event.preventDefault();
     window.location.href = "./index.html";
} );