# Zenith UI Changes Log

This document tracks all UI changes made to the Zenith Edutech platform.

---

## Theme Update (February 12, 2026)

### Color Scheme
Applied the new **black-yellow-white** theme across the entire application:

- **Primary Color**: `#000000` (Black)
- **Accent Color**: `#FFD600` (Yellow)
- **Light Color**: `#FFFFFF` (White)

### Updated Files

#### Configuration
- **tailwind.config.js**: Replaced indigo/teal/purple palette with black-yellow-white theme
- **src/index.css**: Updated body background to black, default text to white, and added yellow glow utilities

#### Components Modified
- **src/App.jsx**: Changed background to black, reorganized component structure
- **src/components/Hero.jsx**: Complete rewrite with IIT mentorship content and yellow CTA button
- **src/components/Programs.jsx**: Updated to use new ProgramCard component with educational programs

---

## Sections Added

### 1. Hero Section
- **Heading**: "Get an IITian Mentor for Your Child"
- **Subtext**: Founded in 2020, Zenith provides IIT/NIT mentorship for CBSE, NTSE, Olympiads, IIT-JEE & NEET Foundation
- **CTA**: "Book Free Demo" button with yellow background
- **Secondary CTA**: "Call Us Now" button with phone link

### 2. About Section
**Component**: `src/components/About.jsx`

Content includes:
- Company founding story (2020 during lockdown)
- Mission statement
- Team background (IIT/NIT educators)
- Statistics cards with yellow accents

### 3. Programs Section
**Component**: `src/components/Programs.jsx`  
**Card Component**: `src/components/ProgramCard.jsx`

Three program offerings:
1. **Online Group Classes** - Small batch (Max 8 students) focused on NCERT clarity & exam preparation
2. **1-on-1 Mentorship** - Personalized learning, flexible timings & doubt solving
3. **Performance Tracking** - Weekly tests, progress reports & structured improvement

Features:
- Reusable ProgramCard component
- Yellow border glow on hover
- Smooth animations and transitions

### 4. Faculties Section
**Component**: `src/components/Faculties.jsx`

Features:
- Featured mentor section for Shoaib (IIT Madras)
- Contact information: 9681341693, 7980978482
- Mentor grid with IIT/NIT badges
- Yellow accent tags for college affiliations

### 5. Results Section
**Component**: `src/components/Results.jsx`

Features:
- Student testimonial cards
- Yellow highlights for scores and achievements
- Statistics grid (95% success rate, 500+ students, 200+ top ranks, 4.9★ rating)
- Quote icons and star badges

### 6. Demo Booking Section
**Component**: `src/components/DemoForm.jsx`

Form fields:
- Student Name (text input)
- Phone Number (10-digit validation)
- Class (dropdown: 7-12)
- Subject Interest (Math, Science, Both, All Subjects)

Features:
- Yellow submit button with glow effect
- Success/error message handling with enhanced thank-you message
- Contact information display
- "LIMITED SEATS AVAILABLE" urgency message
- **Success Message**: "Thank you for booking your free demo class! 🎉 Our team will contact you within 24 hours to schedule your session with an expert mentor."

---

## Environment Configuration (February 12, 2026)

### `.env` File
```env
VITE_SUPABASE_URL=https://wznznyooyzntedgeijos.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-jwt-key>
```

### `.gitignore`
Created to protect credentials:
- `.env` and `.env.local` excluded from git
- `node_modules/`, `dist/`, `.DS_Store` also excluded

---

## Supabase Integration

### Database Configuration
**File**: `src/lib/supabaseClient.js`
- Updated to use `import.meta.env.VITE_SUPABASE_URL` and `import.meta.env.VITE_SUPABASE_ANON_KEY`
- Removed hardcoded credentials
- Uses correct **Anon Key** (JWT) instead of publishable key

### Demo Requests Table
**Table Name**: `demo_requests`

**Schema** (run in Supabase SQL Editor):
```sql
CREATE TABLE IF NOT EXISTS public.demo_requests (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    class INTEGER NOT NULL,
    subject TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.demo_requests
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated reads" ON public.demo_requests
    FOR SELECT TO authenticated USING (true);
```

**Status**: ⚠️ Table needs to be created in Supabase Dashboard → SQL Editor

### Form Submission
- Integrated in `DemoForm.jsx`
- Handles success/error states
- Displays enhanced thank-you message on success

---

## Design System

### Utility Classes Added
```css
.glass - Black background with yellow border accent
.glass-dark - Darker black background with stronger yellow border
.text-gradient - Yellow gradient text effect
.yellow-glow - Yellow shadow glow effect
.yellow-glow-hover - Yellow shadow glow on hover
```

### Component Patterns
- All sections use black background (`bg-black`)
- All text uses white color (`text-white` or `text-gray-300`)
- All accents use yellow (`text-accent`, `bg-accent`, `border-accent`)
- Hover effects include yellow glow (`yellow-glow-hover`)
- Cards have yellow borders on hover

---

## Future Updates

When making UI changes to this project:

1. **Maintain Theme Consistency**
   - Always use black backgrounds
   - Always use white/gray text
   - Always use yellow for accents and CTAs

2. **Follow Component Patterns**
   - Use the ProgramCard component for similar card layouts
   - Apply yellow-glow-hover for interactive elements
   - Maintain consistent spacing (py-20 lg:py-32 for sections)

3. **Update This Document**
   - Add new sections under "Sections Added"
   - Document any new components created
   - Note any theme modifications

---

## About Zenith Section Added (February 12, 2026)

### Component
**File**: `src/components/AboutZenith.jsx`

- Created reusable AboutZenith component
- Added below Hero section in `App.jsx`
- Background: `#111111` (alternate section)

### Content
- **Badge**: "SINCE 2020"
- **Heading**: "Who We Are" (yellow gradient)
- **Two paragraphs**: Founding story + team background
- **Image**: Professional academic-style online teaching image

### Highlight Cards (4x with yellow left border)
1. IIT / NIT Qualified Mentors
2. 4+ Years of Teaching Excellence
3. Personalised 1-on-1 Guidance
4. Proven Results & Parent Satisfaction

### Premium Quote Box
- Dark card with yellow border
- *"At Zenith, students don't just study — they grow, evolve, and gain confidence."*
- Center aligned

### Animations
- IntersectionObserver-based fade-in on scroll
- `translateY(1rem)` → `0` with 500ms ease
- Staggered delays on highlight cards
- Quote box has independent reveal trigger

### Mobile Optimization
- `px-6` padding, `max-w-6xl mx-auto`
- Stacks vertically (text first, image below)
- `py-20 lg:py-28` section spacing

---

## Contact Information

**Phone**: +91 6291813121  
**Mentor Direct**: 9681341693, 7980978482

---

*Last Updated: February 12, 2026 (About Zenith section added)*
