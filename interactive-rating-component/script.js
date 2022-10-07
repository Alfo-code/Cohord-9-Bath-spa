const form = document.querySelector(".rating-form");
const rating = document.querySelector(".rating");
const submission = document.querySelector(".submission");
const ratingOutput = document.getElementById("ratingOutput");

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    const output = form.rating.value;
    console.log(output);

    rating.style.display = "none";
    ratingOutput.innerHTML = `You selected ${output} out of 5`;
    submission.style.display = "flex";
});