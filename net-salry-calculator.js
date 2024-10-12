document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.querySelector('#payForm')//Getting form from the dom
    form.addEventListener('submit', (e) => { // Adding an event listener to listen for a submit event
        e.preventDefault()//preventing the page from refreshing when the submit button is clicked
        let grossSalary = e.target.grossPayInput.value// getting the value of gross salary from input
        let nonCash = e.target.ncb.value
        netPay(grossSalary) //calling tthe netpay function and giving it a gross salarya s parameter
        form.reset()//ensuring the form resets once you submit
    })
 

    //basic salary = grossSalary - total deductions
//total deductions = nssf + paye + shif + housing levy
// shif = 2.75% of gross
// housing = 1.5% of gross
    function netPay(grossSalary,noncash = 0) {

        const shif = (grossSalary * 2.75) / 100;//setting the shif constant
        let shifDoc = document.createElement('li')//creating a list element for the shif
        shifDoc.textContent = `shif :       ${shif}`//assigning the inner text a value
        const housingLevy = (grossSalary * 1.5) / 100;//setting the housing levy constant
        let levy = document.createElement('li')//creating a list element for the housing levy
        levy.textContent = `Housing Levy :  ${housingLevy}`//giving the list element a text content
        let ul = document.querySelector('ul')//selecting the unordered list from DOM
        let gpay = document.createElement('h3')//creating a list elemennt for gross pay
        gpay.textContent= `Gross Salary :               ${grossSalary}`//giving the gross pay list element an inner text
        ul.appendChild(gpay)//appending the grosspay element to the unordered listt 
        

        let  totalNssf = document.createElement('li')//creating a list element for the nssf
        let nssf;//iniitialising nssf
        if (grossSalary <= 10000) {
            nssf = 600
            totalNssf.textContent = 'Nssf :     600'
        }else if (grossSalary > 10000 && grossSalary <= 15000) {
            nssf = 900
            totalNssf.textContent = 'Nssf :     900'
        }else if (grossSalary > 15000 && grossSalary <= 20000) {
            nssf = 1200
            totalNssf.textContent = 'Nssf :     1200'
        }else if (grossSalary > 20000 && grossSalary <= 30000) {
            nssf = 1800
            totalNssf.textContent = 'Nssf :     1800'
        }else if (grossSalary > 30000 ) {
            nssf = 2160
            totalNssf.textContent = 'Nssf :     2160'
        }
        ul.appendChild(totalNssf)//appending the nssf element to the unordered list

        let taxableIncome = grossSalary - nssf // the taxable income is acquired from subtracting the nssf from the gross pay

        let paye;//initialising the paye
        let payee = document.createElement('li')//creating a list element for paye

        if (taxableIncome <= 24000) {
            paye = (taxableIncome * 10) / 100 //payee is equal to 10% of taxable income if incom is less than or equal to 24000
            payee.textContent = `PAYE :     ${paye}`//giving the list element a text content
        }else if (taxableIncome > 24000 && taxableIncome <= 32333) {
            paye = ((24000 * 0.1) + ((taxableIncome - 24000) * 0.25))//if the taxable income is more than 24000 but less than or equal to 32333, paye is 10% for the first 24000 and the remainder 25%
            payee.textContent = `PAYE :     ${paye}`//giving the list element a text content
        }else if (taxableIncome > 32333 && taxableIncome <= 500000) {
            paye = ((24000 * 0.1) + (8333 * 0.25) + ((taxableIncome-32333) * 0.3))//paye is the total of 10% of the first 24000, then 25% of the next 8333, then the remainder has a paye percentage 0f 30&
            payee.textContent = `PAYE :     ${paye}`//giving the list element a text content
        }else if (taxableIncome > 500000 && taxableIncome <= 800000) {
            paye = ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((taxableIncome - 500000) * 0.325))//total paye is equalto 10% 0f the first 24000 added  to 25% for the next 8333 added to 30% for the next 467667 added to 32.5% of the remainder 
            payee.textContent = `PAYE :     ${paye}`//giving the list element a text content
        }else if (taxableIncome > 800000) {//if taxable income is greater than 800000
            paye = ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000* 0.325) + ((taxableIncome - 800000) * 0.35))//total paye is got from 10% of the first 24000 added to 25% of the net 8333 added to 30% of the next 467667 added to 32.5% of the next 300000 added to 35% of the remainder
            payee.textContent = `PAYE :     ${paye}`//giving the list element a text content
        }
        
        totalDeductions = shif + housingLevy + nssf + paye //getting total deductions by adding the deductibles
        tDeductions = document.createElement('h3')//creating a h3 element for total deductions
        tDeductions.textContent = `Total Deductions             ${totalDeductions}`//giving the h3 a text content

        let netpay = grossSalary - totalDeductions//getting the etpay by subtracting the gross salary and total deductions
        let npay = document.createElement('h3')
        npay.textContent = `Net pay :           ${netpay}`



        //appending the payee,shif,housing levy,total deductions and net pay to the unorederd list
        ul.appendChild(payee)
        ul.appendChild(shifDoc)
        ul.appendChild(levy)
        ul.appendChild(tDeductions)
        ul.appendChild(npay)
    }


});

