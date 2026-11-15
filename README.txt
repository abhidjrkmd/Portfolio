YOUR MOBILE-FIRST PORTFOLIO — START HERE

WHAT'S INCLUDED
- index.html: portfolio content and sections
- styles.css: mobile-first design and responsive layout
- script.js: theme switch, active mobile navigation and service-worker registration
- manifest.webmanifest: metadata for Add to Home Screen / PWA support
- sw.js: basic offline cache for the site files
- icons/: placeholder app icons

1) OPEN IN VS CODE
- Extract this ZIP file.
- In VS Code choose File > Open Folder.
- Select the extracted folder named mobile-portfolio-starter.
- Open index.html.
- To preview, install the free VS Code extension "Live Server" (by Ritwick Dey), right-click index.html, and choose "Open with Live Server".
- You can also double-click index.html for a basic preview. PWA/service-worker features require a local web server or HTTPS.

2) PERSONALISE BEFORE PUBLISHING
Open index.html and use Ctrl+H (Find and Replace) to replace:
- Your Name: your real display name
- YN: your initials (also update the header/footer and avatar)
- [your role / what you study]: your role, degree or focus
- you@example.com: your public contact email
- GitHub, LinkedIn and Instagram URLs: your real profile links
- Project name / Another project: your actual projects and descriptions
- Skills, education, dates and experience: your accurate information

You can remove any section or project card you don't need. Do not publish private phone numbers, home addresses, passwords, API keys or other sensitive information.

To add a profile photo later, replace the initials avatar block in index.html with an image you own, and add the image file to this folder (for example assets/profile.jpg). Update its CSS so it fits the 88px avatar.

To add a CV, place a PDF named resume.pdf in this folder and add a link to it in index.html.

3) PUBLISH FREE WITH GITHUB PAGES
- Create/sign in to GitHub: https://github.com/
- Note your exact GitHub username.
- Create a NEW PUBLIC repository named exactly: YOUR-USERNAME.github.io
  (Replace YOUR-USERNAME with your GitHub username. Do not include spaces.)
- Open the new repository, choose Add file > Upload files.
- Upload the CONTENTS of this extracted folder (index.html, styles.css, script.js, manifest.webmanifest, sw.js, README and icons folder). Do not upload only the ZIP file and do not put everything inside an extra nested folder.
- Commit the files to the main branch.
- Go to repository Settings > Pages.
- Under Build and deployment, set Source to "Deploy from a branch".
- Choose Branch: main and Folder: /(root), then Save.
- Wait for the Pages deployment to finish. Open https://YOUR-USERNAME.github.io

GitHub Pages publishing can take several minutes. The repository must be public for GitHub Free. Remember that the published site and its files are public even if you do not share the URL widely.

4) OPEN ON ANDROID AND IPHONE
- Android: open your published HTTPS URL in Chrome. Use the browser menu > Install app or Add to Home screen if offered.
- iPhone: open the URL in Safari > Share > Add to Home Screen.
- Test on both a real phone and a desktop browser. The site layout adapts to screen width.
- PWA install options differ by browser and OS version. This is still a website; it is not an App Store / Play Store app.

5) WHEN YOU UPDATE THE SITE
- Edit the files in VS Code.
- Save them.
- In GitHub, upload the changed files and commit them (or use Git later for easier updates).
- If you make offline-cache changes, update CACHE_NAME in sw.js (for example v2) so browsers can refresh the cached files.

IMPORTANT
- GitHub Pages hosts static files. This starter has no private database, admin panel or server-side contact form.
- The contact button opens the visitor's email app using mailto:.
- Use only profile/project details and photos you have permission to publish.
