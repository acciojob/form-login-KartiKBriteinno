function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Retrieve the values from the input fields using their name attributes
    var firstName = document.querySelector("input[name='fname']").value;
    var lastName = document.querySelector("input[name='lname']").value;
    
    // Concatenate the first name and last name
    var fullName = firstName + " " + lastName;
    
    // Display the full name in an alert
    alert(fullName);
}
