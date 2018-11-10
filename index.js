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
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(array,kitten) {
  return [...kittens,name]
}
