/*
 * @Author: chen_huang 
 * @Date: 2017-09-06 23:35:17 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-07 21:34:59
 */
{
    console.group('------let--------')
    // let
    for (var i = 0; i < 3; i++) {
        let i = 'sssss'
        console.info(i)
    }

    // 为什么需要块级作用域
    // 1. 内层变量覆盖外层变量
    var tmp = new Date()
    function f () {
        console.info(tmp)
        if (!tmp) {
            var tmp = 'hello world!'
        }
    }
    f()

    // let 不存在变量提升
    let date = new Date()
    function b () {
        console.info(date)
        if (!date) {
            let date = 'hello world!'
        }
    }
    b()

    // ------------------------------------- 
    // 2. 用来计数的循环变量泄露为全局变量
    var n = 0
    for (var index1 = 0; index1 < 5; index1++) {
        n++
    }
    console.log(index1) // 5

    // let 只存在当前块级作用域中
    n = 0
    for (let index2 = 0; index2 < 5; index2++) {
        n++
    }
    console.error('index2未定义')

    // ------------------------------------- 
    console.group('------let--------')
}
