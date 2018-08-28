# webpack3-learning
personsal webpack3.0

* ## 代码分割 -- css

> 起因 

让css能像js一样import在js中导入
>>> npm install --save-dev css-loader

>> 缺点1 css和js打包在一起 无法利用浏览器异步加载css特性
>> 解决1 引入ExtractTextWebpackPlugin插件分开打包css
>>> npm install --save-dev extract-text-webpack-plugin



* ## 代码分割 -- libraries
> 起因

由于每次改动很小一部分代码打包时 会将库文件重新打包一遍 浏览器无法利用缓存记录这

些库文件

>> 缺点1 库文件代码和业务代码混合在一块 
>> 解决1 新建vendor入口存放库文件

>> 缺点2 上述方法实现库和业务代码分离  不过会发现两个文件都有库相关代码
>> 解决2 引入commonsChunkPlugin抽取重复代码

>> 缺点3 上述方法每次打包hash都在变化 vendor也会随着业务代码变化
>> 解决3 在commonsChunkPlugin插件配置中引入manifest分离webpack运行代码和vendor代码和业务代码

* ## manifest文件
每次webpack runtime会产生webpack内部本身相关工作 会改变hash值  为了

让静态的库、静态资源从浏览器缓存中收益 提取webopack本身相关工作代码到manifest文件

* ## html-webpack-plugin
> 起因 每次打包都会生成hash 手动更改html引用对应的js和css显然不合理

> 解决 引入html-webpack-plugin插件 
>> 详细查看此链接 [html-webpack-plugin](https://segmentfault.com/a/1190000008590102)

