export const isMobileDevice = () =>
  window.screen.width <= 575 && Boolean('ontouchstart' in window || navigator.maxTouchPoints);
