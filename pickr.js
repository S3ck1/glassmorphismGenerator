// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'
  comparison: false,
  default: "rgba(0, 0, 0, 0.5)",
  swatches: [
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,
      

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: false,
          save: false
      }
  }
});

export {pickr};
