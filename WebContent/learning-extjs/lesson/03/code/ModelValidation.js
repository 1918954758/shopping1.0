/**
 * 
 */
(function() {
	Ext.data.validations.lengthMessage = "���ȴ���";
	Ext.onReady(function() {
		//��չ���Զ�����֤����
		Ext.apply(Ext.data.validations, {
			age: function(config, value) {
				if (value == undefined) {
					return false;
				}
				var min = config.min;
				var max = config.max;
				if (value <= min && value >= max) {
					return true;
				} else {
					return false;
				}
			},
			ageMessage: '  is not pass with validate\n it is include with [1 ~ 149]',
		});
		Ext.define('person', {
			extend: 'Ext.data.Model',
			fields: [//�൱�� DB ����һ�� table ��person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			],
			//У������ֻ��������
			validations: [
				//type У������
				//field У���ĳ���ֶ�
				//min У�����
				//max У�����
				{type: 'length', field: 'name', min: 2, max: 50},
				//У�� age ����С��0��Ҳ���ܴ���200
				//�Զ���
				{type: 'age', field: 'age', min: 0, max: 150}
			]
		});
		
		var p2 = Ext.create('person', {
			name: 'zichen.com',
			age: 1126,
			email: 'zichen@163.com'
		});
		
		var errors = p2.validate();
		var errorInfo = [];
		errors.each(function(v) {//v = {field: "name", message: "is the wrong length"} [object Object]
			errorInfo.push(v.field + "[field] " + v.message);
		});
		alert(errorInfo);
	})
})();