/*
 * 变量的解构赋值
 * @Author: chen_huang 
 * @Date: 2017-09-07 21:57:44 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-07 22:44:00
 */
/* eslint-disabled */
{
    console.group('------------destructuring----------')
    // 数组解构
    let [a, b, c] = [2, 5, 6]

    // x: 1 y: 3 z: 6 9 70 50
    let [x, y, ...z] = [1, 3, 6, 9, 70, 50]

    // 允许赋默认值
    // m1: "1"  m2: undefined
    let [m1 = '1', m2] = []

    // 允许赋值函数
    function f () {
        alert(1)
    }
    let [n1 = f()] = [1]

    // ---------------------------------------------
    // 对象的解构赋值
    let {foo} = {foo: 'red'}

    // q: test2
    // let {q = test1} = {q: 'test2'}

    // 嵌套赋值
    // 默认{}会被认为是代码块  ()包裹避免js将其解释为代码块
    ({qw: obj.prop, zx: arr[0]} = {qw: 123, zx: true})
    console.info('后者的value会覆盖本身的value')

    // 对象默认嵌套值
    // ct:3   
    let {ct = 3} = {ct: undefined}
    console.log('对象赋默认值 必须对象的属性值严格等于undefined   null也不行')
    
    // ---------------------------------------------
    // 字符串解构赋值
    {
        const [a, b, c] = 'zxc'
        console.info(a + '|' + b + '|' + c)
    }
    console.groupEnd('------------destructuring----------')
}
