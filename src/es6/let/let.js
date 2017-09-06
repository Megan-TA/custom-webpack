/*
 * @Author: chen_huang 
 * @Date: 2017-09-06 23:35:17 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-07 00:51:23
 */
import './let.styl'
// let
for (var i = 0; i < 3; i++) {
    let i = 'sssss'
    console.info(i)
}

// 为什么需要块级作用域
// 1. 内层变量覆盖外层变量
// var tmp = new Date()
// function f () {
//     console.info(tmp)
//     if (false) {
//         var tmp = 'hello world!'
//     }
// }
// f()
