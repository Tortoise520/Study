window.onload = function() {
	var name = document.getElementById('name');
	name.onclick = function() {
		document.getElementById('name_warn').style.display = 'inline-block';
	}
	var pwd = document.getElementById('pwd');
	pwd.onclick = function() {
		document.getElementById('pwd_warn').style.display = 'inline-block';
	}
	var email = document.getElementById('email');
	email.onclick = function() {
		document.getElementById('email_warn').style.display = 'inline-block';
	}
	
	decorator_click('name', function(){
		document.getElementById('name_demo').style.display = 'none';
	});
	decorator_click('pwd', function(){
		document.getElementById('pwd_demo').style.display = 'none';
	});
	decorator_click('email', function(){
		document.getElementById('email_demo').style.display = 'none';
	});
	
	decorator_blur('name', function(){
		document.getElementById('name_demo').style.display = 'inline-block';
		document.getElementById('name_warn').style.display = 'none';
	});
	decorator_blur('pwd', function(){
		document.getElementById('pwd_demo').style.display = 'inline-block';
		document.getElementById('pwd_warn').style.display = 'none';

	});
	decorator_blur('email', function(){
		document.getElementById('email_demo').style.display = 'inline-block';
	document.getElementById('email_warn').style.display = 'none';
});
}

function decorator_click(id, fn) {
	var input = document.getElementById(id);
	input.addEventListener('click', fn);
}
function decorator_blur(id, fn) {
	var input = document.getElementById(id);
	input.addEventListener('blur', fn);
}