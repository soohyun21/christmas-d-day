const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmas = new Date("2021-12-24:00:00:00+0900");
  const now = new Date();
  const gap = xmas - now;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor(((gap / 1000) * 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

getTime();
setInterval(getTime, 1000);
