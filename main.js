
function generateFizzBuzz() {
    const container = document.getElementById('fizzBuzzContainer');
    for (let i = 1; i <= 100; i++) {
        let output = i;
        let cssClass = ""; 

    
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
            cssClass = "fizzbuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
            cssClass = "fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
            cssClass = "buzz";
        }

        
        const divElement = document.createElement('div');
        divElement.classList.add('fizzbuzz-item');
        if (cssClass) {
            divElement.classList.add(cssClass);
        }
        divElement.innerText = output;

        
        container.append(divElement);
    }
}

window.onload = generateFizzBuzz;
