Ext.onReady(function() {
	//����һ����
	Ext.define('myWin', {//myWin - ����
		extend: 'Ext.window.Window',
		width: 400,
		height: 300,
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
});