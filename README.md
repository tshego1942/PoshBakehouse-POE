## PoshBakehouse - Bakery Website | WEDE5020 POE Part 3
## Student: Tshegofatso RapodileModule: WEDE5020 - Web Development NQF 6Institution: IIE Rosebank InternationalWebsite Name: PoshBakehouse - Fresh & Delicious Bakery  
## Live Links
## Live Website (Netlify): cerulean-cajeta-46616b.netlify.appGitHub Repository: [https://cerulean-cajeta-46616b.netlify.app]Platform: Netlify - Manual Deploy (Published & Public) Project Description
PoshBakehouse is a bakery website showcasing custom cakes, cupcakes, and celebration cakes. Customers can browse specials, view products, enquire about custom orders, and contact the bakery.
## Part 3 - Enhancing Functionality and SEO
1. Working Through Feedback from Part 2 - ChangelogDateFile ChangedChange DescriptionReason2025-05-08style.css, nav.jsImplemented hamburger menu for mobile, added @media queries 768pxPart 2 Feedback - mobile responsiveness2025-05-08All HTML filesAdded descriptive alt text e.g. alt="Chocolate Celebration Cake R450 - bestseller"Accessibility + SEO2025-05-09products.htmlFixed internal links #cakes, #cupcakes, added smooth scrollBroken links2025-05-09images/Compressed images via TinyPNG, added loading="lazy"Page speed2025-05-10README.mdAdded Changelog section for Part 3POE Requirement2025-05-10products.html, tabs.jsAdded interactive tabs for Our SpecialsPart 3 Requirement 2.12025-05-10validation.jsImplemented JS form validation + AJAXPart 3 Requirement 42025-05-10robots.txt, sitemap.xmlCreated SEO filesPart 3 Requirement 3.32. Functionality - JavaScript Enhancements
## 2.1 Interactive Elements:
Tabs: Products page - Our Specials - Tabs section (Cakes / Cupcakes) - tabs.jsInteractive Maps: contact.html - Leaflet.js map showing bakery locationAnimations: Fade-in on scroll for hero Superman cake, hover scale on product cardsAdvanced DOM: Hamburger menu toggle, dynamic footer year: new Date().getFullYear()Gallery Lightbox: Click cake image opens larger view overlay - Lightbox2 library2.2 Dynamic Content:
Dynamic Loading: data.json contains cake data. main.js uses fetch('data.json') to create product cards dynamicallySearch and Filter: Search bar on Products page filters cakes by name using filter() and sort() by price3. SEO
## 3.1 On-Page SEO:
Keywords: custom cakes Johannesburg, birthday cakes South Africa, PoshBakehouse, chocolate celebration cake, Superman cakeTitle Tags: <title>PoshBakehouse | Fresh & Delicious Custom Cakes in SA</title>Meta Description: <meta name="description" content="PoshBakehouse - Fresh & Delicious custom cakes, cupcakes, celebration cakes. Chocolate Celebration R450 bestseller. Order today!">Header Tags: H1 per page, H2 for sections, H3 for product namesImage Optimisation: chocolate-celebration-cake.jpg, superman-kids-cake.jpg, alt text, lazy loadingURL Structure: /index.html, /products.html, /enquiry.html, /contact.html - clean, lowercaseInternal Linking: Footer and nav links, Enquire buttonsMobile-Friendly: viewport meta tag, responsive grid, media queries
## 3.2 Off-Page SEO:
Backlinks: Google Business Profile, SA Yellow Pages, party plannersSocial Media: Facebook, Instagram, WhatsApp links, Open Graph tags og:title, og:imageLocal SEO: NAP in footer - PoshBakehouse, hello@poshbakehouse.co.za, Johannesburg + embedded map
## 3.3 Additional SEO:
robots.txt: User-agent: * / Allow: / / Sitemap: cerulean-cajeta-46616b.netlify.appsitemap.xml: Lists all pages with lastmod datesPage Speed: Compressed images, minified CSS/JS, lazy loading - Score 85+ on PageSpeed InsightsSecurity: HTTPS via Netlify, form sanitization to prevent XSS
## 4. Form Functionality and Validation
enquiry.html vs contact.html Difference:
enquiry.html: Purpose is to enquire about ordering a specific cake, custom cake request, bulk order, price quote, sponsorship. Shows response about cost and availability.
Fields: Full Name, Email, Phone (10 digits), Enquiry Type (select: Custom Cake / Bulk Order / Wedding Cake / Price Enquiry / Sponsorship), Cake Type (radio: Cakes, Cupcakes, Both), Event Date, Message, Preferred Contact (radio: Email/Phone/WhatsApp)
contact.html: Purpose is general contact - feedback, complaint, general question, not ordering. Compiles into email format to hello@poshbakehouse.co.za
Fields: Name, Email, Subject (General Enquiry / Feedback / Complaint / Collaboration), Message, How did you hear about us (checkbox)
Form Elements: form, input type text/email/tel/date/radio/checkbox, textarea, select, button
Validation: required, type="email", pattern="[0-9]{10}", minlength
## 4.2 JavaScript Validation:
Client-Side: Name not empty min 2 chars, Email regex, Phone 10 digits, Message min 10 charsError Handling: Error messages below fields in red <span class="error-message">, e.preventDefault(), red border on invalidAJAX: fetch API to submit without reload, shows success message "Thank you, enquiry received!"5. GitHub Repository Management
## Commits:
feat: add tabs for cakes/cupcakes filtering - Part 3.1fix: mobile nav responsiveness per Part 2 feedbackseo: add meta descriptions, robots.txt, sitemap.xmlfeat: implement enquiry and contact form validation with AJAXfeat: deploy to Netlify - PoshBakehouse livePush commands:
git add .
git commit -m "final part 3 submission - PoshBakehouse"
git push origin main
## 6. Deployment - Netlify
Platform: Netlify (Free)Live URL: cerulean-cajeta-46616b.netlify.appMethod: Manual drag & drop - Dropped files - Published status changed to PublicSteps: Created account Team Tshegofatso Rapodile > Upload folder with index.html, products.html, css/, js/, images/, robots.txt, sitemap.xml > Deployed > Made public > TestedBuild Command: None (static)Publish Directory: Root (.) - contains index.html7. Project Structure
PoshBakehouse/
index.htmlabout.htmlproducts.htmlenquiry.htmlcontact.htmlcss/style.cssjs/main.js, tabs.js, validation.js, lightbox.jsimages/data.jsonrobots.txtsitemap.xmlREADME.md8. References
MDN Web Docs - developer.mozilla.orgW3Schools - w3schools.comLeaflet.js - leafletjs.comLightbox2 - lokeshdhakar.comNetlify Docs - docs.netlify.comPageSpeed Insights - pagespeed.web.devIIE Rosebank College - WEDE5020 Module ManualTinyPNG - tinypng.comFormSpree - formspree.ioLive: cerulean-cajeta-46616b.netlify.app
