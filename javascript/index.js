function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesDate = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesDate.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDate = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyDate.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoDate = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoDate.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisDate = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisDate.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  function updateCityTime() {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimezone);
    let cityElement = document.querySelector("#cities");

    cityElement.innerHTML = `
    <div class="city-wrapper">
      <div>
        <h2 class="city">${cityName}</h2>
        <div class="date">${cityDate.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityDate.format("hh:mm:ss")} <small>${cityDate.format("A")}</small>
      </div>
    </div>
    `;
  }

  setInterval(updateCityTime, 1000);
}

let citySelect = document.querySelector("#select-city");
citySelect.addEventListener("change", updateCity);

function showHomepageMessage() {
  let homepageMessage = document.querySelector(".back-to-homepage");
  homepageMessage.classList.remove("hidden");
}

function hideHomepageMessage() {
  let homepageMessage = document.querySelector(".back-to-homepage");
  homepageMessage.classList.add("hidden");
}

let homepageLinkElement = document.querySelector(".homepage-link");
homepageLinkElement.addEventListener("mouseenter", showHomepageMessage);
homepageLinkElement.addEventListener("mouseleave", hideHomepageMessage);
