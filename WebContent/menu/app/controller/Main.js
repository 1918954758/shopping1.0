/**
 * 
 */
Ext.define('menu.controller.Main', {
	extend: 'Ext.app.Controller',
	//��view��ͼ��ӵ�������
	views: ['Viewport', 'MenuTree'],
	//�����ݼ���ӵ�������
	stores: ['MenuStore'],
	
	//��ʼ����������launch����֮ǰִ��
	init: function() {
		this.control({
			'menutree': {
				itemdblclick: this.changePage
			}
		});
	},
	
	//changePage ����
	changePage: function(view, rec, item, index, e) {
		var title = rec.get('text');
		var leaf = rec.get('leaf');
		var tabPanel = Ext.getCmp('mainContent');
		//�ӽڵ���ܴ򿪣����ڵ㲻������Ӧ
		if (leaf == false) {
			return;
		}
		//��titleֵ����tab��id����ʱ������ ʹtab active�������½�tab
		var newTab = tabPanel.getChildByElement(tilte);
		if (newTab == null) {
			tabPanel.add({
				id: title,
				title: title,
				html: '��ǰҳ���� ' + title + '<br/><br/>',
				closable: true
			});
		}
		tabPanel.setActiveTab(title);
	}
})