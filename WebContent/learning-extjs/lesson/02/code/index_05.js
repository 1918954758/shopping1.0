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
		
		Ext.define('say', {
			cansay: function() {
				alert('hello');
			}
		})
		
		Ext.define('sing', {
			sing: function() {
				alert('sing');
			}
		})
		Ext.define('user', {
			//extend: 'say',//Ҳ���Դﵽ��say���������
			//extend: ['say', 'sing'], �����������Ҫ���������ʹ�����ַ����Ͳ����ԣ����̳У������Զ�������̳�
			mixins: {//��ϣ����Խ���������ķ�����Ͻ���
				say: 'say',
				sing: 'sing'
			}
		})
		
		var u = Ext.create('user', {
			
		});
		
		u.cansay();
		u.sing();
	});
})();