# Quick Deployment Guide

## 🚀 Deploy to Netlify in 3 Steps

### Step 1: Prepare Your Files

Your website is ready to deploy! All files are in `/home/user/webapp/`:
- ✅ index.html
- ✅ css/style.css  
- ✅ js/main.js
- ✅ netlify.toml
- ✅ README.md

### Step 2: Choose Your Deployment Method

#### Option A: Drag & Drop (Fastest - 2 minutes)

1. **Create a ZIP file** (optional but recommended):
   ```bash
   cd /home/user/webapp
   zip -r dads-vs-mano-suave.zip index.html css/ js/ netlify.toml README.md -x "*.git*"
   ```

2. **Go to Netlify Drop**: https://app.netlify.com/drop

3. **Drag your folder or ZIP file** onto the drop zone

4. **Done!** Your site is live with a URL like `random-name-123.netlify.app`

#### Option B: GitHub + Netlify (Recommended for updates)

1. **Create a GitHub repository** at https://github.com/new

2. **Push your code**:
   ```bash
   cd /home/user/webapp
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository
   - **Build settings**: Leave empty (no build needed!)
   - Click "Deploy site"

4. **Done!** Every git push will auto-deploy

### Step 3: Customize Your Domain (Optional)

1. **In Netlify Dashboard**:
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `dadsvsmanosuave.com`)

2. **Update DNS** at your domain registrar:
   - Point to Netlify nameservers OR
   - Add A record: `75.2.60.5`
   - Add CNAME for www: `your-site.netlify.app`

3. **Wait 24-48 hours** for DNS propagation

## 📝 After Deployment Checklist

- [ ] Test form submission (Forms tab in Netlify)
- [ ] Set up email notifications for new registrations
- [ ] Update event date in `js/main.js` when confirmed
- [ ] Update benchmark scores in `index.html` when available
- [ ] Test on mobile, tablet, and desktop
- [ ] Share the URL with your community!

## 🆘 Need Help?

**Email**: manosuavebaseball@gmail.com  
**Netlify Docs**: https://docs.netlify.com  
**Netlify Support**: https://answers.netlify.com

---

**Your site is ready to go! Just pick a deployment method and launch. ⚾🚀**
