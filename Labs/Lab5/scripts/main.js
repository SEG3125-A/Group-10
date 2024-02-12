// List of pages for navigation
const pages = [{
    id: 'Service-Select',
    title: 'Services',
}, {
    id: 'Time-Select',
    title: 'Select time of appointment',
}, {
    id: 'Personal-Info',
    title: 'Personal Information',
},
{
    id: 'Payment-Submit',
    title: 'Payment and confirmation',
}];

// The stage of the navigation
let stage = 0;

function navigateTo(pageId) {
    const page = pages.find(p => p.id === pageId);
    if (!page) {
        console.error(`Page with id ${pageId} not found`);
        return;
    }
    console.log(`Navigating to page: ${page.title}`);

    // Hide all pages
    pages.forEach(p => {
        const pageElement = document.getElementById(p.id);
        if (pageElement) {
            pageElement.style.display = 'none';
        }
    });

    // Show the selected page
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.style.display = 'block';
    } else {
        console.error(`Page with id ${pageId} not found`);
    }

    // Update the sub header
    const subHeader = document.getElementById("Page-Name");
    subHeader.innerText = page.title;

    // Update the stage
    let newStage = pages.findIndex(p => p.id === pageId);
    if (newStage > stage) {
        stage = newStage;
    }

    console.log(`Stage: ${stage}`);
    console.log(`New Stage: ${newStage}`);

    // Update the navigation buttons disabled state
    let i = 0;
    for (i = 0; i <= stage; i++) {
        const button = document.getElementById(`nav-${i}`);
        if (button) {
            button.disabled = false;
        }
    }

    // Update button backgroud color
    for (i = 0; i < pages.length; i++) {
        const button = document.getElementById(`nav-${i}`);
        if (button) {
            button.style.backgroundColor = "lightgray";
        }
    }

    for (i = 0; i <= newStage; i++) {
        const button = document.getElementById(`nav-${i}`);
        if (button) {
            button.style.backgroundColor = "#86DC3D";
        }
    }
}


$(document).ready(function () {

    $("#toPayment").click(function () {

        var ValidName = false;
        var ValidEmail = false;
        var ValidPhone = false;
        var validData = false;

        var name = $('#uname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        if (name.match("([A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})")) {
            ValidName = true;
            $('#uname').removeClass('is-invalid').addClass('is-valid');
            $('#uname').siblings('.invalid-feedback').text("");
        }
        else {
            $('#uname').removeClass('is-valid').addClass('is-invalid');
            $('#uname').siblings('.invalid-feedback').text("Please enter your Full Name.");
            return;
        }

        if (email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')) {
            ValidEmail = true;
            $('#email').removeClass('is-invalid').addClass('is-valid');
            $('#email').siblings('.invalid-feedback').text("");
        }
        else {
            $('#email').removeClass('is-valid').addClass('is-invalid');
            $('#email').siblings('.invalid-feedback').text("Please enter a valid email address.");
            return;
        }

        if (phone.match('[0-9]{10}')) {
            ValidPhone = true;
            $('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#phone').siblings('.invalid-feedback').text("");
        }
        else {
            $('#phone').removeClass('is-valid').addClass('is-invalid');
            $('#phone').siblings('.invalid-feedback').text("Please enter a valid Phone Number.");
            return;
        }

        setTimeout(function () {
            validData = ValidPhone && ValidEmail && ValidName;
            if (validData) {
                $('#NameSummary').text(name);
                $('#PhoneSummary').text(phone);
                $('#EmailSummary').text(email);
                navigateTo('Payment-Submit');
            }
        }, 100);
    });


    $('#submit').click(function () {
        // Validate Credit Card Number
        var creditCardNumber = $('#Card').val();
        if (!creditCardNumber.match(/^\d{13,16}$/)) {
            $('#Card').removeClass('is-valid').addClass('is-invalid');
            $('#Card').siblings('.invalid-feedback').text("Please enter a valid Credit Card Number.");
            return;
        } else {
            $('#Card').removeClass('is-invalid').addClass('is-valid');
            $('#Card').siblings('.invalid-feedback').text("");
        }

        // Validate CVV
        var cvv = $('#CVV').val();
        if (!cvv.match(/^\d{3,4}$/)) {
            $('#CVV').removeClass('is-valid').addClass('is-invalid');
            $('#CVV').siblings('.invalid-feedback').text("Please enter a valid CVV.");
            return;
        } else {
            $('#CVV').removeClass('is-invalid').addClass('is-valid');
            $('#CVV').siblings('.invalid-feedback').text("");
        }

        // Validate Expiry Date
        var month = $('#Month').val();
        var year = $('#Year').val();
        const formatCond = (month.match(/^\d{2}$/) && year.match(/^\d{2}$/));
        month = parseInt(month);
        year = parseInt(year);
        let nonExpired = false
        console.log(formatCond)
        if (formatCond) {
            if ((year >= 24) && (month <= 12) && !((month <= 1) && (year == 24))) {
                nonExpired = true;
            }
        }
        if (!nonExpired) {
            $('#expVal').text("Please enter a valid Expiry Date.");
            return;
        } else {
            $('#expVal').text("");
        }

        setTimeout(function () {
            alert("Your appointment has been successfully booked. See you soon!");
        }, 100);
    });

});