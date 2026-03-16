// loadContent.js - dynamically inject header and main content

document.addEventListener("DOMContentLoaded", async () => {

 // SET UP A BIT OF A DELAY TO SIMULATE LOADING TIME
  await new Promise((resolve) => setTimeout(resolve, 1000));

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

  await loadFragment("header.html", "nav-container");
  await loadFragment("main_content.html", "main-container");

  loadUtilFunction();
  await initialiseMainPageAsync();

  // Sidebar.
  var $loader = $("#loading-overlay");
  $loader.removeClass("is-preload");
  $loader.addClass("notloading");
});
