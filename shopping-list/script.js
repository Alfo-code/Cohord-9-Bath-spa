let list = ["egg"];

function addElem() {
    let output = "";
    let newItem = document.getElementById("item").value;

    if(list.includes(newItem)){
        alert("This Item is already in the list")
    }
    else{
        list.push(newItem)
    }

    for(let i = 0; i < list.length; i++){
        output += list[i] + "<br>";

    }

document.getElementById("results").innerHTML = output;

}

console.log(list);

 