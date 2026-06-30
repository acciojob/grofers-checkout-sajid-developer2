const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
	// Add your code here

    // Remove previous total row if it exists
    const oldRow = document.getElementById("total-row");
    if (oldRow) {
        oldRow.remove();
    }

    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(function(price) {
        total += Number(price.textContent);
    });

    const row = document.createElement("tr");
    row.id = "total-row";

    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = "Total Price: " + total;

    row.appendChild(cell);

    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);