let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
let cardsContainer = document.querySelector(".cards-container");
console.log(searchInput, searchButton, cardsContainer)

const fetchAPI = () => {

    cardsContainer.innerHTML="";
    document.querySelector("#title").innerHTML="";
    let apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}/next6days/?key=GD5WFZZ746JJNCGR3WAM4N5YH`;

    fetch(apiURL).then(res => res.json()).then(data => {
        console.log(data)
        let h1 = document.createElement("h1");
        h1.textContent = data.resolvedAddress;
        document.querySelector("#title").appendChild(h1);

        let days = data.days;

        days.map(day => {
            let div1 = document.createElement("div");
            let icon = document.createElement("img");
            let datetime = document.createElement("p");
            let tempmax = document.createElement("p");
            let tempmin = document.createElement("p");
            let precip = document.createElement("p");
            let description = document.createElement("p");
            div1.classList.add("card");

            datetime.textContent = "Date: " + day.datetime;
            tempmax.textContent = "Temp Max: " + day.tempmax;
            tempmin.textContent = "Temp Min: " + day.tempmin;
            precip.textContent = "Precip: " + day.precip + " in.";
            description.textContent = day.description;
            icon.src = `./assets/icons/WeatherIcons-main 2/SVG/3rd Set - Color/${day.icon}.svg`;
            icon.alt = day.icon;

            div1.append(datetime, tempmax, tempmin, icon, precip, description);
            cardsContainer.appendChild(div1);
        })
    })
};

searchButton.addEventListener("click", fetchAPI);

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      fetchAPI();
    }
    
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    searchInput.focus();

  });