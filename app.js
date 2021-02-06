"use strict";

const nav = document.querySelector(".nav");
const section1 = document.querySelector(".section--one");

// map

var map = L.map("mapid").setView([52.52, 13.405], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([52.52, 13.405]).addTo(map).openPopup();
