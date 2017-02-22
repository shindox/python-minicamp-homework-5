document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('textColor').value;
  var body = document.getElementsByTagName('BODY')[0];

  body.style.color = color;

  /* to change link text color too:

  // getElementsByTagName() Returns an array-like object of all child elements.
  var links = document.getElementsByTagName("a");
  for(var i=0;i<links.length;i++)
  {
      if(links[i].href)
      {
          links[i].style.color = color;
      }
  } */
})

document.getElementById('hide').addEventListener('click', function() {
  // alternative without toggle
  //var body = document.getElementsByTagName('BODY')[0];
  //body.style.display = 'none';
  //document.getElementById('hide').style.display = 'block';

  var hidebody = document.getElementById('body1');
  var hide2body = document.getElementById('body2');
  var button = document.getElementById("hide")

  // toggle hide/show
  if (hidebody.style.display === "none") {
    hidebody.style.display = 'block';
    hide2body.style.display = "block";
    button.value="HIDE EVERYTHING!";
  } else {
    hidebody.style.display = 'none';
    hide2body.style.display = "none";
    button.value="SHOW EVERYTHING!";
  }

  // visibility is another alternative to display
  //hideclass.style.visibility = "hidden";
  //hideclass.style.visibility = "visible";

})

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length) {
    alert('fields must not be blank');
    return false;
  }

  // check if age is number
  if(!Number(age)) {
    alert('Age must take a number');
    return false;
  }

  return true;
}
