// storing a node in the input constant
// invoking addEventListener on that constant with...
  // a click as the event to listen for
  // and a callback function to be executed when the event occurs
function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
