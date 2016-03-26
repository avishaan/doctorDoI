let generateColor = (seed) => {
  let hash = CryptoJS.MD5(seed).toString();
  let hexColor = "#" + hash.substr(0,6);
  let mix = [255,255,255] // mix with a color, like white
  let r = parseInt(hexColor.substr(1,2), 16);
  let g = parseInt(hexColor.substr(3,2), 16);
  let b = parseInt(hexColor.substr(5,2), 16);

  // mix color
  r = (r + mix[0]) / 2;
  g = (g + mix[1]) / 2;
  b = (b + mix[2]) / 2;
  return `(${r},${g},${b})`;
  //return [r, g, b];
};

Utils = {};

Utils.generateColor = generateColor;
