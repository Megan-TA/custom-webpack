/*
 * Generator
 * @Author: chen_huang 
 * @Date: 2017-09-24 11:30:23 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-24 12:43:37
 */
{
    // Generator函数根据不同yield产生不同的状态
    function * helloWorldGenerator () {
        yield 'hello'
        yield 'world'
        return 'ending'
    }
    var hw = helloWorldGenerator()

    hw.next() // {value: "hello", done: false}
    hw.next() // {value: "world", done: false}
    hw.next() // {value: "ending", done: true}
    hw.next() // {value: undefined, done: true}

    // yield只能出现在Generator函数中 
    // 每次next方法运行一次会在yieid表达式暂停 后续再次运行不会保留上一次yieid的值 
    // 初始值默认undefined
    // 比如下面案列 第一次不带参数运行  第二次带参数会将第一次yield表达式的值置为指定值
    function * foo (x) {
        var y = 2 * (yield (x + 1))
        var z = yield (y / 3)
        return (x + y + z)
    }
    var a = foo(5)
    a.next() // Object{value:6, done:false}
    a.next() // Object{value:NaN, done:false}
    a.next() // Object{value:NaN, done:true}
    var b = foo(5)
    b.next() // { value:6, done:false }
    b.next(12) // { value:8, done:false }    12 * 2 / 3 = 8
    b.next(13) // { value:42, done:true }    5 + 24 + 13

    function * test () {
        yield 1
        yield 2
        yield 3
        yield 4
        yield 5
        return 6
    }
    for (let v of test()) {
        console.log(v)
    }
    // 1 2 3 4 5
}
