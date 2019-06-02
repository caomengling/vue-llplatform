(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{187:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),a("p",[t._v("本章节介绍搭建初步的项目环境。")]),t._v(" "),a("h2",{attrs:{id:"依赖环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖环境")]),t._v(" "),a("ol",[a("li",[t._v("node：点击"),a("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),a("OutboundLink")],1),t._v("访问官方下载安装")]),t._v(" "),a("li",[t._v("vue-cli："),a("code",[t._v("npm install -g vue-cli")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("国内访问npm官方库可能有些缓慢，你可以设置淘宝的npm镜像：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 安装 cnpm，用 cnpm 命令替换 npm 命令\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\n# 设置镜像源为淘宝 npm 镜像\nnpm set registry https://registry.npm.taobao.org\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"初始项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始项目搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始项目搭建")]),t._v(" "),a("p",[t._v("利用vue-cli3的ui创建vue项目")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vue ui\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("运行后浏览器会打开"),a("a",{attrs:{href:"localhost:8000"}},[t._v("localhost:8000")]),t._v("，进入 项目管理器 > 创建 > 选择文件夹，点击在此创建新项目。")]),t._v(" "),a("ol",[a("li",[t._v("详情")])]),t._v(" "),a("ul",[a("li",[t._v("项目文件夹："),a("code",[t._v("llplatform")])]),t._v(" "),a("li",[t._v("包管理器："),a("code",[t._v("npm")])]),t._v(" "),a("li",[t._v("若文件夹存在则覆盖：√")]),t._v(" "),a("li",[t._v("初始化git仓库：√，"),a("code",[t._v("Init project")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("预设：选择手动")]),t._v(" "),a("li",[t._v("功能")])]),t._v(" "),a("ul",[a("li",[t._v("Babel：√")]),t._v(" "),a("li",[t._v("TypeScript：×")]),t._v(" "),a("li",[t._v("PWA：×")]),t._v(" "),a("li",[t._v("Router：√")]),t._v(" "),a("li",[t._v("Vuex：√")]),t._v(" "),a("li",[t._v("CSS Pre-processors：√")]),t._v(" "),a("li",[t._v("Linter / Formatter：√")]),t._v(" "),a("li",[t._v("Unit Testing：×")]),t._v(" "),a("li",[t._v("E2E Testing：×")]),t._v(" "),a("li",[t._v("使用配置文件：√")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("配置")])]),t._v(" "),a("ul",[a("li",[t._v("Use history mode for router：×")]),t._v(" "),a("li",[t._v("Pick a CSS Pre-processors："),a("code",[t._v("Sass/SCSS(with dart-sass)")])]),t._v(" "),a("li",[t._v("Pick a linter / formatter config："),a("code",[t._v("ESLint + Standard config")])]),t._v(" "),a("li",[t._v("Pick additional lint features：\n"),a("ul",[a("li",[t._v("Lint on save：√")]),t._v(" "),a("li",[t._v("Lint and fix on commit：×")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("各技术选型可以参考这篇文章："),a("a",{attrs:{href:"https://linjinze999.github.io/learning/vue/technology.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue技术框架"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("之后vue-cli会开始自动下载依赖，完成后将得到【llplatform】项目，你可以通过以下命令启动它，然后浏览器访问"),a("a",{attrs:{href:"localhost:8080"}},[t._v("localhost:8080")]),t._v("，即可看到一个demo页面：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" llplatform\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("img",{staticStyle:{border:"1px solid #000"},attrs:{src:t.$withBase("/assets/img/vue-llplatform/start-demo.PNG"),height:"450",width:"350"}}),t._v(" "),a("h2",{attrs:{id:"安装element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装element","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Element")]),t._v(" "),a("p",[t._v("本项目选择饿了么的"),a("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element组件库"),a("OutboundLink")],1),t._v("，个人感觉其风格看起来更舒服。")]),t._v(" "),a("ol",[a("li",[t._v("安装Element")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i element-ui -S\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("引入Element：修改"),a("code",[t._v("src/main.js")]),t._v("文件，添加以下三行")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productionTip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("此时你已添加了Element，你可以修改"),a("code",[t._v("src/components/HelloWorld.vue")]),t._v("文件，添加一个Element的按钮组件来查看是否添加成功：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ msg }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Essential Links"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n       ......\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("img",{staticStyle:{border:"1px solid #000"},attrs:{src:t.$withBase("/assets/img/vue-llplatform/start-demo-element.PNG"),height:"450",width:"350"}}),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("这边的示例全局引入了所有的Element组件，这会导致项目过大，后续你可以参考"),a("a",{attrs:{href:"https://element.eleme.io/#/zh-CN/component/quickstart#an-xu-yin-ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("按需引入"),a("OutboundLink")],1),t._v("，\n只引入你所需要的部分组件。")])])])},[],!1,null,null,null);s.default=e.exports}}]);