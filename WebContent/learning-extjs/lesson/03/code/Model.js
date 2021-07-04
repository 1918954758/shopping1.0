/**
 * 
 */
(function() {
	Ext.onReady(function() {
		//1. ʹ�� Ext.define ������
		// ��MVCģʽ�У�modelһ����M��
		Ext.define('person', {
			extend: 'Ext.data.Model',
			fields: [//�൱�� DB ����һ�� table ��person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			]
		});
		
		//2. ʹ�� create ������
		// �÷��������ķ���ֵ���� Ext.data.Model
		Ext.regModel('user', {
			fields: [//�൱�� DB ����һ�� table ��person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			]
		})
		
		
		//ʵ����person��
		//1. new �ؼ���
		var p1 = new person({
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		});
		//alert(p1.get('name'));��ȡ���е����� c.get('xxx');
		
		//2. Ext.create ������
		var p2 = Ext.create('person', {
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		});
		//alert(p2.get('age'))
		
		//3. ͨ��ModelManager������
		//var p3 = Ext.ModelMgr.create({//ModelMgr��ModelManager�ı�ƣ�ʹ�ñ�ƿ���
		var p3 = Ext.ModelManager.create({//ModelMgr��ModelManager�ı��
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		}, 'person');
		//alert(p3.get('email'));
		//alert(p3.getName());//�൱�� java �� object.getName�������ǲ��Եģ� object.getClass.getName;
		alert(person.getName()); // -> person
		
	})
})();