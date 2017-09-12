/*
 * Symbol类型
 * @Author: chen_huang 
 * @Date: 2017-09-11 00:32:52 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-12 16:34:29
 */
{
    console.group('=========Symbol==========')
    let s = Symbol('test') // test用来区分Synbol类型的标记
    console.log(s)

    // -------生成Symbol的值具有唯一性----------
    console.info('Symbol可以设置不可覆盖和修改的变量名')
    var s1 = Symbol('a')
    var s2 = Symbol('a')
    console.log(s1 == s2) // false
    console.log('symbol函数的参数只是表示对当前的Symbol值的描述 因此相同参数的Symbol函数的返回值是不相等的')
    s1.toString() // Symbol(a)
    Boolean(s1) // true
    console.log('symbol值可以显示转换为字符串或者布尔值 其他类型的值不行')

    // ---------------读取作为属性名的 Symbol-----------------------
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

    //  ----------------属性名的遍历-------------
    // 第一种方法  只返回Symbol类型的键名
    Object.getOwnPropertySymbols(huang) // Symbol('mySymbol')
    // 第二种方法  返回包含所有类型键名的数组
    Reflect.ownKeys(huang) // [Symbol('mySymbol')]

    // -----------Symbol.for()  Symbol.keyFor() ---------------
    // Symbol.for()生成的Symbol值会被登记在全局中供搜索  所以同一名字的
    // Symbol值是相等的  而Symbol是重新调用生成不同的值
    // Symbol.keyFor()用来返回Symbol.for()方法生成的Symbol值
    var test1 = Symbol.for('test1')
    var test2 = Symbol.for('test2')
    console.log(test1 === test2) // true
    console.log(Symbol.keyFor(test1)) // test1

    console.groupEnd('=========Symbol==========')
}
