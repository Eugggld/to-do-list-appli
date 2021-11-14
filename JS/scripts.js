function newItem() {

// Adding a new item to the list
// You can store each <li> element in a variable as well using let li = $('<li></li>');.
// Now you can append the li variable to the “list” variable like list.append(li);.
// Think about how you could use this in your mini-project.
  let li = $('<li></li>'); //to store each li element in a variable.
  let inputValue = $('#input').val(); //Select id=input via # from index
  // OR to store a value into a variable?
  li.append(inputValue);

  if(inputValue === '') {
    alert('Please write something');
  } else {
    $('#list').append(li);
    $('#input').val('')
  }

// Crossing an item out: EVENT HANDLING ?
  function crossOut() {
    li.addClass('strike'); // Why TOGGLE? On text it says to use li.addClass("strike");
  }

  li.on('dblclick', crossOut); // on = equivalent of addEventListener

// Adding a delete button
   let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('DELETE')); // Is this CHAINING ?
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass('delete');
  }
  crossOutButton.on('click', deleteListItem);

  $('#list').sortable()
}
