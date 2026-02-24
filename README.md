# Dads vs. Mano Suave — Skills Challenge Website

A complete, production-ready website for the "Dads vs. Mano Suave" baseball skills competition event at The Ripken Experience® Myrtle Beach.

## 🎯 Overview

This website is designed to mirror the exact structure, layout, and design patterns of [manosuavebaseball.com](https://manosuavebaseball.com) with a custom red/navy/gold color palette. It features:

- **5 Individual Skills Events**: Home Run Derby, Golden Arm, Road Runner, Fastest Base Runner, and Pitching Velocity
- **Target Audience**: Dads of 9U–14U travel baseball players
- **Competition Format**: Individual skills challenge against coach Jose "Mano Suave" Polanco's benchmark scores
- **Venue**: The Ripken Experience® Myrtle Beach, South Carolina

## 🚀 Quick Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. Zip all files in this directory (index.html, css/, js/, netlify.toml)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the zipped folder or the entire folder directly onto the page
4. Your site will be live in seconds with a Netlify URL (e.g., `random-name-123.netlify.app`)

### Method 2: GitHub + Netlify

1. Create a new GitHub repository
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Dads vs Mano Suave website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Go to [Netlify](https://app.netlify.com)
4. Click "Add new site" → "Import an existing project"
5. Connect to GitHub and select your repository
6. Deploy settings:
   - **Build command**: (leave empty)
   - **Publish directory**: (leave empty or set to `/`)
7. Click "Deploy site"

## 📝 How to Update Event Date

**File to edit**: `js/main.js`

Find this section at the top of the file:

```javascript
/* =============================================
   UPDATE EVENT DATE HERE
   ============================================= */
const EVENT_DATE = new Date('2025-12-31T09:00:00');
```

**Change the date** to your event date and time. Format: `'YYYY-MM-DDTHH:MM:SS'`

**Examples**:
- `new Date('2025-06-15T10:00:00')` → June 15, 2025 at 10:00 AM
- `new Date('2026-03-20T13:30:00')` → March 20, 2026 at 1:30 PM

The countdown timer will automatically update on the hero section.

You should also update the date display in the **Event Details** section:

**File to edit**: `index.html`

Find this comment in the Details section:
```html
<!-- UPDATE EVENT DATE HERE -->
```

Replace the text "Coming Soon — Check Back for Updates" with your actual event date.

## 🏆 How to Update Benchmark Scores

**File to edit**: `index.html`

Find these sections in the Events grid (there are 5 total):

```html
<div class="score-section">
    <p class="score-label">MANO SUAVE'S SCORE TO BEAT</p>
    <span class="score-badge">TBD</span>
    <!-- UPDATE SCORES HERE -->
</div>
```

**Replace "TBD" with the actual score**. Examples:

- Home Run Derby: `<span class="score-badge">7 HR</span>`
- Golden Arm: `<span class="score-badge">18 points</span>`
- Road Runner: `<span class="score-badge">4.8 seconds</span>`
- Fastest Base Runner: `<span class="score-badge">15.2 seconds</span>`
- Pitching Velocity: `<span class="score-badge">78 MPH</span>`

After updating, save the file and push to your Git repository (if using GitHub) or re-deploy via Netlify drag & drop.

## 🔗 How to Connect a Custom Domain

### Prerequisites
You need to own a domain name (purchased from GoDaddy, Namecheap, Google Domains, etc.)

### Steps

1. **In Netlify Dashboard**:
   - Go to your site
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `dadsvsmanosuave.com`)
   - Click "Verify"

2. **Configure DNS** (at your domain registrar):
   
   **Option A: Netlify DNS (Recommended)**
   - In Netlify, click "Set up Netlify DNS"
   - Follow instructions to change nameservers at your registrar
   - Netlify nameservers: `dns1.p01.nsone.net`, `dns2.p01.nsone.net`, etc.
   
   **Option B: Custom DNS**
   - Add an A record pointing to Netlify's load balancer: `75.2.60.5`
   - Add a CNAME record for `www` pointing to your Netlify URL (e.g., `random-name-123.netlify.app`)

3. **Enable HTTPS**:
   - Netlify automatically provisions a free SSL certificate via Let's Encrypt
   - This usually takes a few minutes after DNS propagation
   - Click "Verify DNS configuration" if needed

4. **Set Primary Domain**:
   - Choose whether you want `www.yourdomain.com` or `yourdomain.com` as primary
   - Netlify will automatically redirect the other to your primary choice

### DNS Propagation
- DNS changes can take 24-48 hours to propagate globally
- Use [DNS Checker](https://dnschecker.org) to verify propagation

## 📧 How to View Form Submissions

### In Netlify Dashboard

1. Go to your site in Netlify
2. Click "Forms" in the top navigation
3. Select "dads-registration" form
4. View all submissions with timestamps

### Enable Email Notifications

1. In Netlify Forms settings
2. Click "Form notifications"
3. Add email notification:
   - **Email to notify**: `manosuavebaseball@gmail.com`
   - **Event to listen for**: New form submission
4. Click "Save"

You'll receive an email every time someone registers.

### Export Submissions

- Click "Export as CSV" in the Forms tab
- Download all submissions for offline processing

### Spam Protection

The form includes:
- **Honeypot field** (hidden "bot-field") to catch bots
- **Netlify's built-in spam filtering**

## 🎨 Color Palette

The site uses a red/navy/gold color scheme:

- **Primary Red**: `#c8102e`
- **Dark Red**: `#a50d26`
- **Light Red**: `#f04060`
- **Deep Navy**: `#0a1628`
- **Accent Gold**: `#FFD700`

All colors are defined as CSS variables in `css/style.css` for easy customization.

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Live countdown timer to event day
- ✅ Fade-in animations on scroll
- ✅ Mobile hamburger menu
- ✅ Netlify form integration with spam protection
- ✅ SEO optimized with meta tags
- ✅ Font Awesome icons
- ✅ Google Fonts (Montserrat + Open Sans)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, no build tools
- **Netlify Forms**: Built-in form handling
- **Netlify Hosting**: CDN, SSL, continuous deployment

## 📂 File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🔧 Local Development

No build tools required! Simply:

1. Open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```
3. Navigate to `http://localhost:8000`

## 📞 Contact & Support

**Email**: [manosuavebaseball@gmail.com](mailto:manosuavebaseball@gmail.com)  
**Phone**: [(843) 467-5997](tel:+18434675997)  
**Instagram**: [@manosuavebaseball](https://www.instagram.com/manosuavebaseball/)

## 📄 License

© 2025 Mano Suave Baseball. All rights reserved.

---

**Built with ⚾ for dads who are ready to compete.**
