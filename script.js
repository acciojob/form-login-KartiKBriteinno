function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Retrieve the values from the input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    // Concatenate the first name and last name
    var fullName = firstName + " " + lastName;
    
    // Display the full name in an alert
    alert(fullName);
}