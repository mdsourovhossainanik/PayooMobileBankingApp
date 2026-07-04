
function validateAccount(accountNumber, pin) {
    const validAccount = "11309429057";
    const validPin = "1234";

    if (accountNumber.length !== 11) {
        alert("Account Number must be 11 digits");
        return false;
    }

    if (accountNumber !== validAccount) {
        alert("Invalid Account Number");
        return false;
    }

    if (pin !== validPin) {
        alert("Invalid PIN");
        return false;
    }

    return true;
}

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

    if (!validateAccount(accountNumberValue, pinNumberValue)) {
        return;
    }

    if (isNaN(addBalanceValue) || addBalanceValue <= 0) {
        alert("Enter a valid amount");
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


// Transfer money Functionality
document.getElementById("Transfer-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const totalBalance = parseFloat(document.getElementById("available-balance").innerText);
    const accountNumberValue = document.getElementById("transfer-account-number").value;
    const pinNumberValue = document.getElementById("transfer-pin-number").value;
    const transferAmount = parseFloat(document.getElementById("transfer-amount").value);

    // Common Validation
    if (!validateAccount(accountNumberValue, pinNumberValue)) {
        return;
    }

    // Amount Validation
    if (isNaN(transferAmount) || transferAmount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    // Balance Check
    if (transferAmount > totalBalance) {
        alert("Insufficient Balance");
        return;
    }

    // Update Balance
    const newBalance = totalBalance - transferAmount;
    document.getElementById("available-balance").innerText = newBalance;

    alert(`Amount ${transferAmount} transferred to ${accountNumberValue} successfully.`);
});

// GetBonus Functionality
document.getElementById("getBonus-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const totalBalance = parseFloat(document.getElementById("available-balance").innerText);
    const accountNumberValue = document.getElementById("getBonus-account-number").value;
    const pinNumberValue = document.getElementById("getBonus-pin-number").value;
    const bonusPercent = parseFloat(document.getElementById("getBonus-amount").value);

    // Reusable Validation
    if (!validateAccount(accountNumberValue, pinNumberValue)) {
        return;
    }

    const bonusAmount = totalBalance * (bonusPercent / 100);
    const newBalance = totalBalance + bonusAmount;

    document.getElementById("available-balance").innerText = newBalance;

    alert(`Bonus ${bonusAmount} added successfully.`);
});


// handle toggle form function 
function handleFormToggle(formId) {
    
const forms = document.getElementsByClassName("form");
for (const form of forms) {
    form.style.display = "none";
}
document.getElementById(formId).style.display = "block";


}
// function Active btn
function activeButton(id) {
    const buttons = document.getElementsByClassName("btn-hover");

    for (const btn of buttons) {
        btn.classList.remove("bg-blue-100", "border-gray-400");
    }

    document.getElementById(id).classList.add("bg-blue-100", "border-gray-400");
}

 
 // add-money-btn
document.getElementById("add-money-btn").addEventListener("click", function (event) {
event.preventDefault();
handleFormToggle("add_money_section");  
activeButton("add-money-btn");
 
});

// cash-out-btn
document.getElementById("cash-out-btn").addEventListener("click", function (event) {
 console.log("cash out clickeddd");
event.preventDefault();
 handleFormToggle("cash-out-section");
 activeButton("cash-out-btn");
});
// transfer btn
document.getElementById("money-transfer-btn").addEventListener("click", function (event) {
 console.log(" transfer btn clickeddd")
event.preventDefault();
 handleFormToggle("transfer-section");
activeButton("money-transfer-btn");

});

 
// get-bonus-btn
document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
console.log("get bonus btn clickeddd");
    event.preventDefault();
  handleFormToggle("getBonus-section");
  activeButton("get-bonus-btn");
});
//pay-bill-btn
document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    console.log("pay bill btn clickeddd");
    event.preventDefault();
     handleFormToggle("payBill-section");
    activeButton("pay-bill-btn");
});

//wallet-btn
document.getElementById("wallet-btn").addEventListener("click", function (event) {
    // console.log("wallet btn clickeddd");
    event.preventDefault();
     handleFormToggle("wallet-section");
    activeButton("wallet-btn");
});

// log out btn
document.getElementById("logout-btn").addEventListener("click", function (event) {
      event.preventDefault();
     window.location.href = "./index.html";
} );