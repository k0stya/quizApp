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
		) && IsInDVArrayValue('���/���')) {
		if (IsInTimer) { 
			CheckR('���� ���' + (RunFromMTZ), false);
			CheckSDI('���/���', true);
		} else {
			TimerDefenceAPV.SetTimer('CheckDefence_APV(true, ' + RunFromMTZ + ')', GetVariable('1 ���� ���') * 1000 + 1);
		}
	}
}

function TimerDefenceAPV::OnTimer(FuncName) {
	eval(FuncName);
}
