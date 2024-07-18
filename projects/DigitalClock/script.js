const clock = document.querySelector('#clock');
const clock2 = document.querySelector('#clocks');
// or document.getElementById('clock')

let date = new Date();

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 500);
clocks.innerHTML = `${date.toDateString()}`;
