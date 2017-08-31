import 'css/styles.css'
require('jquery')
require('lib/test')

window.onclick = function () {
    require.ensure([], function (require) {
        require('./ensure')
    })
}
