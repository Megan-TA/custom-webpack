/*
 * Map和Set数据结构
 * @Author: chen_huang 
 * @Date: 2017-09-12 16:41:02 
 * @Last Modified by: chen_huang
 * @Last Modified time: 2017-09-12 18:23:23
 */
{
    console.group('=========Set==============')
    const s = new Set()
    let arr1 = [1, 3, 4, 5, 6]
    arr1.forEach(x => s.add(x))
    for (let i of s) {
        console.log(i)
    }
    // ---------------Set--------------------------
    // 初始化默认值
    const set1 = new Set([2, 5, 3])
    console.log(set1)
    console.log([...set1])
    console.log(set1.size)
    // NaN是相等的   两个对象是不相等的
    let a1 = NaN
    let a2 = NaN
    let a3 = {}
    let a4 = {}
    let set2 = new Set()
    set2.add(a1).add(a2).add(a3).add(a4)
    console.log([...set2])

    // ------------Set实例的属性和方法---------------
    {
        // 属性
        const set3 = new Set([3, 4, 10, 2])
        set3.has(3) // true
        set3.delete(4) // true
        set3.clear()
        // console.log(set3.size)
        // 方法
        const set4 = new Set([3, 4, 10, 2])
        for (let item of set4.keys()) {
            console.log(item)
        }
        console.log('------')
        for (let item of set4.values()) {
            console.log(item)
        }
        console.log('------')
        for (let item of set4.entries()) {
            console.log(item)
        }
        console.log('---entries()返回包含key和value的键值对---')
    }

    // ---------------------WeakSet--------------------
    console.info('weakSet只能存放对象且会被垃圾回收机制自动回收')
    const ws = new WeakSet()
    // --------WeakSet相关方法------------
    ws.add({})
    ws.has({})
    ws.delete({})
    console.log('WeakSet没有size属性也没有for of方法')
    console.log('利用WeakSet会被垃圾回收机制回收这一特性可以用来存储DOM节点,避免内存泄露')

    // ---------------Map-------------------
    console.log('为了解决Object健值只能是字符串的限制')
    {
        const map1 = new Map()
        const o = {'name': '张三'}
        map1.set(o, '李四')
        map1.get(o) // 李四
        map1.delete(o)

        console.log('Map结构的键其实存放的是内存地址的绑定 所以同名不同对象的键指向不同对象')
    }
    console.groupEnd('===========Set================')
}
