document.addEventListener('DOMContentLoaded', ()=>{
let btn = document.querySelector('form')// selecting the form element from DOM using query selector
btn.addEventListener('submit' ,(e) => { //from the form, adding an event listener to detect submit action
    e.preventDefault() //instructing the submit action to avoid its default refresh action
    let carSpeed = e.target.input.value // assigning the value of the input from input box to variable 
    speed(carSpeed) // calling the speed function and giving it the car peed(input) as a parameter
    btn.reset()
    
})

function speed(currentSpeed) {
    const acceptedSpeed = 70 //setting the constant accepted car speed
    let div = document.querySelector('.answer-box') //selecting the answer box div from div
    let h3 = document.createElement('h3')// creating a h3 

    if (currentSpeed <= acceptedSpeed) {
    h3.textContent ='OK';
      //if the currentspeed is equal to accepted speed the h3 inner text is ok  
    }else{
        let excessSpeed = currentSpeed - acceptedSpeed // calculating the total excess
        let demerits = Math.floor(excessSpeed / 5)// dividing the excess speed by 5 and then using math.floor to round it down so as to find demerit points
        h3.textContent = `You have ${demerits} demerit points`;
        //assigning the h3 a text

        

        if (demerits > 12) {
            h3.textContent = `License suspended.You have ${demerits} demerit points!`
            //once the demerits points calculated above are greater than 12 it shows licence suspended
        }
    }
    div.appendChild(h3)// appending the h3 to the div() we targeted before
}
});
