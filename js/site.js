// Get user data
// validate data
// grab user data from input fields 

function getData() {
    let loanAmount = document.getElementById("loanAmount").value
    let payments = document.getElementById("loanPayments").value
    let loanRate = document.getElementById("loanRate").value
    calcData(loanAmount, payments, loanRate)
    displayData(loanAmount, payments, loanRate)
}

// Calc user data
// write formula for needed data
// loop over data
// store data in an object or array

function calcData(loanAmount, payments, loanRate) {
    let monthlyPayment =
        console.log(monthlyPayment)
}

// Display data
// loop over object/array
// create tr with td's
// input created node into table

function displayData(loanAmount) {
    document.getElementById("totalPrincipal").innerHTML = `${loanAmount}`
}