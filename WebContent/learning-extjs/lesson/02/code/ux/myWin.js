//Ext.onReady(function() {
	//����һ����
	Ext.define('ux.myWin', {//myWin - ����   myWinһ��Ҫ���ļ���ƥ��
		extend: 'Ext.window.Window',
		width: 400,
		height: 300,
		config: {//�������������֮�󣬻��Զ�Ϊ�������е��������ɶ�Ӧ��get��set����
			price: 500
		},
		newtitle: 'new zichen',
		mySetTitle: function() {
			this.title = this.newtitle;
		},
		title: 'zichen',
		initComponent: function() {
			this.mySetTitle();
			this.callParent(arguments);
		}
	});
//});