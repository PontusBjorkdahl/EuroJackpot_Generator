function generateJackPotNumbers() {
    document.getElementById("numbers_wrapper").innerHTML = "";
    
    for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 50) + 1;
        let numberElement = document.createElement("div");
        numberElement.className = "first_five_numbers";
        numberElement.innerHTML = number;
        document.getElementById("numbers_wrapper").appendChild(numberElement);
    }
    
    for (let i = 0; i < 2; i++) {
        let number = Math.floor(Math.random() * 12) + 1;
        let numberElement = document.createElement("div");
        numberElement.className = "first_five_numbers last_two_numbers";
        numberElement.innerHTML = number;
        document.getElementById("numbers_wrapper").appendChild(numberElement);
    }
}

generateJackPotNumbers();


