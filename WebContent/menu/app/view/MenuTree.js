/**
 * ����һ���˵����
 * ���˵���������������viewport���õ�
 */
Ext.define('menu.view.MenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.menutree',
	border: false,
	//�涨ê���ӵ�ַ����ʾ����
	hrefTarget: 'mainContent',
	//�Ƿ���ʾ���ڵ�
	rootVisible: false,
	//���ݼ�
	store: 'MenuStore'
})