import { pickr } from "./pickr.js";
import * as settings from "./settings.js";

let slideSettings = document.querySelectorAll(".slidesetting");
let preview = document.querySelector("#preview");
let previewSettings = new settings.Settings();

console.log(previewSettings.color);

//A listener for color picker
pickr.on("change", (color) => {
  preview.style["backgroundColor"] = color.toRGBA().toString();
});

//A listener for all sliders
slideSettings.forEach((element) => {
  let slider = element.querySelector("input");
  slider.addEventListener("input", function () {
    let property = slider.id;
    let value = slider.value;
    switch (property) {
      case "blur":
        preview.style.backdropFilter = blur(value);
        break;
      case "contrast":
        preview.style.backdropFilter = contrast(value);
        break;
      case "saturate":
        preview.style.backdropFilter = saturate(value);
        break;
      default:
        preview.style[property] = value;
        break;
    }
  });
});

slideSettings.for;
