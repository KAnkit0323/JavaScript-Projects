const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // what if we don't do parseInt
    const height = parseInt( document.querySelector('#height').value);
    const weight = parseInt( document.querySelector('#weight').value);
    const precision = parseInt( document.querySelector('#precision').value);

    const result = document.querySelector('#results');

    if( height === "" || height < 0 || isNaN(height) ) {
        result.innerHTML = 'Please give a valid height';
    }
    else if ( weight === "" || weight < 0 || isNaN(weight) ) {
        result.innerHTML = 'Please give a valid weight';
    }
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(precision);

        // show the result
        // result.innerHTML = `<span>${bmi} <br> </span>`

        if ( bmi < 18.6 ) {
            result.innerHTML = ` <span> ${bmi} <br> You are under Weight </span> `;
        }
        else if ( bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = ` <span> ${bmi} <br> Your weight is in normal range </span> `;
        }
        else {
            result.innerHTML = ` <span> ${bmi} <br> You are over Weight </span> `;
        }
    }

});