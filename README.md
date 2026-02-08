# Zarvo Studio Website

A clean, professional, content-first website for Zarvo Studio - Career & Life Direction guidance service.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font/google)
- **Language**: TypeScript

## Features

- 🎯 Content-first, institutional design
- 📱 Fully responsive (mobile-first)
- ♿ Accessibility-friendly
- 🎨 Calm, neutral color palette
- 📝 8 comprehensive pages
- 📋 Lead capture form with minimal friction

## Project Structure

```
/app
  ├── page.tsx                    # Home page
  ├── about/page.tsx             # About page
  ├── framework/page.tsx         # Three-Lens Framework
  ├── services/page.tsx          # Services overview
  ├── technology-mentorship/page.tsx
  ├── scholarships/page.tsx
  ├── how-it-works/page.tsx
  ├── contact/page.tsx
  ├── layout.tsx                 # Root layout with Inter font
  └── globals.css                # Global styles

/components
  ├── Header.tsx                 # Navigation header
  ├── Footer.tsx                 # Site footer
  ├── SectionContainer.tsx       # Reusable section wrapper
  └── LeadForm.tsx               # Lead capture form
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Design Principles

- **No hype language**: Calm, ethical, thoughtful tone
- **No guarantees**: No promises of jobs, placements, or outcomes
- **Minimal design**: Clean, institutional, professional
- **Accessibility**: High contrast, readable fonts, semantic HTML
- **Mobile-first**: Responsive design across all devices

## Pages Overview

1. **Home** - Hero, services overview, Three-Lens Framework intro, ethical commitments
2. **About** - Philosophy, values, what Zarvo refuses to do
3. **Framework** - Detailed explanation of Self, Reality, Direction
4. **Services** - One-to-one guidance, parent-student sessions, workshops
5. **Technology Mentorship** - CS/software career guidance, no training institute
6. **Scholarships** - Scholarship awareness and preparation, not an agent
7. **How It Works** - 5-step process from contact to mentorship
8. **Contact** - Lead form, email, WhatsApp contact information

## Lead Capture Form

The `LeadForm` component captures:
- Full name (required)
- Email (required)
- Phone/WhatsApp (optional)
- City/Country
- User type (student/parent/graduate)
- Areas of guidance needed (checkboxes)
- Open message field

Form is used on:
- Home page (CTA section)
- Contact page

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette. Current palette uses neutral grays for a calm, professional look.

### Content

All content is in the respective page files under `/app`. No CMS required - direct editing of TypeScript files.

### Contact Information

Update email and WhatsApp details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## Form Submission

The lead form currently logs to console. To connect to a backend:

1. Create an API route at `/app/api/submit-form/route.ts`
2. Update `LeadForm.tsx` to POST to this endpoint
3. Integrate with your preferred email service or CRM

## License

Private project for Zarvo Studio.

## Support

For questions or issues, contact the development team.
