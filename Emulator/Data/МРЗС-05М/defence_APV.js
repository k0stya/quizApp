/*
SetVariable('1 ���� ���', '0005.0000');
SetVariable('���� ���1', '0010.0000');
SetVariable('���� ���2', '0010.0000');
SetVariable('���', '1');
SetVariable('���� �� ���1', '1');
SetVariable('���� �� ���2', '1');
*/

function CheckDefence_APV(IsInTimer, RunFromMTZ) {
	if (!IsInTimer) IsInTimer = false;
	if ((
			((GetVariable('���� �� ���1') == '1') && (RunFromMTZ == 1)) ||
			((GetVariable('���� �� ���2') == '1') && (RunFromMTZ == 2))
		) && !IsInDVArrayValue('���/����')) {
		if (IsInTimer) { 
			if (!(
					GetVariable('IaA') > GetVariable('������� ���1') ||
					GetVariable('IbA') > GetVariable('������� ���1') ||
					GetVariable('IcA') > GetVariable('������� ���1')
				) &&
				(GetVariable('1 ������� ���') == '1')) {
				CheckR('���� ��� 1', false);
			} 
			if (!(
					GetVariable('IaA') > GetVariable('������� ���2') ||
					GetVariable('IbA') > GetVariable('������� ���2') ||
					GetVariable('IcA') > GetVariable('������� ���2')
				) &&
				(GetVariable('2 ������� ���') == '1')) {
				CheckR('���� ��� 2', false);
			} 
			CheckSDI('���� ���', true);
		} else {
			TimerDefenceAPV.SetTimer('CheckDefence_APV(true, ' + RunFromMTZ + ')', GetVariable('1 ���� ���') * 1000 + 1);
		}
	}
}

function TimerDefenceAPV::OnTimer(FuncName) {
	eval(FuncName);
}
