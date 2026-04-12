# GEMINI.md

## Project Overview
This is a Jekyll-based static website for **Trailhead Counseling**, a counseling practice in Cleveland, TN. The site is built using the `jekyll-agency` theme, a port of the Bootstrap Agency theme, and is hosted on GitHub Pages.

### Tech Stack
- **Framework**: Jekyll (v4.x)
- **Language**: Ruby, SCSS, HTML, JavaScript
- **Styling**: Bootstrap 4, FontAwesome 5
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics 4 (`G-DJSJBTB6QC`)

### Architecture
The site follows a standard Jekyll structure:
- `_config.yml`: Global site settings, including the base URL, email, and social links.
- `_data/`: Contains YAML files for site content (`sitetext.yml`) and navigation (`navigation.yml`).
- `_includes/`: Modular HTML fragments for various sections of the homepage (e.g., `services.html`, `team.html`).
- `_layouts/`: Page layouts (`default.html`, `home.html`, `page.html`).
- `_sass/`: SCSS source files for styling.
- `assets/`: Compiled CSS, JavaScript, and images (primarily in WebP format).
- `_portfolio/`: Markdown files for items in the "What to Expect" (portfolio) section.

## Building and Running
To develop and preview the site locally, ensure you have Ruby and Bundler installed.

### Commands
- **Install dependencies**:
  ```sh
  bundle install
  ```
- **Run the local server**:
  ```sh
  bundle exec jekyll serve --trace
  ```
- **Preview URL**: [http://localhost:4000/trailhead-counseling](http://localhost:4000/trailhead-counseling)

## Development Conventions

### Content Updates
- **Main Content**: Most text on the homepage (Services, About, Team, etc.) is managed in `_data/sitetext.yml`. Update this file to change descriptions, names, or contact info.
- **Therapist Bios**: Managed within the `team` section of `_data/sitetext.yml`.
- **Images**: New images should be added to `assets/img/` and preferably converted to `.webp` format for performance.
- **Portfolio/Expectations**: Individual items are defined in `_portfolio/`.

### Styling
- Custom styles should be added to the appropriate SCSS file in `_sass/`.
- The main entry point for SCSS is `assets/css/agency.scss`.

### Forms
- The contact form is configured to send emails to `info@trailheadcounseling.com` as specified in `_config.yml`. It uses `assets/js/contact_me.js` for validation and submission.

### SEO & Performance
- The site uses WebP images for faster loading.
- Meta tags and titles are managed in `_includes/head.html`.
