/*
SetVariable('������� ���1', '0002.0000');
SetVariable('������� ���2', '0010.0000');
SetVariable('�������� ���1', '0001.0000');
SetVariable('�������� ���2', '0002.0000');
SetVariable('� ����� ���', '0000.0000');
SetVariable('� ����� �����', '0000.0000');
SetVariable('������� ���', '1');
SetVariable('1 ������� ���', '1');
SetVariable('2 ������� ���', '1');
SetVariable('����� ���2', '1');
*/

function CheckDefence_MTZ(IsInTimer) {
	if (!IsInTimer) IsInTimer = false;
	CheckDefence_MTZ1(IsInTimer);
	CheckDefence_MTZ2(IsInTimer);
}

function CheckDefence_MTZ1(IsInTimer) {
	if (!IsInTimer) IsInTimer = false;
	if ((
			GetVariable('IaA') > GetVariable('������� ���1') ||
			GetVariable('IbA') > GetVariable('������� ���1') ||
			GetVariable('IcA') > GetVariable('������� ���1')
		) &&
		(GetVariable('1 ������� ���') == '1') &&
		(!IsInDVArrayValue('���� ���1'))) {
		if (IsInTimer) { 
			CheckR('���� ��� 1', true);
			CheckSDI('���� ��� 1', true);
			CheckDefence_APV(false, 1);
		} else {
			TimerDefenceMTZ1.SetTimer('CheckDefence_MTZ1(true)', GetVariable('�������� ���1') * 1000 + 1);
		}
	}
}

function CheckDefence_MTZ2(IsInTimer, IsUskor) {
	if (!IsInTimer) IsInTimer = false;
	if ((
			GetVariable('IaA') > GetVariable('������� ���2') ||
			GetVariable('IbA') > GetVariable('������� ���2') ||
			GetVariable('IcA') > GetVariable('������� ���2')
		) &&
		(GetVariable('2 ������� ���') == '1') &&
		(!IsInDVArrayValue('���� ���2'))) {
		if (IsInTimer) { 
			if (IsUskor) {
				CheckR('���� �����. ���', true);
				CheckSDI('���� �����. ���', true);
			} else {
				CheckR('���� ��� 1', true);
				CheckSDI('���� ��� 1', true);
			}
			CheckDefence_APV(false, 2);
		} else {
			if (GetVariable('����� ���2') == '1') {
				TimerDefenceMTZ2.SetTimer('CheckDefence_MTZ2(true, true)', GetVariable('� ����� ���') * 1000 + 1);
			} else {
				TimerDefenceMTZ2.SetTimer('CheckDefence_MTZ2(true, false)', GetVariable('�������� ���2') * 1000 + 1);
			}
		}
	}
}

function TimerDefenceMTZ1::OnTimer(FuncName) {
	eval(FuncName);
}
function TimerDefenceMTZ2::OnTimer(FuncName) {
	eval(FuncName);
}
