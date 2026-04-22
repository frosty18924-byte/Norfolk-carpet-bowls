# Deployment Guide - Norfolk Carpet Bowls Website

## Making Your Website Live

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment - content management system added"
git push origin main
```

2. **Deploy to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Sign up/login with GitHub
- Click "New Project"
- Select your `norfolk-carpet-bowls` repository
- Click "Deploy"

That's it! Vercel will automatically detect Next.js and deploy your site.

### Option 2: Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Netlify:**
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `out` folder (if using static export) or connect GitHub

## Content Management - Easy Updates

### Adding Latest Updates (Homepage)

Edit `src/data/content.ts`:

```typescript
export const latestUpdates: LatestUpdate[] = [
  {
    date: '21st September',
    title: 'Norfolk 4s',
    link: '/competitions',
    description: 'Latest competition results available'
  },
  // Add new updates here
  {
    date: '15th October',
    title: 'New Tournament',
    link: '/competitions',
    description: 'Registration now open'
  }
]
```

### Adding New Winners

Edit `src/data/content.ts`:

```typescript
export const quickWinnersAdd: CompetitionWinner[] = [
  { year: "2025", event: "Norfolk Singles", winner: "John Doe", runnerUp: "Jane Smith" },
  // Add more winners here
]
```

### Adding Calendar Events

Edit `src/data/content.ts`:

```typescript
export const calendarEvents: Event[] = [
  {
    date: "2025-04-15",
    title: "Spring Tournament",
    location: "Wortwell",
    type: "County Competition",
    status: "Upcoming"
  },
  // Add more events here
]
```

### Updating Team Contacts

Edit `src/data/content.ts`:

```typescript
export const teamContacts: TeamContact[] = [
  {
    name: "New Contact",
    role: "Team Manager", 
    email: "new@email.com"
  },
  // Update existing contacts here
]
```

## Adding Full Competition Reports

For detailed competition reports, edit `src/data/competitionReports.ts`:

```typescript
export const competitionReports: Record<string, CompetitionReport> = {
  '2025-new-event': {
    year: '2025',
    discipline: 'singles',
    title: 'New Tournament 2025',
    date: 'April 2025',
    location: 'Wortwell',
    description: 'Tournament description...',
    winner: 'Winner Name',
    runnerUp: 'Runner Up Name',
    detailedReport: 'Full detailed report...',
    highlights: ['Highlight 1', 'Highlight 2'],
    fullResults: [
      {
        round: 'Final',
        teams: ['Player 1', 'Player 2'],
        result: 'Player 1 won'
      }
    ]
  }
}
```

## Quick Update Commands

### Using Helper Functions

You can also use the helper functions in `src/data/content.ts`:

```typescript
import { addLatestUpdate, addWinner, addCalendarEvent } from '@/data/content'

// Add latest update
addLatestUpdate('15th October', 'New Tournament', '/competitions', 'Registration open')

// Add winner
addWinner('2025', 'Norfolk Singles', 'John Doe', 'Jane Smith')

// Add calendar event
addCalendarEvent('2025-04-15', 'Spring Tournament', 'Wortwell', 'County Competition', 'Upcoming')
```

## Deployment Workflow

1. **Make content changes** in `src/data/content.ts`
2. **Test locally:** `npm run dev`
3. **Commit changes:**
```bash
git add .
git commit -m "Added latest tournament results"
git push origin main
```
4. **Automatic deployment** to Vercel/Netlify

## Custom Domain setup

### Vercel:
1. Go to your project dashboard
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:
1. Go to "Site settings" > "Domain management"
2. Add custom domain
3. Update DNS records

## Environment Variables (if needed)

Create `.env.local` file:
```
NEXT_PUBLIC_EMAIL=Norfolkcarpetbowls19@gmail.com
```

## Performance Optimization

Your site is already optimized with:
- Next.js automatic code splitting
- Tailwind CSS purging
- Responsive images
- Fast hosting on Vercel/Netlify

## Backup Your Content

Regularly backup your `src/data/` folder. It contains all your website content!

## Need Help?

For technical issues:
- Check Vercel/Netlify deployment logs
- Verify all file paths are correct
- Test locally before deploying

For content updates:
- All content is in `src/data/content.ts`
- Competition reports in `src/data/competitionReports.ts`
- Changes appear immediately after deployment
