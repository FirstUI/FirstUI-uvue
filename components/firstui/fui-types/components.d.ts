/*!
* FirstUI unix 版组件 easycom 模式下组件内暴露的方法或参数类型标注
* .d.ts - v1.1.0 (2023/1/12, 14:07:14 P.M)
* 
* 用于开发工具提示，当组件（配置）支持easycom模式时，所有类型由开发工具自行生成【以下interface可能会提示标识重复，请忽略】
* 无需引入，直接使用即可
* 注意：当组件未配置easycom支持时不可使用该类型，请引入类型 ComponentPublicInstance 使用
* import { ComponentPublicInstance } from 'vue'
*/

declare namespace FirstUINameSpace {
	/**
	* 基础类型
	* @param {string} param {string} 自定义参数 
	*/
	interface FuiBase {
		param : string;
	}

	/**
	* fui-toast 轻提示 组件show方法 参数类型
	* @description Toast 轻提示组件show方法参数类型
	* @param {number} duration {number} 显示持续时间，单位ms，可选
	* @param {string} src {string} 提示图标，可选
	* @param {string} text {string} 提示信息，使用插槽自定义内容时可不传
	*/
	interface FuiToastShowParam {
		duration ?: number;
		src ?: string;
		text ?: string
	}
}


/**
* Toast 轻提示
*/
declare interface FuiToastComponentPublicInstance {
	/**
	* 类型：(options : FuiToastShowParam)=>void
	* @tutorial https://unix.firstui.cn/
	* @description 显示提示信息，FuiToastShowParam 参数类型引入地址 '@/.../fui-types/index.uts '
	* @param {number} duration {number} 显示持续时间，单位ms，可选
	* @param {string} src {string} 提示图标，可选
	* @param {string} text {string} 提示信息，使用插槽自定义内容时可不传
	*/
	show(options : FirstUINameSpace.FuiToastShowParam) : void;
}


/**
* DropdownMenu 下拉菜单
*/
declare interface FuiDropdownMenuComponentPublicInstance {
	/**
	* 类型：show() =>void
	* @description 显示下拉菜单，无需传参数
	*/
	show() : void;
}

/**
* DropdownMenu 下拉菜单
*/
declare interface FuiDropdownListComponentPublicInstance {
	/**
	* 类型：show() =>void
	* @description 显示下拉菜单，无需传参数
	*/
	show() : void;
}

/**
* SwipeAction 滑动菜单
*/
declare interface FuifSwipeactionGroupComponentPublicInstance {
	/**
	* 类型：reset() =>void
	* @description 重置子组件样式，改变滑动菜单按钮数据时使用	
	*/
	reset() : void;
	/**
	* 类型：close() =>void
	* @description 关闭全部已经打开的滑动菜单
	*/
	close() : void;
}