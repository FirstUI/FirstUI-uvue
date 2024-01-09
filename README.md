# FirstUI-uvue 

FirstUI（unix）组件库，一款适配 uni-app x 的轻量、简洁、高效、全面的移动端组件库。（options Api 版）


# 快速上手

使用 First UI 前，请确保你已经学习并熟练使用过 [uni-app-x](https://doc.dcloud.net.cn/uni-app-x/) 。

### 安装

#### 方式一 ：通过 npm 安装

<div class="fui-sub__text">通过 npm 安装。</div>

``` js
// # Using npm
npm install firstui-unix 
```

``` js
注意：通过 npm 安装的组件，暂时可能无法使用easycom配置，
请将 `node_modules` 文件夹下的 `firstui-unix` 文件夹整体复制到 `uni_modules` 文件夹下，
如果项目没有 `uni_modules` 文件夹，在项目根目录创建即可，复制进去即可使用，无需其他配置。

```

#### 方式二 ：通过下载代码

<div class="fui-sub__text">通过 <a target="_blank" href="https://github.com/FirstUI/FirstUI">GitHub</a> 或者 <a target="_blank" href="https://www.firstui.cn/">FirstUI官网(VIP)</a> 下载 First UI 的代码，然后 将 components/firstui/ 目录拷贝到自己的项目中。</div>

``` js
// # GitHub
git clone https://github.com/FirstUI/FirstUI-uvue.git
```

#### 方式三 ：选择需要的模块引入

<div class="fui-sub__text">

下载 FirstUI unix版本代码，在 项目 `components/firstui/` 目录下找到需要的组件拷贝到自己的项目中（必须引入的文件请查看 [注意事项](https://unix.firstui.cn/docs/note.html) ）。

</div>

### 如何使用

按照以下的方式使用组件，以 `Button` 为例，其它组件在对应的文档页查看。

<div class="fui-doc__card">
 <div class="fui-doc__title">第一种：在页面中引用、注册</div>
 
``` js
import fuiButton from "@/components/firstui/fui-button/fui-button.uvue"
export default {
	components:{
		fuiButton
	}
}
```
</div>

<div class="fui-doc__card fui-mbtm">
 <div class="fui-doc__title">第二种：easycom组件规范</div>
<div class="fui-sub__text">传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom将其精简为一步，如果不了解easycom，可先查看 <a href="https://uniapp.dcloud.net.cn/collocation/pages.html#easycom" target="_blank">官网文档</a> 。</div>

在 `pages.json` 中 添加配置：

``` js
// 下载安装时easycom配置（注意组件放置位置）
"easycom": {
		"autoscan": true,
		"custom": {
			"fui-(.*)": "@/components/firstui/fui-$1/fui-$1.uvue"
		}
	}

//使用npm安装时easycom配置（配置完成后重新编译运行）
//注意：目前uniapp-x中easycom引入node_modules下文件可能会出现错误，可以将整个 firstui-unix 文件夹拷贝至 根目录 uni_modules（没有可自行创建）文件夹下使用
//（npm下载的）组件放置 uni_modules 下则无需再进行配置easycom
"easycom": {
		"autoscan": true,
		"custom": {
			"fui-(.*)": "firstui-unix/components/fui-$1/fui-$1.uvue"
		}
	}
```

</div>

### 使用组件

引入组件后，可以在 页面 中直接使用组件

``` html
<fui-button text="默认按钮"></fui-button>
```


### 相关链接

官网地址：[https://www.firstui.cn](https://www.firstui.cn)

文档地址：[https://unix.firstui.cn/](https://unix.firstui.cn/)

GitHub地址：[https://github.com/FirstUI/FirstUI-uvue](https://github.com/FirstUI/FirstUI-uvue)


### 更新日志

#### V1.0.0（2024-01-09）

- 新增 Color 色彩 ，First UI用色指南。

- 新增 Text 文本 组件。

- 新增 Number 数字 组件。

- 新增 Icon 图标 组件，First UI字体图标库。

- 新增 Button 按钮 组件。

- 新增 Footer 页脚 组件。

- 新增 Animation 动画 组件。（组件文档需加提示，动态切换mode时，详见页面备注）

- 新增 StatusBar 状态栏 组件。（文档中加入提示，用户需要根据init事件自行去控制高度设置padding 或者margin值 或者占位元素，uvue不支持设置占位）【ok】

- 新增 Layout 栅格布局 组件（fui-row和fui-col）。

- 新增 Grid 宫格 组件（fui-grid和fui-grid-item）。

- 新增 List 列表 组件（fui-list和fui-list-cell）。

- 新增 Card 卡片 组件。

- 新增 Section 标题栏 组件。

- 新增 WhiteSpace 上下间距 组件。

- 新增 WingBlank 左右间距 组件。 

- 新增 Input 输入框 组件。

- 新增 InputNumber 数字输入框 组件。

- 新增 Label 标签 组件。

- 新增 Radio 单选框 组件。

- 新增 Checkbox 复选框 组件。

- 新增 Switch 开关 组件。

- 新增 Textarea 多行输入框 组件。

- 新增 ActionSheet 上拉菜单 

- 新增 Toast 轻提示 组件。

- 新增 Backdrop 遮罩层 组件。

- 新增 Dialog 对话框 组件。

- 新增 Badge 徽章 组件。

- 新增 Empty 缺省页 组件。