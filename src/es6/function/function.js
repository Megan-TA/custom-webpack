/*
 * 函数的扩展
 * @Author: chen_huang 
 * @Date: 2017-09-10 00:12:20 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-10 01:27:12
 */
{
    console.group('=========function==============')
    // ES5函数参数没有默认初始值的缺点
    function log (x, y) {
        y = y || 'world'
        console.log(x, y)
    }
    log('hello', 'es6')
    log('hello')
    log('hello', '') // 有误 hello world

    // ES6函数参数能指定默认数值
    {
        let log2 = function (x, y = 'world') {
            console.log(x + ' ' + y)
        }
        log2('hello', '') // hello

        // 如果非尾部的参数设置默认值 实际上这个参数不能省略 必须undefined占位
        let f = function (x = 1, y) {
            return [x, y]
        }
        f() // [1, undefined]
        f(2) // [2, undefined])
        f(undefined, 1) // [1, 1]

        // 作用域
        let m1 = 1
        let f2 = function (m1, m2 = m1) {
            console.log(m2)
        }
        f2(2) // 2

        let first = '1'
        let last
        // 箭头函数可以与变量解构结合使用。
        const full = ({ first, last }) => first + '|' + last;
        // 等同于
        // function full (person) {
        //   return person.first + ' ' + person.last;
        // }
        console.log(full({first, last}))

        // rest参数
        let add = function add (...values) {
            let sum = 0
            for (var val of values) {
                sum += val
            }
            return sum
        }
        add(2, 5, 3) // 10
    }
    console.groupEnd('=========function==============')
}
