# Content Updates Guide - Norfolk Carpet Bowls Website

## Quick Update Workflow (3 Steps)

1. **Edit content** in `src/data/content.ts`
2. **Commit and push** to GitHub
3. **Site updates automatically** on Vercel

---

## Example: Adding Latest Update

### Step 1: Edit Content
Open `src/data/content.ts` and find the `latestUpdates` array:

```typescript
export const latestUpdates: LatestUpdate[] = [
  {
    date: '21st September',
    title: 'Norfolk 4s',
    link: '/competitions',
    description: 'Latest competition results available'
  },
  {
    date: '5th October', 
    title: 'County Team Bowl',
    link: '/team',
    description: 'County team performance report'
  },
  // ADD NEW UPDATE HERE:
  {
    date: '15th October',
    title: 'New Tournament Announced',
    link: '/competitions',
    description: 'Registration now open for spring competition'
  }
]
```

### Step 2: Push to GitHub
```bash
git add src/data/content.ts
git commit -m "Added new tournament announcement"
git push origin main
```

### Step 3: Done!
Your website updates automatically in 1-2 minutes.

---

## Example: Adding New Competition Winner

### Step 1: Edit Winners
In `src/data/content.ts`, add to `quickWinnersAdd` array:

```typescript
export const quickWinnersAdd: CompetitionWinner[] = [
  { year: "2025", event: "Norfolk Singles", winner: "John Doe", runnerUp: "Jane Smith" },
  // ADD NEW WINNER:
  { year: "2025", event: "Norfolk Pairs", winner: "Team Reepham", runnerUp: "Team Brockdish" }
]
```

### Step 2: Push Changes
```bash
git add src/data/content.ts
git commit -m "Added Norfolk Pairs 2025 winner"
git push origin main
```

---

## Example: Adding Calendar Event

### Step 1: Edit Calendar Events
In `src/data/content.ts`, add to `calendarEvents` array:

```typescript
export const calendarEvents: Event[] = [
  // ... existing events ...
  // ADD NEW EVENT:
  {
    date: "2025-04-15",
    title: "Spring Championship",
    location: "Wortwell",
    type: "County Competition",
    status: "Upcoming"
  }
]
```

### Step 2: Push Changes
```bash
git add src/data/content.ts
git commit -m "Added Spring Championship to calendar"
git push origin main
```

---

## Example: Updating Team Contact

### Step 1: Edit Team Contacts
In `src/data/content.ts`, update `teamContacts` array:

```typescript
export const teamContacts: TeamContact[] = [
  {
    name: "Gerald Sutton",
    role: "Team Contact",
    email: "Norfolkcarpetbowls19@gmail.com"
  },
  // UPDATE OR ADD NEW CONTACT:
  {
    name: "New Manager",
    role: "Team Manager",
    email: "new.manager@email.com"
  }
]
```

### Step 2: Push Changes
```bash
git add src/data/content.ts
git commit -m "Updated team contact information"
git push origin main
```

---

## Adding Full Competition Reports

For detailed competition reports (like the ones you already have), edit `src/data/competitionReports.ts`:

```typescript
export const competitionReports: Record<string, CompetitionReport> = {
  // ... existing reports ...
  // ADD NEW DETAILED REPORT:
  '2025-pairs': {
    year: '2025',
    discipline: 'pairs',
    title: 'Norfolk Pairs 2025',
    date: 'October 2025',
    location: 'Wortwell',
    description: 'Exciting pairs competition with 24 teams',
    participants: '24 teams',
    format: 'Group stages + knockout rounds',
    winner: 'Team Reepham',
    runnerUp: 'Team Brockdish',
    detailedReport: 'Full detailed report of the competition...',
    highlights: ['Highlight 1', 'Highlight 2'],
    fullResults: [
      {
        round: 'Final',
        teams: ['Team Reepham', 'Team Brockdish'],
        result: 'Team Reepham won 9-5'
      }
    ]
  }
}
```

---

## Quick Reference Commands

### Always use this pattern:
```bash
# Add the file you changed
git add src/data/content.ts

# Commit with a clear message
git commit -m "Descriptive message about what you changed"

# Push to GitHub
git push origin main
```

### Common commit messages:
- `"Added latest tournament results"`
- `"Updated team contact information"`
- `"Added new calendar event"`
- `"Added Norfolk Singles 2025 winner"`
- `"Updated homepage latest updates"`

---

## Testing Your Changes

Before pushing, you can test locally:

```bash
# Start development server
npm run dev

# Open http://localhost:3000 to see your changes
```

---

## What Updates Where?

| What you want to update | Which file to edit | Which array/section |
|------------------------|-------------------|-------------------|
| Homepage latest updates | `src/data/content.ts` | `latestUpdates` |
| Competition winners | `src/data/content.ts` | `quickWinnersAdd` |
| Calendar events | `src/data/content.ts` | `calendarEvents` |
| Team contacts | `src/data/content.ts` | `teamContacts` |
| Full detailed reports | `src/data/competitionReports.ts` | `competitionReports` |

---

## Pro Tips

1. **Be specific in commit messages** - helps track what changed
2. **Test locally first** - run `npm run dev` to preview changes
3. **One change at a time** - easier to track and fix if needed
4. **Keep backup** - GitHub automatically saves all versions

---

## Emergency Rollback

If something goes wrong:

```bash
# See previous commits
git log --oneline -5

# Revert to previous version
git revert <commit-hash>

# Push the fix
git push origin main
```

---

## Need Help?

- **Content structure questions:** Look at existing examples in the files
- **Technical issues:** Check Vercel deployment logs
- **Design changes:** May require editing the page components directly

**Remember: Your site updates automatically within 1-2 minutes after pushing to GitHub!**
