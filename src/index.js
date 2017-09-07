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
        }
    })
}
