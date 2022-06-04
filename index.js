const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}
function destructivelyRemoveLastCat () {
  cats.pop();
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
  }  

function appendCat (name) {
  return [...cats, name];
}
function removeFirstCat () {
  return cats.slice(1);
}
function prependCat (name) {
    return [name, ...cats];
  }
function removeLastCat () {
    const cats = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}
function destructivelyRemoveLastCat () {
  cats.pop();
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
  }  

function appendCat (name) {
  return [...cats, name];
}
function removeFirstCat () {
  return cats.slice(1);
}
function prependCat (name) {
    return [name, ...cats];
  }
function removeLastCat () {
    return cats.slice(0, cats.length - 1);
}
