/**
 * ����һ��������
 * �������ǰ�Ӧ�ó���������һ��Ľ�ˮ
 * ���Ǽ����¼�������ͼ�й�������ִ��һЩ������
 */
Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',
	//��������������õ���ͼ����ӵ���������
	views: ['user.List'],
	/**
	 * init �����������ú���ͼ�����Ŀ��������Լ��������Ŀ������Ĺ�����
	 * control �������Ժ����׵ļ����¼���ִ����Ӧ�Ķ���������
	 */
	init: function() {
		console.log('Initialized Users! This happens before the Application launch function is called');
		/**
		 * �����init������ʹ���� this.control ��������ͼ���¼���
		 * control����ʹ�������µ�ComponentQuery�����������ҵ����õ������
		 * ����ComponentQuery���Բο� https://docs.sencha.com/#/api/Ext.ComponentQuery
		 */
		this.control({
			'viewport > panel': {
				render: this.onPanelRendered
			},
			'userlist': {
				itemdblclick: this.editUser
			}
		});
	},
	onPanelRendered: function() {
		console.log('The panel was rendered');
	},
	editUser: function(grid, record) {
		console.log('Double clicked on' + record.get('name'));
		Ext.MessageBox.alert('Double clicked on ' + record.get('name'));
	}
})