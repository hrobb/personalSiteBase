# Personal Website Template

This is a [Next.js](https://nextjs.org/) project that we've created to serve as a template for a personal website. Though it is designed primarily with software developers in mind, it could be reconfigured to work for other professions quite easily. The following instructions will walk you through, step-by-step, how you can adopt, build, and personalize this template for your own use.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
  - [Basic Configuration](#basic-configuration)
  - [Navigation](#navigation)
  - [Content Pages](#content-pages)
- [Learn More](#learn-more)
- [Deployment](#deployment)

## Features

- Responsive design
- Customizable navigation
- Pre-built sections for About, Experience, Projects, and Skills
- Easy-to-update content structure
- Built with Next.js for optimal performance

## Getting Started

1. Fork this repository
2. Set up an upstream remote for future updates:
   ```bash
   git remote add upstream [original-repo-url]
   git fetch upstream
   git merge upstream/main
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### Basic Configuration

1. **Global Styles/Info**
   - Feel free to make any design/color/style changes you'd like as you go along.
		- Global style changes can be done in `app/globals.css`.
	- Change `favicon.ico` to your desired favicon.
	- Update `app/layout.tsx` with any desired font changes, as well as updating with the URL you will be hosted at.
	- Fill out `data.json` with information relevant to you.

### Navigation

1. **Menu Structure**
   - Modify `app/ui/navigation/navlinks.tsx` to update navigation items
   - Customize social media links in:
     - `app/ui/navigation/header.tsx`
     - `app/ui/navigation/footer.tsx`
   - Update site logo in `app/ui/navigation/header.tsx`

### Content Pages

1. **About Me**
   - Replace header information with your own information
	- Add your own image if you'd like (Suggested location: `public/images/aboutme/profile.png`)

2. **Experience**
   - Either upload your personal resume to `data/resume.pdf`, or feel free to remove this section if you don't want this hosted on your instance

3. **Projects**
   - Suggested location for images: `public/images/experience`

4. **Skills**
   - Feel free to use your own libraries or add more from great libraries like react-icons for the skills

5. **Home**
	- Change metadata to match site name

## Learn More

If you're interested in learning more about Next.js or want to sift through their docs if questions come up, you can look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

Given the scope of the project I'd strongly suggest hosting on something like [Netlify](https://netlify.com) or [Vercel](https://vercel.com/). Both have incredible integration for Next and it should be simple to stand up a project on either.

If you'd like to self-host, do a custom solution, or use another third-party, feel free to look at the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more info.