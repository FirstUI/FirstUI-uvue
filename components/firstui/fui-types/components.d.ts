/*!
* FirstUI unix 版组件 easycom 模式下组件内暴露的方法或参数类型标注
* .d.ts - v1.1.0 (2023/1/12, 14:07:14 P.M)
* 
* 用于开发工具提示，当组件（配置）支持easycom模式时，所有类型由开发工具自行生成【以下interface可能会提示标识重复，请忽略】
* 无需引入，直接使用即可
* 注意：当组件未配置easycom支持时不可使用该类型，请引入类型 ComponentPublicInstance 使用
* import { ComponentPublicInstance } from 'vue'
*/
// import '@vue/runtime-core';

// declare module '@vue/runtime-core' {
// 	// Helper for Volar
// 	export interface GlobalComponents {
// 		FuiToastComponentPublicInstance: typeof import('../fui-toast/fui-toast.uvue')['default']
// 	}
// }

import { FuiToastShowParam, FuiFormRulesParam, FuiFormValidatorResParam } from './index.uts'

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
	show(options : FuiToastShowParam) : void;
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

/**
* HalfScreen 半屏弹窗
*/
declare interface FuiHalfScreenComponentPublicInstance {
	/**
	* 类型：()=>void
	* @tutorial https://unix.firstui.cn/
	* @description 显示弹窗
	*/
	show() : void;
	/**
	* 类型：()=>void
	* @tutorial https://unix.firstui.cn/
	* @description 隐藏/关闭弹窗
	*/
	hidden() : void;
}

/**
* Form 表单校验
*/
declare interface FuiFormComponentPublicInstance {
	/**
	 * validator 校验方法
	 * @param {Object} model {UTSJSONObject} 表单数据对象
	 * @param {Array} rules { FuiFormRulesParam[] }表单验证规则
	 * @returns {Object} Promise&lt;FuiFormValidatorResParam&gt; 校验结果
	 */
	validator(model : UTSJSONObject | null, rules : FuiFormRulesParam[]) : Promise<FuiFormValidatorResParam>;

	/**
	 * 验证指定的字段
	 * @param {Array<string>} props  {string[]} 字段key
	 * @param {Object}  model  {UTSJSONObject} 表单数据对象，传null则使用属性中model值
	 * @param {Array} rules  {FuiFormRulesParam[] | null} 表单验证规则，当传null 或空数组时使用FormItem组件内rules
	 * @returns {Object} FuiFormValidatorResParam 校验结果
	 */
	validateField(props : Array<string>, model : UTSJSONObject | null, rules : FuiFormRulesParam[] | null) : FuiFormValidatorResParam;

	/**
	 * 清除校验错误信息，仅结合FormItem组件显示校验信息时有效
	 * @param {Array} props  string[] | null 表单元素的名称集合，传null则清除所有校验错误信息
	 */
	clearValidate(props : string[] | null) : void;

	/**
	 * 通知FormItem组件重置props参数
	 */
	resetFormItemParam() : void;

	/**
	 * 通知FormItem组件开启或关闭实时校验，结合FormItem组件校验时有效
	 * @param {Boolean} isOpen  {Boolean} 是否开启实时校验
	 * @param {Array} rules : {Array | null} 校验规则数据
	 */
	switchRealTimeValidator(isOpen : boolean, rules : FuiFormRulesParam[] | null) : void;
}

/**
* FormItem 表单项
*/
declare interface FuiFormItemComponentPublicInstance {
	/**
	* 设置校验规则
	*/
	setRules(rules : FuiFormRulesParam) : void;

	/**
	* 设置校验规则，并合并或替换Form组件中该prop对应的rules【当页面调用Form组件校验方法传入rules时进行合并操作】
	*/
	setRulesMerge(rules : FuiFormRulesParam | null) : void;

	/**
	 * 验证方法
	 * @param {any} value {string | null} 值，不传则使用Form组件model中值
	 * @returns Promise&lt;FuiFormValidatorResParam&gt; 校验结果
	 */
	validator(value : string | null) : Promise<FuiFormValidatorResParam>;

	/**
	 * 清除校验错误信息
	 */
	clearValidate() : void;
}

/**
* Rate 评分
*/
declare interface FuiRateComponentPublicInstance {
	/**
	 * 当组件嵌套在类似Drawer（抽屉）组件或元素中时，需要调用该方法传入Drawer（抽屉）组件或元素宽度。
	 * 注：当Drawer（抽屉）组件非FirstUI组件时才需要调用。
	 * @param {Number} width {Number} Drawer等元素宽度
	*/
	setParentWidth(width : number) : void;
	
	/**
	 * 重置组件
	*/
	reset() : void;
}