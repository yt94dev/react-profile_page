// change user profile
function profileTransfer (that) {
  var par = that.parentNode;
  par.classList.remove('hov_intership');
  par.querySelector('.that_val').value = '';
  par.parentNode.querySelector('.prof_apply').setAttribute('disabled', '');
  setTimeout(function () {
    par.classList.add('show_form');
  }, 100);
};

// hover on top button
function changeUserHover (that) {
  that.parentNode.classList.add('hov_intership');
}; function changeUserUnHover(that) {
  that.parentNode.classList.remove('hov_intership');
};

// on input
function changeUserInput (that) {
  var a = that.parentNode.querySelector('a');
  that.value ? a.removeAttribute('disabled') : a.setAttribute('disabled', '');
};

// aplly button
function apllyTransfer (that) {
  var val = that.parentNode.querySelector('.that_val').value;
  if (val) {
    that.parentNode.querySelector('.put_val').value = val;
    that.parentNode.parentNode.classList.remove('show_form');
  }
};

// form hover
function changeUserParHover(that) {
  that.classList.add('that_hover');
}; function changeUserParUnHover(that) {
  that.classList.remove('that_hover');
};

// hide form
if (window.addEventListener) {document.addEventListener('click', docClick, false);
} else if (window.attachEvent) {document.attachEvent('onclick', docClick);}
function docClick () {
  try {
    var el_action = document.querySelector('.profile-changeUser:hover');
    var el_action2 = document.querySelector('.profile-change_user_section.show_form');
    if (!el_action) el_action2.classList.remove('show_form');
  } catch(e) {};

  // FOR TEAM OWNER PAGE
  if (document.querySelector('td.adding_new_access') && !document.querySelector('.adding_access:hover'))
    document.querySelector('td.adding_new_access').classList.remove('adding_new_access');
  if (document.querySelector('.click_hover'))
    document.querySelector('.click_hover').classList.remove('click_hover');
};



// TEAM OWNER OPERATION
// remove access
function removeAccess(that) {
  that.parentNode.classList.add('removing');
  setTimeout(function () {
    that.parentNode.parentNode.parentNode.removeChild(that.parentNode.parentNode);
  }, 600);
  that.parentNode.parentNode.parentNode.querySelector('.put_access').value = '';
};

// delete user
function deleteUserLine(that) {
  var line = that.parentNode.parentNode.parentNode.parentNode;
  line.classList.add('deleting');
  setTimeout(function () {
    line.parentNode.removeChild(line);
  }, 1000);
};

// add next user access
function addNewUserAccess(that) {
  setTimeout(function () {
    that.parentNode.parentNode.classList.add('adding_new_access');
  }, 100);
  setTimeout(function () {
    that.parentNode.querySelector('.input_new_access').focus();
  }, 200);

  var container = that.parentNode.parentNode;
  if (container.querySelector('[type="radio"]:checked'))
    container.querySelector('[type="radio"]:checked').checked = false;
  var disableds = container.querySelectorAll('[type="radio"][disabled]')
  if (disableds){
    disableds.forEach(function (item, i) {
      item.disabled = false;
    });
  }
  if (container.querySelector('a.admin'))
    container.querySelector('.admin_or_owner input:nth-child(1)').disabled = true;
  if (container.querySelector('a.owner'))
    container.querySelector('.admin_or_owner input:nth-child(3)').disabled = true;
  if (container.querySelector('a.user'))
    container.querySelector('.admin_or_owner input:nth-child(5)').disabled = true;
  if (container.querySelector('a.viewer'))
    container.querySelector('.admin_or_owner input:nth-child(7)').disabled = true;
};

// apply new access
function apllyNewAccess(that) {
  var container = that.parentNode.parentNode.parentNode.parentNode;

  // put value in hidden input
  var val = that.parentNode.parentNode.querySelector('.input_new_access').value;
  that.parentNode.querySelector('.put_access').value = val;

  try {
    var who = that.parentNode.querySelector('input[type="radio"]:checked + label > span').innerHTML.toLowerCase();
    var clone = document.querySelector('#add_new_' + who + ' > div').cloneNode(true);
    container.insertBefore(clone, container.firstChild);
  } catch (e) {}
  container.classList.remove('adding_new_access');

};

// select click arrow
function select_click(that) {
  setTimeout(function () {
    that.parentNode.classList.add('click_hover');
  }, 100);
};
