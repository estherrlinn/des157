console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


//capture the submit
document.f.onsubmit = processForm;
document.f.onreset = test;

//define process function
function processForm(){
  //store words in variable
  var firstName = document.f.firstName.value;
  var planet = document.f.planet.value;
  var tech = document.f.tech.value;
  var plural = document.f.plural.value;
  var noun = document.f.noun.value;
  var name = document.f.name.value;
  var country = document.f.country.value;
  var animal = document.f.animal.value;
  var number = document.f.number.value;
  var sound = document.f.sound.value;
  var noun2 = document.f.noun2.value;
  var action = document.f.action.value;
  var expression = document.f.expression.value;
  var noun3 = document.f.noun3.value;
  var number2 = document.f.number2.value;
  var adj = document.f.adj.value;

// results.className="show";
msg.innerHTML = 'Voiced by: ' + firstName + ' Attenbourough';
msg2.innerHTML = 'Looking down from two miles above the surface of the ' + planet + ' it\'s impossible not to be impressed by the sheer splendor and grandeur of the natural world.' + 'With ' + tech + ', we can now show life on our planet in entirely new ways. Bring you closer to ' + plural + ' than ever before. And reveal new ' + noun + ' dramas for the very first time.';
msg3.innerHTML = 'This is Planet ' + planet + ' II.';
msg4.innerHTML = 'ISLANDS';
msg5.innerHTML = 'Welcome to the tiny island of ' + name + ' off the coast of ' + country + '.';

msg6.innerHTML = 'Home to the pygmy three-toed ' + animal + '.';
msg7.innerHTML = 'There are only ' + number + ' pygmy ' + animal + ' in existence.' + ' And he needs a mate.';
msg8.innerHTML = '(' + sound + ') That\'s an enticing call from a female. Somewhere out there. And this, for a ' + animal + ', is an invitation.';
msg9.innerHTML = '(FEMALE ' + sound + ' AGAIN) The problem is, there\'s deep ' + noun + ' between them. So what should any red-blooded ' + animal + ' do?' + action + ', of course.';
msg10.innerHTML = 'Could this be her? He does his best to put on ' + expression + '. But she\'s not the one. She already has a ' + noun + ' and she won\'t mate again until it leaves her in about ' + number2 + ' months time.';
msg11.innerHTML = 'Even life on a ' + adj + ' island can have its limitations.';
msg12.innerHTML = '(MORE ' + sound + ') But at least she can\'t be far away.';

  return false;
}

function resetForm() {
  msg.innerHTML = "";
  document.form.reset();
  results.className="hide";
  return false;
}


});
