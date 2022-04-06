let submitBtn = document.querySelector('.submit')
let from = document.querySelector('#start')
let to = document.querySelector('#end')
let departDate = document.querySelector('#depart')
let returnDate = document.querySelector('#return')
let classType = document.querySelector('#classType')
let noOfAdult = document.querySelector('#adult')
let noOfChild = document.querySelector('#child')



submitBtn.addEventListener('click', function(){
    // location.href = "checkout_page.html"
    from = from.value
    to = to.value
    departDate = departDate.value
    returnDate = returnDate.value
    // classType = select.options[select.selectedIndex].value;
    classType = classType.value
    noOfAdult = noOfAdult.value
    noOfChild = noOfChild.value

    localStorage.setItem("from", from)
    localStorage.setItem("to", to)
    localStorage.setItem("departDate", departDate)
    localStorage.setItem("returnDate", returnDate)
    localStorage.setItem("classType", classType)
    localStorage.setItem("noOfAdult", noOfAdult)
    localStorage.setItem("noOfChild", noOfChild)
    
    console.log(classType);
})