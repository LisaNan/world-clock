function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDate = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesDate.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyDate = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyDate.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyDate.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoDate = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoDate.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoDate.format("h:mm:ss [<small>]A[</small>]");

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDate = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisDate.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
