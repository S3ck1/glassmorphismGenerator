export class Settings {
  
  constructor() {
    this.setDefaultSettings();
  }
  
  setDefaultSettings() {
    this.color = ["255", "255", "255", "0"];
    this.backdropfilter = {};
    this.blur = "50px";
    this.contrast = "50%";
    this.saturate = "50%";
    this.size = "50";
    this.borderRadius = "15px";
  }
}
