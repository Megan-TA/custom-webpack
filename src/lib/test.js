let {x, y, ...z} = {x: 1, y: 3, z: 6, q: 2}
console.log('----------------------------')
console.log(x)
console.log(y)
console.log(z)
console.log('----------------------------')

const [...placeholder] = [3, 4]
console.info([...placeholder, 6, 8])
console.log('----------------------------')
