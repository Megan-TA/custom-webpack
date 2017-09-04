function test () {
    let v = () => alert(this.id)
    v()
}
test.call({id: 222})

function foo () {
    id = 21
    setTimeout(() => {
        console.log('id:', this.id) // 42
    }, 100)
    console.log(this.id) // 42
}
var id = 22
foo.call({id: 42})
