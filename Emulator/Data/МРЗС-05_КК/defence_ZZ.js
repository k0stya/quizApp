function CheckDefence_ZZ(IsInTimer) {
	if (!IsInTimer) IsInTimer = false;
	if ((
			GetVariable('ZIO') > GetVariable('������� ��')
		) &&
		GetVariable('������ ��') == '1' &&
		(!IsInDVArrayValue('���� ��'))) {
		if (IsInTimer) { 
			CheckR('���� ��', true);
			CheckSDI('���� ��', true);
		} else {
			TimerDefenceZZ.SetTimer('CheckDefence_ZZ(true)', GetVariable('�������� ��') * 1000 + 1);
		}
	}
}

function TimerDefenceZZ::OnTimer(FuncName) {
	eval(FuncName);
}
