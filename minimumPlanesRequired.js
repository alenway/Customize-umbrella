function minimumPlanesRequired(arr) {
  const n = arr.length;
  let currentFuel = 0;
  let planesNeeded = 0;
  let i = 0;
  while (i < n) {
    if (currentFuel === 0) {
      // need to hire a new plane
      let maxFuel = 0;
      let maxFuelIndex = -1;
      for (let j = i + 1; j < n && j <= i + arr[i]; j++) {
        if (arr[j] + j - i > maxFuel) {
          maxFuel = arr[j] + j - i;
          maxFuelIndex = j;
        }
      }
      if (maxFuelIndex === -1) {
        // unable to reach last airport
        return -1;
      }
      i = maxFuelIndex;
      currentFuel = maxFuel - (i - maxFuelIndex);
      planesNeeded++;
    } else {
      // use current fuel to move to next airport
      currentFuel--;
      i++;
    }
  }
  return planesNeeded;
}

const arr = [2, 1, 2, 3, 1];
const planesNeeded = minimumPlanesRequired(arr);
console.log(planesNeeded);
