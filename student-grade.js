let btn = document.querySelector('#btn') //select the button in DOM
btn.addEventListener('click', stdGrades) // Listen for a click to call the stdGrades function



function stdGrades() {
    let grade= prompt('Enter the student marks: ')//prompting an input box on page so as to enter the grades
    let div = document.querySelector('.output')// seslecting the outup div in DOM and assigning it to a variable called div
    let h3 = document.createElement('h3') //creating a h3
   
     if (grade > 79 && grade < 100) {
        h3.textContent =`Student score is ${grade} and that is an A`;
        // if the grade entered is less than 100 but greater than 79, the innertext of the h3 will be the one in the template string
    }else if (grade >= 60 && grade <= 79) {
        h3.textContent =`Student score is ${grade} and that is a B`;
         // if the grade entered is less than or equal to 79 but greater or equal to 60, the innertext of the h3 will be the one in the template string
    }else if (grade >= 49 && grade <= 59) {
        h3.textContent =`Student score is ${grade} and that is a C`;
        // if the grade entered is less than or equal to 59 but greater or equal to 49, the innertext of the h3 will be the one in the template string
    }else if (grade >= 40 && grade < 49) {
       h3.textContent =`Student score is ${grade} and that is a D`;
        // if the grade entered is less than 49 but greater or equal to 40, the innertext of the h3 will be the one in the template string
    }else if (grade < 40){
        h3.textContent =`Student score is ${grade} and that is an E`;
        // if the grade entered is less 40 , the innertext of the h3 will be the one in the template string
    }else{
        h3.textContent = 'Enter a valid score!!'
        //incase the value entered is not a number or not a number in the specified ranges the error message will show
    }
    div.appendChild(h3)
    //appending h3 to div
}