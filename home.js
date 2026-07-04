
const transactionData = [ ]

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
    console.log("add money clickeddd");

    const Acc_no = "11309429057";
    const pinNumber = "1234";

    const totalBalance = parseFloat(document.getElementById("available-balance").innerText);
    const accountNumberValue = document.getElementById("accountNumber").value;
    const pinNumberValue = document.getElementById("pinNumber").value;
    const addBalanceValue = parseFloat(document.getElementById("addBalance").value);

    // Validation
    

    if (!validateAccount(accountNumberValue, pinNumberValue)) {
        return;
    }

    if (isNaN(addBalanceValue) || addBalanceValue <= 0) {
        alert("Enter a valid amount");
        return;
    }
   

    if (isNaN(addBalanceValue) || addBalanceValue <= 0) {
        alert("Enter a valid amount");
        return;
    }

    const newBalance = totalBalance + addBalanceValue;
    document.getElementById("available-balance").innerText = newBalance;

    alert(`Balance ${addBalanceValue} added successfully.`);

   const transaction = {
        type: "Add Money",
        amount: addBalanceValue,
        date: new Date().toLocaleString(),
    };
    transactionData.push(transaction);

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

    const transaction = {
        type: "Cash Out",
        amount: withdrawAmount,
        date: new Date().toLocaleString(),
    };
    transactionData.push(transaction);
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

    const transaction = {
        type: "Transfer Money",
        amount: transferAmount ,
        date: new Date().toLocaleString(),
    };
    transactionData.push(transaction);
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

    const transaction = {
        type: "Get Bonus",
        amount: bonusAmount,
        date: new Date().toLocaleString(),
    };
    transactionData.push(transaction);
});

// transaction history view section
document.getElementById("transaction-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const transactionContainer = document.getElementById("transaction-container");
 
    transactionContainer.innerHTML = ""; //remove previous data

    for (const data of transactionData) {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="flex justify-between items-center mb-2.5 bg-white rounded-2xl p-3">
        <div class="flex gap-5  " >
            <img class=" rounded-4xl p-4 bg-gray-200" src="./assets/purse1.png" alt="">
            <div >
                <h1 class="text-xl">${data.type}:${data.amount} Taka</h1>
                <p class="text-gray-500">${data.date}</p>
            </div>
        </div>
        <p class="text-2xl rotate-90">...</p>
        </div>
        `;

        transactionContainer.appendChild(div);
    }
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

//Transaction-btn
document.getElementById("transaction-btn").addEventListener("click", function (event) {
    // console.log("transaction btn clickeddd");
    event.preventDefault();
     handleFormToggle("transaction-section");
    activeButton("transaction-btn");
});

// log out btn
document.getElementById("logout-btn").addEventListener("click", function (event) {
      event.preventDefault();
     window.location.href = "./index.html";
} );