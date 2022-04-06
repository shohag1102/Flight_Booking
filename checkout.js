// collect data
let from = localStorage.getItem("from")
let to = localStorage.getItem("to")
let departDate = localStorage.getItem("departDate")
let returnDate = localStorage.getItem("returnDate")
let classType = localStorage.getItem("classType")
let noOfAdult = localStorage.getItem("noOfAdult")
let noOfChild = localStorage.getItem("noOfChild")


// display data
document.getElementById('from').innerHTML = `${from}`
document.getElementById('to').innerHTML = `${to}`
document.getElementById('journeyDate').innerHTML = `${departDate}`
document.getElementById('returnDate').innerHTML = `${returnDate}`
document.getElementById('classType').innerHTML = `${classType}`
document.getElementById('adultPrice').innerHTML = `$${noOfAdult * 50}`
document.getElementById('childrenPrice').innerHTML = `$${noOfChild * 20}`
document.getElementById('totalPrice').innerHTML = `$${noOfAdult * 50 + noOfChild * 20}`

