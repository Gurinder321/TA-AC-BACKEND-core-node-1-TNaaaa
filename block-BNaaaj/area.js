function square(h) {
  return h * h;
}

function rectangle(l, h) {
  return l * h;
}

function circle(r) {
  return r * r * 3.14;
}

module.exports = {
  square: square,
  rectangle: rectangle,
  circle: circle,
};
