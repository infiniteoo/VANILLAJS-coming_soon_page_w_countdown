const countdown = document.querySelector(".countdown");

// set launch date (ms)
const launchDate = new Date("Jan 1, 2022 13:00:00").getTime();

console.log(launchDate);

// update every section
const interval = setInterval(() => {
  // get today's date and time (in ms)
  const now = new Date().getTime();

  // distance from now to launch date
  const distance = launchDate - now;

  // time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display result
  countdown.innerHTML = `
  
    
    
    <div><span>${days}</span></div>
    <div><span>${hours}</span></div>
    <div><span>${mins}</span></div>
    <div><span>${seconds}</span></div>
  
  `;
}, 1000);
