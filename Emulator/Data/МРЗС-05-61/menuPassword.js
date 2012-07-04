var Password = new function() {
    this.MenuWorkType = 'Parent';
    this.Parent = null;
	this.CallFunction = null;
	this.Password = '';
	this.IsSetPassword = false;
	this.IsOkPassword = false;
	
	this.Print = function() {
		if (this.IsSetPassword) {
			if (this.IsOkPassword) {
				disp1.text = '������ ������';
				disp2.text = '    �����';
			} else {
				disp1.text = '������ ������';
				disp2.text = '   �������';
			}
			return;
		} else {
			disp1.text = ' ������� ������';
			disp2.text = '    ' + this.Password;
		}
	}
	this.OnEvent = function(Parent, Command) {
		if (this.MenuWorkType == 'Self' || Command == 'close_child_function' || Command == 'init') {
			if (this.IsSetPassword && Command != 'init') {
				if (Command != 'cursor') {
					this.IsSetPassword = false;
					if (this.IsOkPassword) {
						this.IsOkPassword = false;
						this.Parent.OnEvent(this, "password_ok");
					} else {
						this.Parent.OnEvent(this, "password_error");
					}
					this.IsOkPassword = false;
					this.Parent = null;
					this.MenuWorkType = 'Parent';
				}
			}
			switch (Command) {
				case "init": 
					this.Parent = Parent;
					this.MenuWorkType = 'Self';
					this.Password = '';
					this.IsSetPassword = false;
					this.IsOkPassword = false;					
					this.Print();
					break;
				case "cursor": 
					this.Print();
					break;
				case "enter": 
					this.IsSetPassword = true;
					this.IsOkPassword = (this.Password == GetVariable('password'));
					this.Print();
					break;
				case "esc": 
					this.IsSetPassword = true;
					this.IsOkPassword = false;
					this.Print();
					break;
				case "1": 
				case "2": 
				case "3": 
				case "4": 
				case "5": 
				case "6": 
				case "7": 
				case "8": 
				case "9": 
				case "0": 
					this.Password += Command;
					break;
			}
		} else {
		
		}
	}
}