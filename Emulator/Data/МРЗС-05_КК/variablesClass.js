variables = {};
SetVariable = function(name, value) {
	var res = OnBeforeSetVariable(name, value);
	variables[name] = value;
	OnAfterSetVariable(name, value);
}
GetVariable = function(name) {
	return variables[name];
}

function OnBeforeSetVariable(name, value) {
	//if ()
}

function OnAfterSetVariable(name, value) {
	if (!!Menu) {
		switch (name) {
			case '���������������':
				Menu.GetMenuByName('>���').IsEnable = (value == 0);
				break;
			case '������������ ��':
				Menu.GetMenuByName('>��').IsEnable = (value == 0);
				break;
			case '���������������':
				Menu.GetMenuByName('>���').IsEnable = (value == 0);
				break;
			case '��01��� �������':
				if (value == 1) SetButton(btnDV01, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			case '��02��� �������':
				if (value == 1) SetButton(btnDV02, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			case '��03��� �������':
				if (value == 1) SetButton(btnDV03, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			case '��04��� �������':
				if (value == 1) SetButton(btnDV04, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			case '��05��� �������':
				if (value == 1) SetButton(btnDV05, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			case '��06��� �������':
				if (value == 1) SetButton(btnDV06, 	'checkr_true', 5 + 10, 380, 21, 21, 'jpg');
				break;
			
		}
	}

	switch (name) {
		case 'F':
			SetVariable('3I0 � ', value);
			break;
		case 'ZIO':
			SetVariable('3I0 ��', value);
			break;
			
		case 'IaA':
			SetVariable('I�  � ', value);
			break;
		case 'IbA':
			SetVariable('I�  � ', value);
			break;
		case 'IcA':
			SetVariable('I�  � ', value);
			break;
			
		case 'IaO':
			SetVariable('I�  ��', value);
			break;
		case 'IbO':
			SetVariable('I�  ��', value);
			break;
		case 'IcO':
			SetVariable('I�  ��', value);
			break;

		case 'UaB':
			SetVariable('U�� � ', value);
			break;
		case 'UbB':
			SetVariable('U�� � ', value);
			break;

		case 'UaO':
			SetVariable('U�� ��', value);
			break;
		case 'UbO':
			SetVariable('U�� ��', value);
			break;
	}
	
}
/////////////////������ ������� 

var test = [
	'test1',
	'test2',
	'test3',
	'test4',
	'test5'
];


var Configuration = ["  ����", "  ���"];
var OFunctionType = ["  ������", "  ��������"];
var OFunctionSource = ["���� ���1", "���� ���2"];
var DVOKindSignal = ["  ������", "  ���������"];
var DVOTypeSignal = ["  ����������", "  ����������"];
var DVList = ['���� �� ��� 1',
'���� ��� 1',
'���� �� ��� 2',
'���� ��� 2',
'���� �����. ���',	
'����. ��� 1',
'���� ��� 2',
'��������� ����.',
'���� ���',
'���/����',
'���� �� ��',
'���� ��',
'�����.',
'���� ���. ��',
'������ ��',
'������ ��',
'����� ���������',
'�������������',
'��������� ��.'];
var RList = ['���� �� ��� 1',
'���� ��� 1',
'���� �� ��� 2',
'���� ��� 2',
'���� �����. ���',	
'����. ��� 1',
'���� ��� 2',
'��������� ����.',
'���� ���',
'���/����',
'���� �� ��',
'���� ��',
'�����.',
'���� ���. ��',
'������ ��',
'������ ��',
'����� ���������',
'�������������',
'��������� ��.'];
var IndicationList = ['���� �� ��� 1',
'���� ��� 1',
'���� �� ��� 2',
'���� ��� 2',
'���� �����. ���',	
'����. ��� 1',
'���� ��� 2',
'��������� ����.',
'���� ���',
'���/����',
'���� �� ��',
'���� ��',
'�����.',
'���� ���. ��',
'������ ��',
'������ ��',
'����� ���������',
'�������������',
'��������� ��.'];
			
var OnOff = ["  ����", "  ���"];
var MTZVariant = ["  ���������", "  �����������"];


