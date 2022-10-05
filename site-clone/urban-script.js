 //Functions for the toggle dark mode

function darkMode() {

    const toggleButton= document.getElementById("btn-dark");
    const dark = document.getElementsByClassName("wrapper");
    for (let i = 0; i <= dark.length; i++) {
        if (dark[i].classList.contains("dark-mode")){
            dark[i].classList.remove("dark-mode");
        } else {
            dark[i].classList.add("dark-mode");
        }
    }
    
}
