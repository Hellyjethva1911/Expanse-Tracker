let total = 0;

const button = document.getElementById("addBtn");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

button.addEventListener("click", function () {

    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span><span>₹${amount}</span>`;

    expenseList.appendChild(li);

    // Update total
    total += amount;
    totalDisplay.textContent = total;

    // Clear inputs
    expenseName.value = "";
    expenseAmount.value = "";
});