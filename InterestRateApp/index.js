/*
 * This calculate function will calculate the user input 
 * stored in their local storage 
 * save data online database for future use's 
 * and based on data the ghrap chart will update 
 */



function calculate(){
  
  const inputs = document.querySelectorAll('input')
  const monthly = document.getElementById('montly')
  const total = document.getElementById('total')
  const totalInterest = document.getElementById('totalInterest')

  /*
   * converting user input into float or decimal value
   * making a new varibale to convert monthly , annual , interest rate
   * 
   */

  const principal = parseFloat(inputs[0].value)
  const interest = parseFloat(inputs[1].value) / 100 / 12 ;
  const payments = parseFloat(inputs[2].value)*12


  // monthly payment figure 
  let x = Math.pow(1 + interest,payments)
  const monthlyPayment = (principal * x * interest) / (x-1)

  // check if its the Finit number 

  if(isFinite(monthlyPayment)){
    monthly.innerHTML = monthlyPayment.toFixed(2)
    total.innerHTML = (monthlyPayment * payments).toFixed(2)
    totalInterest.innerHTML = ((monthlyPayment* payments)-principal).toFixed(2)

    // saving user input , so we can restore the value next time they try to use our app 

    save(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)

      try{ // if any error accure's we will
      
        getLender(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)
      }
      catch(error){
        chart(principal,interest,monthlyPayment,payments)
        console.log(error)
      }
  } else {
    /**
     * result was not a number infinite ,
     * input was invalid 
     * chart will be clear 
     */

    monthly.innerHTML = ""
    total.innerHTML = ""
    totalInterest.innerHTML = ""

    chart()

  }
}

/**
 * Saving user input as properties if the localStorage object . 
 * Those propertice will still be there when the user visit future 
 * 
 */

function save(ele1,ele2,ele3,ele4){
  if(window.localStorage){
    localStorage.loan_amount = ele1 ;
    localStorage.loan_abr = ele2 ;
    localStorage.loan_years = ele3 ;
    localStorage.loan_zipcode = ele4;
  }
}


// automacitally attemt to retstore input fields when loca the document first loads

window.onload(function(){
  // if the browser support storage and we have store some data
  if(window.localStorage && localStorage.loan_amount) {
    document.getElementById('amount').value = localStorage.loan_amount ;
    document.getElementById('abr').value = localStorage.loan_abr;
    document.getElementById('years').value = localStorage.loan_years;
    document.getElementById('zipcode').value = localStorage.loan_zipcode;
  }
})