# Site Preview & Features

## 🎨 Design Overview

The **Dads vs. Mano Suave** website features a bold, athletic design with a red/navy/gold color palette that creates energy and competition.

### Color Scheme
- **Primary Red**: #c8102e (Main CTA buttons, accents)
- **Deep Navy**: #0a1628 (Hero gradient, contact section)
- **Accent Gold**: #FFD700 (Countdown numbers, score badges)
- **Clean White**: #ffffff (Cards, text backgrounds)

### Typography
- **Headings**: Montserrat (900 weight for titles, 700 for subheads)
- **Body Text**: Open Sans (400 regular, 600 semibold)

## 📱 7 Main Sections

### 1. **Fixed Navbar**
- Centered logo (Mano Suave Baseball)
- Centered navigation links
- Mobile-responsive hamburger menu
- Smooth scroll to all sections
- "Sign Up" button prominently styled

### 2. **Hero Section** (Full viewport height)
- Dramatic gradient background with baseball diamond SVG pattern
- Large title: "DADS VS. MANO SUAVE"
- Compelling description targeting 9U-14U dads
- Two action buttons: "SIGN UP NOW" + "SEE THE EVENTS"
- **Live Countdown Timer** with 4 boxes (Days/Hours/Minutes/Seconds)
- Responsive text sizing for mobile

### 3. **About the Challenge** (White background)
- Two-column layout:
  - **Left**: Story and features list with baseball icons
  - **Right**: Gradient card highlighting Jose "Mano Suave" Polanco
- 5 key features with checkmark-style bullets
- Link to ManoSuaveBaseball.com

### 4. **The 5 Events** (Light gray background)
- CSS Grid with 3 cards in first row, 2 centered in second row
- Each event card includes:
  - Large Font Awesome icon
  - Event badge (EVENT 1, EVENT 2, etc.)
  - Event name (bold, large)
  - Rules description
  - "Score to Beat" section with gold "TBD" badge
- Hover effect: cards lift up
- Fully responsive (3 cols → 2 cols → 1 col)

**The 5 Events**:
1. 🏠 Home Run Derby
2. 🎯 Golden Arm (throw accuracy)
3. ⚡ Road Runner (40-yard dash)
4. 🏃 Fastest Base Runner (4-base sprint)
5. 🔥 Pitching Velocity

### 5. **Event Details** (White background)
- 3 info cards:
  - **📍 Location**: The Ripken Experience® Myrtle Beach
  - **📅 Date & Time**: "Coming Soon" placeholder
  - **👥 Who Can Compete**: Dad eligibility
- Full-width gradient banner about The Ripken Experience
- CTA button to learn more about venue

### 6. **Sign-Up Form** (Light gray background)
- Clean white card with rounded corners
- Netlify form integration (no backend needed!)
- Fields:
  - Dad's name & email (required)
  - Phone & team name
  - Age division dropdown (9U-14U)
  - T-shirt size
  - **Pill-style checkboxes** for event selection (visual toggle)
  - How did you hear about us
  - Comments textarea
- Bold red submit button: "REGISTER — LET'S GO! ⚾"
- Success message display on submission
- Honeypot spam protection

### 7. **Contact + Footer** (Navy & black backgrounds)
- **Contact Section** (Navy):
  - Email: manosuavebaseball@gmail.com
  - Phone: (843) 467-5997
  - Instagram button with gradient
  - "Presented by..." attribution
- **Footer** (Black):
  - Copyright 2025

## ✨ Interactive Features

### JavaScript Functionality
1. **Countdown Timer**: Updates every second until event date
2. **Smooth Scroll**: All anchor links scroll smoothly to sections
3. **Navbar Shadow**: Increases on scroll for depth
4. **Mobile Menu**: Hamburger toggle with slide-down animation
5. **Fade-In Animations**: Sections appear as you scroll (IntersectionObserver)
6. **Checkbox Pills**: Visual toggle when selecting events
7. **Form Success**: Shows confirmation message on submission

### Responsive Breakpoints
- **Desktop**: 1200px+ (full 3-column layouts)
- **Tablet**: 768px-968px (2-column layouts, adjusted navbar)
- **Mobile**: <768px (single column, hamburger menu, stacked forms)

## 🎯 Call-to-Action Flow

1. **Hero**: "SIGN UP NOW" button (primary)
2. **Hero**: "SEE THE EVENTS" button (secondary)
3. **Navbar**: "Sign Up" pill button (always visible)
4. **About**: "Visit ManoSuaveBaseball.com" link
5. **Details**: "Learn More About the Venue" button
6. **Sign-Up**: Large submit button
7. **Contact**: Email, phone, Instagram links

## 📊 Form Data Collection

The Netlify form captures:
- ✅ Dad's contact info (name, email, phone)
- ✅ Child's team and age division
- ✅ T-shirt size preference
- ✅ Event selections (can choose multiple)
- ✅ Referral source
- ✅ Additional comments

All submissions appear in Netlify dashboard with email notifications.

## 🚀 Performance Features

- ✅ **No build tools** = instant deployment
- ✅ **Pure HTML/CSS/JS** = fast loading
- ✅ **CDN fonts** (Google Fonts, Font Awesome)
- ✅ **Netlify CDN** = global edge distribution
- ✅ **Optimized CSS** with variables
- ✅ **Efficient animations** with IntersectionObserver
- ✅ **Mobile-first responsive design**

## 🔒 Security & Spam Protection

- ✅ Netlify form spam filtering
- ✅ Honeypot field for bots
- ✅ SSL certificate (auto via Netlify)
- ✅ No exposed backend or API keys

## 📈 SEO Optimization

- ✅ Semantic HTML5 structure
- ✅ Meta description tag
- ✅ Open Graph tags for social sharing
- ✅ Descriptive page title
- ✅ Alt tags on images
- ✅ Proper heading hierarchy (h1, h2, h3)

---

**This site is production-ready and can be deployed to Netlify in under 2 minutes!**
