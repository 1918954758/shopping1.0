/**
 *
 */
(function() {
	//Ԥ���� ux������ļ��������Ǵ��� 'ux.myWin' ʱ���ż���
	Ext.Loader.setConfig({
		enabled: true,//����Loader����
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
		
		//ʵ�����������
		var mywin = Ext.create('ux.myWin', {
			title: 'ZICHEN',
			price: 600,
			requires: ['ux.myWin']//��ȥ�� myWin.js  myWinһ��Ҫ���ļ���ƥ��
		});
		
		Ext.get('zi').on('click', function() {
			//mywin.show();
			//alert(mywin.getPrice());
			mywin.setPrice(700);
			alert(mywin.getPrice());
		})
	});
})();