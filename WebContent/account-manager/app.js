/**
 * ÿ��ExtJS4���ǴӴ���һ��Application���ʵ����ʼ�ġ�
 * ���Applicationʵ������������һЩȫ�ֵ����ã�����Ӧ�õ����֣���ģ�ͣ���ͼ�Ϳ����������á�
 * һ��ApplicationҲ������һ�������ĺ�����������һ���򵥵��˺Ź���ϵͳΪ����
 * 
 * ���ȣ�����һ��ȫ�������ռ䡣
 * ���е�ExtJSӦ�ö�Ӧ��ʹ��һ��ȫ�������ռ䣬���е�Ӧ�õ��඼λ�����֮�¡�������AMΪ����
 */
Ext.application({
	name: 'AM',
	appFolder: 'account-manager/app',
	launch: function() {
		/*Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				xtype: 'panel',
				title: 'Users',
				html: 'List of users will go here'
			}]
		});*/
		//������õ���ͼ�ȷŵ���ͼ�У��ڽ������app.js�е�viewport��
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: {
				xtype: 'userlist'//����ʹ�� xtype ָ���Ǹ���ͼ��userlist������̬����
			}
		});
	},
	/**
	 * ����������������ǽ������������ӵ�������
	 * ����������з���index.html��ʱ��Users������������Զ������ڣ�
	 * ����init��������Ӧ�õ�launch����ִ��֮ǰ�����á�
	 */
	controllers: [
		'Users'
	]
});