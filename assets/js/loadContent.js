// loadContent.js - dynamically inject header and main content

document.addEventListener('DOMContentLoaded', () => {

    console.log("DOM fully loaded and parsed");
    
    const loadFragment = async (url, containerId) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
            const html = await res.text();

            document.getElementById(containerId).outerHTML = html;
        
        } catch (err) {
            console.error(err);
        }
    };

    loadFragment('header.html', 'nav-container');
    loadFragment('main_content.html', 'main-container');

    loadUtilFunction();
    initialiseMainPageAsync();
});
