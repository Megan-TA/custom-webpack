/*
 * @Author: chen_huang 
 * @Date: 2017-09-07 21:36:52 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-07 22:00:22
 */
{
    console.group('-----------const----------')
    const test = {}
    test.name = 'zhangsan' // success
    // test = {} // failure

    const a = []
    a.push('a')
    // a = ['b'] // failure
}
