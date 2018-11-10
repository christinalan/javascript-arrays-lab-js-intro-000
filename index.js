var kittens = ['Milo', 'Otis', 'Garfield']
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, kitten) {
  kittens.push(array)
  return array
}
function destructivelyPrependKitten(array,kitten) {
  kittens.unshift(array)
  return array
}
function destructivelyRemoveLastKitten(array,kitten) {
  kittens.pop(array)
  return array
}
function destructivelyRemoveFirstKitten(array,kitten) {
  kittens.shift(array)
  return array
}
function appendKitten(array,kitten) {
  [array, ...appendKitten]
  return array
}
