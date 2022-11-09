//Kata 7 - In the Air Tonight

const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
    dirtyCount++;
    }
  }
  if (dirtyCount < samples.length * threshold) {
    return 'Clean';
  } else {
    return 'Polluted';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

//https://gist.github.com/eegyudt/7e49ba48c4b5285cf73f1d322519fec1