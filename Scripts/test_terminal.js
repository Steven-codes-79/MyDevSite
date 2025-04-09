// random array selectro for fonts



const fontGen = () => {
    const fontArr = ['Mea Culpa', 'UnifrakturMaguntia', 'Festive', 'Kaushan Script', 'Syne Mono', 'Farsan', 'Merienda', 'Lobster', 'Rubik Glitch Pop', 'Monofett', 'Creepster']
  let switchFont = Math.floor(Math.random() * fontArr.length);
  return fontArr[switchFont]; 
}

console.log(fontGen());