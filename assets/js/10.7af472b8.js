(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{157:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("VuePress 是一个静态网站生成工具，带有一个默认主题。由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。")]),t._v(" "),a("p",[t._v("VuePress开发的目的本来是为了支持Vue子项目的文档需求。但是它用来搭建个人博客也很方便，自带的主题也非常简洁清爽，还可以灵活更改网页主题的配置，所以就打算把个人博客从Jekyll迁移到VuePress上。VuePress的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://vuepress.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),a("OutboundLink")],1),t._v(" 在这里。")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("事实上文档中已经介绍了如何快速构建一个VuePress项目。不过由于VuePress的文档也是由VuePress来实现的，所以我就参考了"),a("a",{attrs:{href:"https://github.com/docschina/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress中文文档的仓库"),a("OutboundLink")],1),t._v(" 进行一些修改。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先安装NodeJS与yarn")]),t._v(" "),a("p",[t._v("Windows下安装NodeJS非常方便，只需要到 "),a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js中文网"),a("OutboundLink")],1),t._v(" 就可以看到下载页面。下载完成后双击进行安装。")]),t._v(" "),a("p",[t._v("在 "),a("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn中文官网"),a("OutboundLink")],1),t._v(" 下载安装文件并运行即可安装Yarn。")]),t._v(" "),a("p",[t._v("在cmd中输入下面的命令，如果看到版本号说明已经安装成功。")]),t._v(" "),t._m(2),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("先看一下docs的目录结构")]),t._v(" "),t._m(9),a("ul",[a("li",[a("p",[t._v("首页配置")]),t._v(" "),a("p",[t._v("默认主题提供了一个首页布局，要使用它，你需要在根目录的 "),a("code",[t._v("README.md")]),t._v(" 的 "),a("a",{attrs:{href:"https://vuepress.docschina.org/guide/markdown.html#%E9%93%BE%E6%8E%A5-links",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML front matter"),a("OutboundLink")],1),t._v(" 中指定"),a("code",[t._v("home: true")]),t._v(" ，其他配置如下：")]),t._v(" "),t._m(10)]),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),a("p",[t._v("其他配置方法可参考官方文档。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("Github Pages 是面向用户、组织和项目开放的公共静态页面搭建托管服务，站点可以被免费托管在 Github 上，你可以选择使用 Github Pages 默 认提供的域名 github.io 或者自定义域名来发布站点。不仅免除了租服务器的麻烦，而且部署起来非常轻松。简而言之，在GitHub Pages上发布博客是非常好的选择。")]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vuepress搭建博客并发布到github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建博客并发布到github-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress搭建博客并发布到GitHub Pages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开始上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 开始上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("node -v\nyarn -v\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("兼容性注意事项")]),this._v(" "),s("p",[this._v("VuePress 要求 Node.js >= 8。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("全局安装VuePress")]),this._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -g vuepress\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("克隆VuePress仓库")]),this._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/docschina/vuepress.git\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("p",[t._v("添加默认主题")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),a("p",[t._v("网上很多教程包括官方文档都没写这一步，最后生成静态资源的时候报错Error: vuepress fail to resolve custom theme。导致我折腾了好几个小时才解决了问题。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" vuepress\nyarn add vuepress-theme-vue\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("p",[t._v("本地查看是否正常打开")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs\nvuepress dev\n")])])]),a("p",[t._v("当你看到这一行说明已经成功了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" VuePress dev server listening at http://localhost:8080/\n")])])]),a("p",[t._v("打开http://localhost:8080/")]),t._v(" "),a("p",[a("img",{attrs:{src:"/1.png",alt:"1"}})]),t._v(" "),a("p",[t._v("接下来就是一些自定义的配置，以及把VuePress文档换成自己的文章。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置网站","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置网站")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("├─.vuepress\n│  ├─components\n│  └─public\n│      └─icons\n│   └─config.js // 配置文件\n├─config // Vuepress文档的配置参考内容\n├─default-theme-config // Vuepress文档的默认主题配置内容\n├─guide // Vuepress文档的指南内容\n└─zh // 中文文档目录\n    ├─config\n    ├─default-theme-config\n    └─guide\n└─README.md // 首页配置文件\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("home")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" true // 是否使用Vuepress默认主题\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("heroImage")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /hero.png // 首页的图片\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("actionText")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Get Started →  // 按钮的文字\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("actionLink")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" articles\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("features")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" // 首页三个特性\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Simplicity First\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Minimal setup with markdown"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("centered project structure helps you focus on writing.\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Powered\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Enjoy the dev experience of Vue + webpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use Vue components in markdown"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and develop custom themes with Vue.\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Performant\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("details")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VuePress generates pre"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rendered static HTML for each page"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and runs as an SPA once a page is loaded.\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("footer")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MIT Licensed "),a("span",{attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Copyright © 2018"),a("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v("present Evan You // 页尾\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("p",[t._v("导航配置")]),t._v(" "),a("p",[t._v("导航配置文件在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("配置文件中nav控制导航栏链接，可以改变导航栏的标题，链接到自己的博客目录。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Guide'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/guide/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Config Reference'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" projects\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Default Theme Config'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" projects\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("p",[t._v("侧边栏配置")]),t._v(" "),a("p",[t._v("侧边栏的配置也在 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("sidebar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'/guide/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("genSidebarConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'指南'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token comment"}},[t._v("//设定侧边栏的函数，参数是名称")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("genSidebarConfig")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      collapsable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//是否可折叠")]),t._v("\n      children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//文章目录，构建出来的网页会按照顺序链接")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'getting-started'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'basic-config'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'assets'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'markdown'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'using-vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'custom-themes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'i18n'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构建与部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建与部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建与部署")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("在本地安装Git并注册GitHub账号")])]),t._v(" "),a("li",[a("p",[t._v("创建仓库")]),t._v(" "),a("p",[t._v("创建一个名为 "),a("code",[t._v("<username>.github.io")]),t._v(" 的仓库，这里的"),a("code",[t._v("<username>")]),t._v(" 换成自己GitHub的应户名。")])]),t._v(" "),a("li",[a("p",[t._v("修改自动构建与部署脚本")]),t._v(" "),a("p",[t._v("脚本在"),a("code",[t._v("vuepress/scripts/deploy-gh.sh")]),t._v(" 中。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 终止一个错误")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 生成静态资源")]),t._v("\nvuepress build\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 进入生成的构建文件夹")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" vuepress\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f https://github.com/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(".github.io.git master\n")])])]),a("p",[t._v("同理这里的"),a("code",[t._v("<username>")]),t._v(" 要改成自己GitHub的用户名。")]),t._v(" "),a("p",[t._v("执行脚本 "),a("code",[t._v("./deploy-gh.sh")]),t._v(" ，你的博客就会发布到GitHub Pages上啦。")])]),t._v(" "),a("li",[a("p",[t._v("打开网址 https://username.github.io/，就可以看到已经构建好的博客网站。")])])])}],!1,null,null,null);e.options.__file="VuePress搭建博客并发布到GitHub Pages.md";s.default=e.exports}}]);