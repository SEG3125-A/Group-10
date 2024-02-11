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
}


$(document).ready(function () {
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