const fibs = (n) => {
  if (n === 1) {
    return [0];
  }

  const fibsArray = [0, 1];

  while (fibsArray.length < n) {
    fibsArray.push(
      fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1]
    );
  }

  return fibsArray;
};

const fibsRec = (n) => {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const fibsArray = fibs(n - 1);
  let newFib =
    fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1];

  return fibsArray.concat(newFib);
};

// fibsRec(4)
//   fibsArray = fibsRec(3)
//   fibsRec(3)
//     fibsArray = fibsRec(2)
//     fibsRec(2)
//       evaluates to [0, 1]
//   fibsArray = [0, 1]
//   newFib = 1
//   evaluates to [0, 1, 1]
// fibsArray = [0, 1, 1]
// newFib = 2;
// evaluates to 2

console.log(fibsRec(8));
console.log(fibs(8));
