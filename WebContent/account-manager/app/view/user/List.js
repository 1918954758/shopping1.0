/**
 * ����һ����ͼ
 * ��ͼ����һ�����
 * ���ﴴ��һ�� Users grid �������ļ� app/view/user/List.js��
 */
Ext.define('AM.view.user.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	title: 'All Users',
	initComponent: function() {
		this.store = {//����store������Щ�ֶ�
			fields: ['name', 'email', 'age', 'sex', 'hobby', 'area'],
			data: [{
				name: 'Ed', 
				email: 'zichen@lemon.com',
				age: '28',
				sex: 'boy',
				hobby: 'lemon',
				area: 'NMG'
			}, {
				name: 'Lemon', 
				email: 'lemon@zichen.com',
				age: '23',
				sex: 'girl',
				hobby: 'zichen',
				area: 'JSWX'
			}, {
				name: 'Dog',
				email: 'dog@cat.com',
				age: '3',
				sex: 'girl',
				hobby: 'dog',
				area: 'no'
			}]
		};
		this.columns = [{//�����ͷ
			header: 'Name',
			dataIndex: 'name',
			flex: 1
		}, {
			header: 'Email',
			dataIndex: 'email',
			flex: 1
		}, {
			header: 'Age',
			dataIndex: 'age',
			flex: 1
		}, {
			header: 'Sex',
			dataIndex: 'sex',
			flex: 1
		}, {
			header: 'Hobby',
			dataIndex: 'hobby',
			flex: 1
		}, {
			header: 'Area',
			dataIndex: 'area',
			flex: 1
		}];
		this.callParent(arguments);
	}
})