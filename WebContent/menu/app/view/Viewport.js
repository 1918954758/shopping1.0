/**
 * 
 */
Ext.define('menu.view.Viewport', {
	extend: 'Ext.container.Viewport',
	//���ַ�ʽ
	layout: 'border',
	alias: 'widget.viewport',
	items: [{
		title: 'ExtJS����',
		collapisble: true,
		region: 'north',
		height: 100,
		html: '<br><center><font size=5>MVCģʽ��ʵ��ExtJS����</font><br><font size=2>ԭ����Դ��ITLee����</font></center>'
	}, {
		title: '���ܲ˵�',
		region: 'west',
		split: true,
		collapisble: true,
		items: [{
			xtype: 'menutree'
		}]
	}, {
		region: 'center',
		id: 'mainContent',
		xtype: 'tabpanel',
		layout: 'fit',
		collapisble: true
	}]
})