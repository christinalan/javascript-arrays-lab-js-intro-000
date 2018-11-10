var kittens = ['Milo', 'Otis', 'Garfield']
 //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  return kittens
}
function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
  return kittens
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(array,kitten) {
  kittens.shift(array)
  return array
}
function appendKitten(array,kitten) {
  [array, ...appendKitten]
  return array
}
