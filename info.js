function validateForm() {
    var letters = /^[A-Za-z]+$/;
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var val = 0;

    // Get values from the html font 
    var name =
        document.forms["signup"]["Firstname"];
    var email =
        document.forms["signup"]["EMail"];
    var phone =
        document.forms["signup"]["Telephone"];
    var username =
        document.forms["signup"]["username"];
    var password =
        document.forms["signup"]["password"];
    var Lastname =
        document.forms["signup"]["Lastname"];
    var age =
        document.forms["signup"]["age"];


    // Validation List
    // if (name.value == "") {
    //     val++;
    //     window.alert("Please enter your first name.");
    // }
    if (name.value.charAt(0) != name.value.charAt(0).toUpperCase() || name.value != name.value.match(letters)) {
        val++;
        window.alert("Must start with a cap and only alphabet allowed");
    }
    // if (Lastname.value == "") {
    //     val++;
    //     window.alert("Please enter your Lastname.");
    // }
    if (Lastname.value.charAt(0) != Lastname.value.charAt(0).toUpperCase() || Lastname.value != Lastname.value.match(letters)) {
        val++;
        window.alert("Must start with a cap and only alphabet allowed");
    }
    // if (password.value == "") {
    //     val++;
    //     window.alert("Please enter your password");
    // }
    if (password.value.match(pass)) {
        //     window.alert("Password Success");
    }
    else {
        window.alert("The password strings must match.Pattern attribute is not allowed for this field.");
    }
    if (document.getElementById('Currentenrolled').checked == false && document.getElementById('Didnotgraduate').checked == false && document.getElementById('EducationStatus').checked == false) {
        val++;
        alert("Please enter education status!");

    }

    if (age.value >= 18 && age.value <= 60) {
        // window.alert("You are eligible");
    }
    else {
        val++;
        window.alert("You are not eligible");
    }

    if (val == 0) {
        window.alert(val);
        return true;
    }
    else { window.alert(val); return false; }

}
// Reset function
function reset() {
    document.getElementById("signup").reset();
}