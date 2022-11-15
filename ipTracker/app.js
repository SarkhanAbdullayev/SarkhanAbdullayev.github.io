import ("https://api64.ipify.org?format=jsonp&callback=getip")
function getip(json) {
    console.log("My public IP address is: ", json.ip);
    setip(json.ip)
}

function setip(ip) {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ZVtgduaYpc7Al5ukNugPRgiI1MuOm&ipAddress=${ip}`)
    .then(res => {
        let data = res.json();
        return data;
    }).then(res => {

        ipaddress.innerHTML = `${ip}`;
        addressLocation.innerHTML = `${res.location.city}`;
        timezone.innerHTML = `UTC${res.location.timezone}`;
        isp.innerHTML = `${res.isp}`;

        map.setView([`${res.location.lat}`, `${res.location.lng}`], 13);
        if (marker) map.removeLayer(marker);
        marker = L.marker([`${res.location.lat}`, `${res.location.lng}`]).addTo(map)
        .openPopup();
    }).catch(res => {
        console.log(res);
    })
}

let map = L.map('map');
let marker;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let form = document.querySelector(".searchForm");

ipaddress = document.querySelector(".ipAddress");
addressLocation = document.querySelector(".location");
timezone = document.querySelector(".timezone");
isp = document.querySelector(".isp");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    setip(input.value)
})

const x = window.matchMedia("(max-width: 600px)")

function zoomhide(x) {
    if (x.matches) { 
        map.removeControl(map.zoomControl);
    }
}

zoomhide(x)