# Norfolk Carpet Bowls Association Website

A modern, responsive website for the Norfolk Carpet Bowls Association built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Modern Design**: Clean, professional interface with green color scheme
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🗓️ **Event Calendar**: Up-to-date competition and event information
- 🏆 **Competition Results**: Detailed results and historical data
- 👥 **Team Information**: County team details and contact information
- 🔍 **SEO Optimized**: Proper meta tags and structured data

## Pages

- **Home**: Welcome message, latest updates, and quick navigation
- **Competitions**: County competition results and information
- **Events**: Regional events and competitions across Norfolk
- **Team**: Norfolk County team information and contacts
- **Calendar**: Event calendar with upcoming and past events
- **Previous Winners**: Historical results and roll of honour

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd norfolk-carpet-bowls
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Automatic Deployment

1. Push your code to a GitHub repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Next.js framework and deploy

### Manual Deployment

1. Install the Vercel CLI:
```bash
npm i -g vercel
```

2. Run the deployment command:
```bash
vercel
```

3. Follow the prompts to deploy your site

## Project Structure

```
norfolk-carpet-bowls/
├── src/
│   ├── app/
│   │   ├── competitions/
│   │   ├── events/
│   │   ├── team/
│   │   ├── calendar/
│   │   ├── winners/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── globals.css
├── public/
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Content Updates

To update the website content:

1. **Latest Updates**: Edit the `latestUpdates` array in `src/app/page.tsx`
2. **Competition Results**: Update data in `src/app/competitions/page.tsx`
3. **Events**: Modify events in `src/app/calendar/page.tsx`
4. **Team Information**: Update contacts in `src/app/team/page.tsx`
5. **Historical Data**: Add winners to `src/app/winners/page.tsx`

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `src/components/Navigation.tsx`

## Support

For any issues or updates to the website content, please contact:
- Email: Norfolkcarpetbowls19@gmail.com
