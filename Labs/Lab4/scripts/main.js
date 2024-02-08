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