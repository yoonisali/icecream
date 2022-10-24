window.addEventListener( "load", function (event) {
  event.preventDefault;

  const array = [" Strawberry", " Mint", " Sour Cream"];
  for (let i = 0; i < array.length; i++) {
  console.log("My favorite ice creams are" + (array[i]));
  }

  let h1 = document.createElement('h1');
  h1.append('My favorite ice creams are Strawberry, Mint, and Sour Cream!')
  document.body.append(h1);






})