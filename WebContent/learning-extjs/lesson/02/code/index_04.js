/**
 *
 */
(function() {
	//预加载 ux下面的文件，当我们创建 'ux.myWin' 时，才加载
	Ext.Loader.setConfig({
		enabled: true,//启用Loader机制
		paths: {
			myApp: 'ux'
		}
	});
	Ext.onReady(function() {
//		var win = new Ext.window.Window({
//			width: 400,
//			height: 300,
//			title: 'zichen'
//		});
//		
//		Ext.get('zi').on('click', function() {
//			win.show();
//		})
		
		
//		var o = {
//			say: function() {
//				alert(1111);
//			}
//		}
//		var fn = Ext.Function.alias(o, 'say');
//		fn();
		
//		var win = Ext.create('Ext.window.Window', {
//			width: 400,
//			height: 300,
//			title: 'zichen'
//		});
//		win.show();
		
		//实例化定义的类
		var mywin = Ext.create('ux.myWin', {
			title: 'ZICHEN',
			price: 600,
			requires: ['ux.myWin']//会去找 myWin.js  myWin一定要和文件名匹配
		});
		
		Ext.get('zi').on('click', function() {
			//mywin.show();
			//alert(mywin.getPrice());
			mywin.setPrice(700);
			alert(mywin.getPrice());
		})
	});
})();