// A basic message to show the script is working
console.log("Script loaded successfully!");

// This code shows an alert when a product box is clicked
document.querySelectorAll('.product').forEach(function(item) {
  item.addEventListener('click', function() {
    alert("You clicked on: " + item.textContent);
  });
});