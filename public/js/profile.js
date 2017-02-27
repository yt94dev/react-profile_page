$(document).ready(function() {
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// form
	var form = document.querySelector('.profile_page #tab1a');

	// email
	var par = form.querySelector('.edit-email');
	var em = par.querySelector('#roleEmail');
	var eh = form.querySelector('.email-helper');
	var checkYE = form.querySelector('.checkYourEmail a');
	var anotherInputs = form.querySelectorAll('input:not(#roleEmail)');
	var constantVal = em.value;
	var val = em.value;

	// click on email-helper
	if (eh.addEventListener) {
		eh.addEventListener('click', helperClick, false);
	} else if (eh.attachEvent) {
		eh.attachEvent('onclick', helperClick);
	}

	// another input on focus
	anotherInputs.forEach(function (item, i) {
		if (anotherInputs[i].addEventListener) {
			anotherInputs[i].addEventListener('focus', anotherEmailInputs, false);
		} else if (anotherInputs[i].attachEvent) {
			anotherInputs[i].attachEvent('onfocus', anotherEmailInputs);
		}
	});

	// click on input
	if (window.addEventListener) {
		em.addEventListener('click', inpClick, false);
		em.addEventListener('input', emailInput, false);
		em.addEventListener('blur', emailBlur, false);
		em.addEventListener('focus', emailFocus, false);
		par.addEventListener('mouseover', emailHover, false);
		par.addEventListener('mouseout', emailUnHover, false);
	} else if (window.attachEvent) {
		em.attachEvent('onclick', inpClick);
		em.attachEvent('oninput', emailInput);
		em.attachEvent('onblur', emailBlur);
		em.attachEvent('onfocus', emailFocus);
		par.attachEvent('onmouseover', emailHover);
		par.attachEvent('onmouseout', emailUnHover);
	}

	// click on another inputs
	function anotherEmailInputs () {
		if (eh.classList.contains('state-1')) {
			par.classList.remove('hold');
			par.classList.remove('over');
		}
	};

	// click on email helper
	function helperClick () {
		if (eh.classList.contains('state-1')) {
			em.focus();
			par.classList.add('over');
			eh.innerHTML = 'Save New Email';
			eh.classList.remove('state-1');
			eh.classList.remove('state-3');
			eh.classList.add('state-2');
			par.classList.add('hold');
		} else if (eh.classList.contains('state-2')) {
			var emVal = em.value;
			var regExp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!emVal || !regExp.test(emVal)) {
				em.classList.add('invalid');
			} else {
				val = em.value;
				em.value = val;
				checkYE.innerHTML = val;
				eh.innerHTML = 'Cancel';
				eh.classList.remove('state-2');
				eh.classList.add('state-3');
				par.classList.add('checkYourEmail');
			}
		} else if (eh.classList.contains('state-3')) {
			val = constantVal;
			em.value = val;
			eh.innerHTML = 'Change Email';
			eh.classList.remove('state-3');
			eh.classList.add('state-1');
			par.classList.remove('hold');
			par.classList.remove('over');
			par.classList.remove('checkYourEmail');
		}
	};

	// on blur input field
	function emailBlur () {
		if (eh.classList.contains('state-1') && !par.classList.contains('over')) {
			par.classList.remove('hold');
		}
		if (eh.classList.contains('state-2') && !par.classList.contains('over')) {
			em.value = val;
			eh.classList.remove('state-2');
			eh.classList.add('state-1');
			eh.innerHTML = 'Change Email';
			par.classList.remove('hold');
			par.classList.remove('over');
		}
	};

	// on input email
	function emailInput () {
		eh.innerHTML = 'Save New Email';
		eh.classList.remove('state-1');
		eh.classList.remove('state-3');
		eh.classList.add('state-2');
		par.classList.add('hold');
		par.classList.remove('checkYourEmail');
	};

	// email on focus
	function emailFocus () {
		par.classList.add('hold');
		em.classList.remove('invalid');
	};

	// email hover
	function emailHover () {
		par.classList.add('over');
	};

	// email unhover
	function emailUnHover () {
		par.classList.remove('over');
	};

	// click on input
	function inpClick () {
		if (eh.classList.contains('state-1'))
			em.blur();
	};




	// password
	var pass = form.querySelector('#password-container');
	var mainpass = form.querySelector('#accountPassword');
	var pass2 = form.querySelector('#accountPassword2');
	var pass3 = form.querySelector('#accountPassword3');
	var butt = form.querySelector('#changePass');
	var inputsWithout = form.querySelectorAll('input:not(#accountPassword):not(#accountPassword2):not(#accountPassword3)');
	var symbols = 6;

	// main pass on focus
	if (window.addEventListener) {
		inputsWithout.forEach(function (item, i) {
			inputsWithout[i].addEventListener('focus', anotherPassInputs, false);
		});
		mainpass.addEventListener('focus', passFocus, false);
		pass2.addEventListener('input', passTwoInp, false);
		pass3.addEventListener('input', passTwoInp, false);
		butt.addEventListener('click', changePass, false);
	} else if (window.attachEvent) {
		inputsWithout.forEach(function (item, i) {
			inputsWithout[i].attachEvent('onfocus', anotherPassInputs);
		});
		mainpass.attachEvent('onfocus', passFocus);
		pass2.attachEvent('oninput', passTwoInp);
		pass3.attachEvent('oninput', passTwoInp);
		butt.attachEvent('onclick', changePass);
	}

	// main pass on focus
	function passFocus () {
		pass.classList.add('open');
		mainpass.blur();
	};

	// click on another inputs
	function anotherPassInputs () {
		pass.classList.remove('open');
		pass.classList.remove('open-more');
		butt.innerHTML = 'Change Password';
		butt.classList.remove('state-2');
		butt.classList.remove('state-3');
		butt.classList.add('state-1');
		pass2.classList.remove('invalidin');
		pass3.classList.remove('invalidin');
		mainpass.classList.remove('invalidin');
		pass2.classList.remove('validin');
		pass3.classList.remove('validin');
		mainpass.classList.remove('validin');
	};

	// change pass
	function changePass () {
		pass.classList.remove('open');
		pass.classList.add('open-more');
		if (butt.classList.contains('state-1')) {
			butt.classList.remove('state-1');
			butt.classList.add('state-2');
			butt.innerHTML = 'Save New Password';
			pass2.value = '';
			pass3.value = '';
		}
		if (butt.classList.contains('state-3')) {
			mainpass.value = pass3.value;
			anotherPassInputs();
		}
	};

	// valid pass
	function passTwoInp () {
		var passval = mainpass.value;
		var pass2val = pass2.value;
		var pass3val = pass3.value;
		var labelErr = form.querySelector('[for="accountPassword3"]');
			if (pass2val === pass3val) {
				if (pass2val.length > symbols) {
					pass2.classList.remove('invalidin');
					pass3.classList.remove('invalidin');
					mainpass.classList.remove('invalidin');
					pass2.classList.add('validin');
					pass3.classList.add('validin');
					mainpass.classList.add('validin');
					butt.classList.remove('state-2');
					butt.classList.add('state-3');
					labelErr.setAttribute('data-error', 'Password and confirm password don’t match');
				} else {
					labelErr.setAttribute('data-error', 'Password length should be more than ' + symbols + ' symbols');
				}
			} else {
				labelErr.setAttribute('data-error', 'Password and confirm password don’t match');
				pass2.classList.add('invalidin');
				pass3.classList.add('invalidin');
				mainpass.classList.add('invalidin');
				pass2.classList.remove('validin');
				pass3.classList.remove('validin');
				mainpass.classList.remove('validin');
				butt.classList.remove('state-3');
				butt.classList.add('state-2');
		}
	};

});