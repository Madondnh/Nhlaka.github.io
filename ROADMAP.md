# Project Roadmap

This repository contains a static developer portfolio built from the HTML5 UP "Editorial" template. Roadmap items are grouped by feature/activity.

## Immediate Priorities

- [x] Convert static template to developer portfolio
- [x] Clean up unused files (generic, elements, sass, index2)
- [x] Refactor `index.html` into separate fragments (`header.html`, `main_content.html`)
- [x] Implement `loadContent.js` to assemble page dynamically
- [x] Add initialization logic in `main.js` with sidebar guard
- [x] Replace project images with placeholders

## Future Enhancements

- Add real project screenshots and links
- Integrate a build step (e.g., Jekyll/React) if site grows
- Add a blog section with Markdown-to-HTML conversion
- Improve accessibility (ARIA roles, alt text) and SEO metadata
- Automate deployment via GitHub Pages CI
- Add contact form backend or integrated email service

## Developer Notes

- `index_old.html` holds previous full page backup
- `header.html` and `main_content.html` can be edited independently
- Ensure `main.js` runs after fragments load (see `loadContent.js`)
- Use Live Server extension for local testing

