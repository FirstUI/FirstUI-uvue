type IFui = {
	/**
	 * toast 轻提示
	 * @description 一种轻量级反馈/提示，适合用于页面转场、数据交互的等场景中。
	 * @param {String} text {String} 提示内容
	 * @example this.fui.toast('提示~')
	 */
	toast(text : string) : void;
	/**
	 * modal 模态框
	 * @description 在浮层中显示，引导用户进行相关操作。
	 * @param {String} title {String} 标题
	 * @param {String} content {String} 提示内容
	 * @param {Function} callback {Function} 回调函数
	 * @param {Boolean} showCancel {Boolean} 是否显示取消按钮
	 * @example this.fui.modal('标题','内容',(res)=>{},false)
	 */
	modal(title : string, content : string, callback : (res : boolean) => void, showCancel : boolean) : void;
	/**
	 * href 页面跳转
	 * @description 页面跳转。
	 * @param {String} url {String} 页面路径
	 * @param { Boolean} isMain {Boolean} 是否为tabbar主页面
	 * @example this.fui.href('/pages/a/a',false)
	 */
	href(url : string, isMain : boolean) : void;
	/**
	 * resUrl 
	 */
	resUrl() : string;
	/**
	 * rpx 转 px
	 * @description rpx 转 px。
	 * @param {Number} rpx {Number} rpx数值
	 * @example this.fui.rpx2px(200)
	 */
	rpx2px(rpx : number) : number;
}


const fui : IFui = {
	toast(text : string) : void {
		uni.showToast({
			title: text,
			icon: 'none',
			duration: 2000
		})
	},
	modal(title : string, content : string, callback : (res : boolean) => void, showCancel : boolean) {
		uni.showModal({
			title: title,
			content: content,
			showCancel: showCancel,
			// #ifndef MP-TOUTIAO
			cancelColor: "#7F7F7F",
			confirmColor: '#465CFF',
			// #endif
			confirmText: '确定',
			success(res) {
				if (res.confirm) {
					if (typeof callback == 'function') {
						callback(true)
					}
				} else {
					if (typeof callback == 'function') {
						callback(false)
					}
				}
			},
			fail(err) {
				console.log(err)
			}
		})
	},
	href(url : string, isMain : boolean) : void {
		if (isMain) {
			uni.switchTab({
				url: url
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	},
	resUrl() : string {
		return 'https://res.firstui.cn/static/images'
	},
	rpx2px(rpx : number) : number {
		let px : number;
		// #ifdef APP-ANDROID
		px = UTSAndroid.rpx2px(rpx);
		// #endif

		// #ifndef APP-ANDROID
		const sys : GetSystemInfoResult = uni.getSystemInfoSync();
		px = sys.windowWidth / 750 * rpx;
		// #endif
		return px;
	}
}
export default fui