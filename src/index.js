/*
 * @Author: chen_huang 
 * @Date: 2017-09-05 21:36:56 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-12 16:59:24
 */
import 'css/styles.css'
// require('lib/test')
window.onload = function () { 
    $('#test').bind('click', function (event) {
        if (event.target.className != 'btn') return false
        let index = $(event.target.parentNode).index()
        switch (index) {
        case 0:
            require.ensure([], function (require) {
                require('es6/let/let.js')
            })
            break
        case 1:
            require.ensure([], function (require) {
                require('es6/const/const.js')
            })
            break
        case 2:
            require.ensure([], function (require) {
                require('es6/destructuring/destructuring.js')
            })
            break
        case 3:
            require.ensure([], function (require) {
                require('es6/function/function.js')
            })
            break
        case 4:
            require.ensure([], function (require) {
                require('es6/symbol/symbol.js')
            })
            break
        case 5:
            require.ensure([], function (require) {
                require('es6/Set-Map/Set-Map.js')
            })
            break
        }
    })
}
