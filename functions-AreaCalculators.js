function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    let areaRectangle = length * width;
    return areaRectangle;
  }
}
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    let areaTriangle = (base * height) / 2;
    return areaTriangle;
  }
}
function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  } else {
    let areaCircle = Math.PI * Math.pow(radius,2);
    return areaCircle;
  }
}
