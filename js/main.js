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

  console.log(distance);
}, 1000);
