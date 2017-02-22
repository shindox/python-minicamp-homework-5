function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if(!name.length || !species.length || !age.length) {
    alert('fields must not be blank');
    return false;
  }
  if(!Number(age)) {
    alert('Age must take a number');
    return false;
  }

  return true;
}
