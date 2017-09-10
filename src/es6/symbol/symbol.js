/*
 * Symbol类型
 * @Author: chen_huang 
 * @Date: 2017-09-11 00:32:52 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-11 00:45:46
 */
{
    console.group('=========Symbol==========')
    let s = Symbol('test') // test用来区分Synbol类型的标记
    console.log(s)

    var s1 = Symbol('a')
    var s2 = Symbol('a')
    console.log(s1 == s2) // false
    console.log('symbol函数的参数只是表示对当前的Symbol值的描述 因此相同参数的Symbol函数的返回值是不相等的')
    s1.toString() // Symbol(a)
    Boolean(s1) // true
    console.log('symbol值可以显示转换为字符串或者布尔值 其他类型的值不行')

    // --------------------------------------
    // 作为属性名的Symbol
    var mySymbol = Symbol('mySymbol')
    var huang = {}
    // 第一种写法
    huang[mySymbol] = 'test'
    // 第二种写法
    huang = {
        [mySymbol]: 'ooo'
    }
    // 第三种写法
    var b = {}
    Object.defineProperty(b, mySymbol, {value: 'hello Symbol'})
    console.groupEnd('=========Symbol==========')
}
