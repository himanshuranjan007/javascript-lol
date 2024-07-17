const form = document.querySelector('form');
// this will give u empty value when reloaded
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); //  # is used in the document.querySelector method to select an element by its id. This is different from using a . to select an element by its class.
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    // show the results

    // overview
    function bmiContext(bmi) {
      if (bmi <= 18.6) {
        return 'Underweight';
      }
      if (bmi > 18.6 && bmi <= 24.9) {
        return 'Healthy';
      }
      if (bmi > 24.9) {
        return 'Overweight';
      }
    }
    const x = bmiContext(bmi);
    console.log(x);

    results.innerHTML = `<span>${bmi} <br> ${x} </span>`;
  }
});
