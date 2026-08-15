# Next.js Deployment Guide — New Grace Electrical

This guide outlines the steps to push your local codebase to **GitHub** and connect it to **Vercel** for automated build and deployment. Once set up, **any git commit you push will automatically build and deploy**, updating your live website URL in seconds.

---

## 💻 Step 1: Push Local Repository to GitHub

If you have already created a repository on GitHub, follow these commands in your project root terminal to link and push your code:

```bash
# 1. Add your remote GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/your-username/new-grace-electrical.git

# 2. Rename default branch to main (standard branch naming)
git branch -M main

# 3. Push your commits to GitHub
git push -u origin main
```

*Note: If you make further changes locally, simply run:*
```bash
git add .
git commit -m "Your descriptive change message"
git push
```

---

## 🚀 Step 2: Set Up Automated Vercel Deployment (Recommended)

Vercel is the creator of Next.js and provides a **free hobby tier** with native, instant CD (Continuous Deployment) from GitHub.

1. **Sign Up / Login to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign up using your **GitHub account**.
2. **Import Repository**:
   - On the Vercel dashboard, click **"Add New"** → **"Project"**.
   - Under "Import Git Repository", find and import your `new-grace-electrical` repository.
3. **Configure Project**:
   - **Framework Preset**: Vercel will automatically detect `Next.js`.
   - **Root Directory**: Keep as `./`.
   - **Build & Development Settings**: Keep defaults (Vercel automatically detects `npm run build`).
4. **Deploy**:
   - Click **"Deploy"**.
   - Within 1–2 minutes, Vercel will build your site and generate a live, public URL (e.g., `new-grace-electrical.vercel.app`).

---

## ⚡ How Automatic UI Updates Work

Once Vercel is connected to your GitHub repository:
1. Every time you run `git push origin main` from your local machine, GitHub notifies Vercel.
2. Vercel automatically starts a background build task, compiles your Next.js application, runs TypeScript checks, and deploys.
3. When the build finishes (usually ~1 minute), **your live URL updates automatically** with no downtime!

---

## 📋 Pre-Deployment Check

- [x] **Images placed**: All photography is stored in `public/images/`.
- [x] **Favicon configured**: Transformed transparent logo is active in browser tabs.
- [x] **SEO metadata loaded**: Inter & Space Grotesk Google Fonts, description tags, and local business JSON-LD schema are built-in.
- [x] **3D graphics ready**: WebGL canvas elements mount safely on client-side.
