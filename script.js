let transactions = [];

function addTransaction() {
    const desc = document.getElementById("desc").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!desc || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    transactions.push({ desc, amount });

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function updateUI() {
    const list = document.getElementById("list");
    const balance = document.getElementById("balance");

    list.innerHTML = "";

    let total = 0;

    transactions.forEach((t, index) => {
        total += t.amount;

        const li = document.createElement("li");
        li.innerHTML = `
            ${t.desc} : ₹${t.amount}
            <button onclick="deleteTransaction(${index})">X</button>
        `;
        list.appendChild(li);
    });

    balance.textContent = total;
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}
