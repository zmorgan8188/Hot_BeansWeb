//function used on the button "Apply Now" click event of the form
//runs a validation check against all relevant fields
function ValidateVacancyForm() {
    var returnValue;
    var flag1, flag2, flag3, flag4;

    //check the first name
    //if it's empty
    if (document.forms["VacancyApplicationForm"]["fname"].value == "") {
        //set the error text
        document.getElementById("fNameError").innerHTML = "Please Enter your First Name";
        flag1 = false;
    }
    else {//clear the error text
        document.getElementById("fNameError").innerHTML = "";
        flag1 = true;//this is OK
    }

    //check the last name if its empty
    if (document.forms["VacancyApplicationForm"]["sname"].value == "") {
        document.getElementById("sNameError").innerHTML = "Please Enter your Last Name";
        flag2 = false;
    }
    else {//clear the error
        document.getElementById("sNameError").innerHTML = "";
        flag2 = true;
    }

    //make sure that at least one of the radio buttons are checked
    if (document.getElementById("ukResidentYes").checked == false && document.getElementById("ukResidentNo").checked == false) {
        document.getElementById("ukResidentError").innerHTML = "Please say if you are a UK Resident";
        flag3 = false;
    }
    else {
        document.getElementById("ukResidentError").innerHTML = "";
        flag3 = true;
    }

    //first check the phone number has been entered
    if (document.forms["VacancyApplicationForm"]["telNo"].value == "") {
        document.getElementById("telNoError").innerHTML = "Please Enter your contact details";
        flag4 = false;
    }
    else {//something has been entered so now we check this
        var telNo = document.forms["VacancyApplicationForm"]["telNo"].value;

        if (isNaN(telNo)) {//if its not a number..
            document.getElementById("telNoError").innerHTML = "Please make sure your contact details is a number";
            flag4 = false;
        }
        else if (telNo.length < 10 || telNo.length > 12) {//check the length. Must be 11 numbers to be a mobile
            document.getElementById("telNoError").innerHTML = "This phone number is incorrect, please check and try again";
            flag4 = false;
        }
        else {//the number is good, clear the error field
            document.getElementById("telNoError").innerHTML = "";
            flag4 = true;
        }
    }


    //if all these have passed
    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        returnValue = true;
        //send the user to the thank you page
        window.location.href("ThankYou.html");
    }
    else
    {
        //this is false so keep the user at this page.
        returnValue = false;
    }

    return returnValue;
}
