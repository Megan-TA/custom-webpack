/*
 * 变量的解构赋值
 * @Author: chen_huang 
 * @Date: 2017-09-07 21:57:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-10 00:08:20
 */
/* eslint-disabled */
{
    console.group('------------destructuring----------')

    console.group('====Array destructuring======')
    // 数组解构
    let [a, b, c] = [2, 5, 6]
    console.info(a + '|' + b + '|' + c) 
    // x: 1 y: 3 z: 6 9 70 50
    let [x, y, ...z] = [1, 3, 6, 9, 70, 50]
    console.info(x + '|' + y + '|' + z)
    // 允许赋默认值
    // m1: "1"  m2: undefined
    let [m1 = '1', m2] = []
    console.info(m1 + '|' + m2)
    // 允许赋值函数
    function f () {
        alert(1)
    }
    let [n1 = f()] = [1]
    console.log(n1)
    console.groupEnd('====Array destructuring======')
    // ---------------------------------------------
    // 对象的解构赋值
    // 对象赋原理其实是先找到同名属性的key值 然后在赋值给key键对应的变量值
    console.group('====Object destructuring======')
    let {foo} = {foo: 'red'}
    console.log(foo)
    // q: test2
    let {q: test1} = {q: 'test2'}
    console.info(test1) // test2
    // 嵌套赋值
    // 默认{}会被认为是代码块  ()包裹避免js将其解释为代码块
    var obj = {}
    var arr1 = [];
    ({qw: obj.prop, zx: arr1[0]} = {qw: 123, zx: true})
    console.info('后者的value会覆盖本身的value')
    console.info(obj.prop + '|' + arr1)

    // 对象默认嵌套值
    // ct:3   
    let {ct = 3} = {ct: undefined}
    console.info(ct)
    console.log('对象赋默认值 必须对象的属性值严格等于undefined   null也不行')
    console.groupEnd('====Object destructuring======')
    // ---------------------------------------------
    // 字符串解构赋值
    console.group('=========string destructuring=========')
    {
        const [a, b, c] = 'zxc'
        console.info(a + '|' + b + '|' + c)
    }
    console.groupEnd('=========string destructuring=========')
    console.groupEnd('------------destructuring----------')
}
