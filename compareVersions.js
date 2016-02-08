function compareVersions(x, y) {
  if (x === y) {
    return 0;
  }

  var partsOfX = x.split(".");
  var partsOfY = y.split(".");

  if (partsOfX.length > partsOfY.length) {
    return 1;
  }

  if (partsOfX.length < partsOfY.length) {
    return -1;
  }

  var length = Math.min(partsOfX.length, partsOfY.length);

  for (var index = 0; index < length; index++) {
    if (parseInt(partsOfX[index]) < parseInt(partsOfY[index])) {
      return -1;
    }
	
    if (parseInt(partsOfX[index]) > parseInt(partsOfY[index])) {
      return 1;
    }
  }

  return 0;
}
