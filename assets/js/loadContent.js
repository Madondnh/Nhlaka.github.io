// loadContent.js - dynamically inject header and main content

const contentRoutes = {
  "#home": "main_content.html",
  "#skills": "skills_content.html",
  "#projects": "projects_content.html",
  "#contact": "contact_content.html",
};

document.addEventListener("DOMContentLoaded", async () => {
  // SET UP A BIT OF A DELAY TO SIMULATE LOADING TIME
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("DOM fully loaded and parsed");

  await loadOutFragment("header.html", "nav-container");
  await loadMainContent();

  window.addEventListener("hashchange", async () => {
    await loadMainContent();
  });
  
  // Sidebar.
  var $loader = $("#loading-overlay");
  $loader.removeClass("is-preload");
  $loader.addClass("notloading");
});

async function loadOutFragment(url, containerId) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();

    document.getElementById(containerId).outerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

async function loadInnerFragment(url, containerId) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();

    document.getElementById(containerId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

async function loadMainContent() {
  const hash = (window.location.hash || "#home").toLowerCase();
  const file = contentRoutes[hash] || contentRoutes["#home"];

  // preserve placeholder while loading
  document.getElementById("main-container").innerHTML =
    '<div class="loading">Loading content...</div>';

  await loadInnerFragment(file, "main-container");

  loadUtilFunction();
  await initialiseMainPageAsync();
}
