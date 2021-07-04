/**
 * 
 */
(function() {
	//onReady�����¼�����Ҫһ��������Ϊ����
	Ext.onReady(function() {
		Ext.create('proxy1', {
			extend: 'Ext.data.Model',
			fields: [
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			],
			proxy: {
				type: 'ajax',
				url: 'person.jsp'//���ز��� person.jsp��Ŀǰ����֪��ԭ�򣬣�����������
			}
		})
		var p = Ext.ModelManager.getModel('proxy1');
		p.load(1, {
			scope: this,
			failure: function(record, operation) {
				
			},
			success: function(record, operation) {
				alert(record);
			},
			callback: function(record, operation) {
				
			}
		});
	});
})();