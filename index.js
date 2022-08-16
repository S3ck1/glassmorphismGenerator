import { pickr } from "./pickr.js";

let slideSettings = document.querySelectorAll(".slidesetting");
let preview = document.querySelector("#preview");
setDefaultSettings(preview);

//A listener for color picker
pickr.on("change", (color) => {
  let colorRGBA = color.toRGBA().toString(2);
  preview.style["backgroundColor"] = colorRGBA;
  document.querySelector(".codeline-backgroundColor").textContent =
    colorRGBA.substring(5, colorRGBA.length - 1);
});

let blurValue = "blur(50px)";
let contrastValue = "contrast(50%)";
let saturateValue = "saturate(50%)";
preview.style.backdropFilter = `${blurValue} ${contrastValue} ${saturateValue}`;

//A listener for all sliders
slideSettings.forEach((element) => {
  let slider = element.querySelector("input");
  slider.addEventListener("input", function () {
    let property = slider.id;
    let value = slider.value;
    switch (property) {
      case "blur":
        setBackdropProperty(property, value);
        document.querySelector(".codeline-blur").textContent = `${value}px`;
        console.log(preview.style.backdropFilter);
        break;
      case "contrast":
        setBackdropProperty(property, value);
        document.querySelector(".codeline-contrast").textContent = `${value}%`;
        console.log(preview.style.backdropFilter);
        break;
      case "saturate":
        setBackdropProperty(property, value);
        document.querySelector(".codeline-saturate").textContent = `${value}%`;
        console.log(preview.style.backdropFilter);
        break;
      case "border-radius":
        preview.style.borderRadius = `${value}%`;
        document.querySelector(
          ".codeline-borderRadius"
        ).textContent = `${value}%`;
        break;
      case "size":
        preview.style.width = `${value}px`;
        preview.style.height = `${value}px`;
        document.querySelector(".codeline-width").textContent = `${value}px`;
        document.querySelector(".codeline-heigth").textContent = `${value}px`;
        break;
      default:
        console.log("Undefined property");
        console.log(property);
        break;
    }
  });
});

function setDefaultSettings(container) {
  container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  preview.style.backdropFilter = `blur(50px) contrast(50%) saturate(50%)`;
  container.style.borderRadius = "25%";
  container.style.width = "300px";
  container.style.height = "300px";
}

function setBackdropProperty(property, value) {
  switch (property) {
    case "blur":
      blurValue = `blur(${value}px)`;
      break;
    case "contrast":
      contrastValue = `contrast(${value}%)`;
      break;
    case "saturate":
      saturateValue = `saturate(${value}%)`;
      break;
  }
  preview.style.backdropFilter = `${blurValue} ${contrastValue} ${saturateValue}`;
}
