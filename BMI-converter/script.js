function bmiGuide() {
    document.getElementById("guide-image").src = "bmi-guide.jpg"

}
// const form = document.querySelector('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if((height === '') || (height < 0) || (isNaN(height))){
//         //NaN !== NaN
//         results.innerHTML = "Please provide a valid height";

//     } else if (weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = "Please provide a valid weight";
//     } else {
//     //calculate BMI
//     const bmi = (weight / ((height*height)/10000)).toFixed(2);
//     //display the results
//     results.innerHTML = `<span>${bmi}</span>`
//     }


// });

let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");

function calculateBMI() {
    

    let height = heightInput.value;
    let weight = weightInput.value;


    const bmi = (weight / ((height*height)/10000));


     results.innerHTML = `Your BMI is ${bmi}S`
    
};