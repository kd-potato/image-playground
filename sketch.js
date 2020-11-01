let img;

function preload() {
  img = loadImage('https://nyc3.digitaloceanspaces.com/memecreator-cdn/media/__processed__/f9e/template-surprised-pikachu-0c6db91aec9c.jpg');
}

function setup() {
  createCanvas(5000, 5000)
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  scale(0.5)
  image(img, 100, 100);
}