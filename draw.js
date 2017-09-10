createsvg();

function createsvg() {
  var width = 640;
  var height = 480;

  var svg = d3.select("#senpai").append("svg")
    .attr("width", width)
    .attr("height", height);

  var bg1 = svg.append('rect')
    .attr("fill", rgbToHex(200, 190, 181))
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height);

  var bg2 = svg.append('rect')
    .attr("fill", rgbToHex(150, 159, 154))
    .attr("x", width / 2)
    .attr("y", 0)
    .attr("width", width / 2)
    .attr("height", height);

  var path = "M " + width / 2 + " " + height / 2 + " L " + width + " " + height + " H " + 0 + " Z";

  var body = svg.append('path')
    .attr("d", path);

  var face = svg.append('circle')
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", height / 4)
    .attr("fill", rgbToHex(161, 114, 106));
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}