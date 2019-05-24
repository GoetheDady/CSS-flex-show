# CSS-flex-show

现在不管是移动端还是pc端，在开发中差不多都会用到flex来布局，但是刚接触flex的时候，属性感觉有点多，就算看了阮一峰大佬的[《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)我感觉也并不能很好的理解，只是知道了一些属性，介绍了一些效果。

当时我只是为了自己可以手动更改，不用打开控制台，方便一下自己，慢慢就做出来了

[赶紧来看看吧~](https://goethedady.github.io/CSS-flex-show/)

## 技术

个人认为，这个项目是基于面向对象编程的

### jQuery

[《jQuery老矣，尚能饭否》](https://juejin.im/post/5ce3b267f265da1bd260c0d7)，不管他还能不能饭否，我觉得还是有必要看一下，用一下，了解一下jq的思想，毕竟jq曾经统治了一个时代

### lodash

知乎上有一个问题[《如何看待前端面试不知道 lodash 被嘲讽不可思议？》](https://www.zhihu.com/question/315141826/answer/620888098)，不是说我们必须知道，但是在前端技术飞速发展的同时，我们应该保持自己在行业内的竞争力，一些技术，我们应该了解。

我这个主要用的是lodash.template，用的lodash的模板

### bootstrap

其实我这个没怎么用boostrap，只是用了一下他的栅格化布局

## 目录结构

```bash
├── static                    // 静态文件目录
│   ├── css                   // css 目录
│   │   ├── index.css         // css样式
│   ├── js                    // js目录
│   │   ├── codeShow.js       // 页面展示代码的的模块
│   │   ├── itemCode.js       // 页面更改item样式的模块
│   │   ├── pageShow.js       // 展示效果的模块
│   │   ├── selectValue.js    // 页面更改box样式的模块
├── .gitignore                // 哪些目录不上传git
├── index.html
├── README.md
```
