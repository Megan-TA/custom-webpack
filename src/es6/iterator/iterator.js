/*
 * Iterator
 * @Author: chen_huang 
 * @Date: 2017-09-23 00:28:49 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-26 00:05:29
 */
{
    // 一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，
    // 就可以用for...of循环遍历它的成员
    // 凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。
    // 调用这个接口，就会返回一个遍历器对象。
    let arr = ['a', 'b', 'c']
    let iter = arr[Symbol.iterator]()
    iter.next() // { value: 'a', done: false }
    iter.next() // { value: 'b', done: false }
    iter.next() // { value: 'c', done: false }
    iter.next() // { value: undefined, done: true }

    // 自定义Symbol.iterator属性
    const obj = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    return {
                        value: 1,
                        done: true
                    }
                }
            }
        }
    }
    let test = obj[Symbol.iterator]()
    test.next() // {value: 1, done: true} 

    // yield* 表达式  
    // 默认一个Generator函数内部不能直接调用另一个Generator函数 需要yield*
    function * foo () {
        yield 'a'
        yield 'b'
    }
    function * bar () {
        yield 'x'
        foo() // yield * foo()
        yield 'y'
    }
    for (let v in bar()) {
        console.log(v)
    }

    // Generator函数不能和new一起使用 而且实例无this方法
    function * g () {
        this.name = '张三'
    }

    g.prototype.hello = function () {
        return 'hi!'
    }

    let GeneratorT = g()

    console.log(GeneratorT instanceof g) // true
    GeneratorT.hello() // 'hi!'

    console.log(GeneratorT.name) // undefined

    // 为了使Generator函数返回一个正常的对象实例 可以用next()又能使用this方法呢
    // 1.
    function * F () {
        this.a = 1
        yield this.b = 2
        yield this.c = 3
    }
    var test2 = {}
    var f = F.call(test2)

    f.next() // Object {value: 2, done: false}
    f.next() // Object {value: 3, done: false}
    f.next() // Object {value: undefined, done: true}  
    console.log(test2.a) // 1
    console.log(test2.b) // 2
    console.log(test2.c) // 3

    // 2.
    function * gen () {
        this.a = 1
        yield this.b = 2
        yield this.c = 3
    }

    function G () {
        return gen.call(gen.prototype)
    }
    var x = new G()
    x.next() // Object {value: 2, done: false}
    x.next() // Object {value: 3, done: false}
    x.next() // Object {value: undefined, done: true}
    x.a // 1
    x.b // 2
    x.c // 3
}
