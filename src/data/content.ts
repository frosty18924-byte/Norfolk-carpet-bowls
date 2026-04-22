// Content Management System
// This file contains all the content that can be easily updated

export interface LatestUpdate {
  date: string
  title: string
  link: string
  description: string
}

export interface CompetitionWinner {
  year: string
  event: string
  winner: string
  runnerUp?: string
}

export interface TeamContact {
  name: string
  role: string
  email: string
}

export interface Event {
  date: string
  title: string
  location: string
  type: string
  status: string
}

// LATEST UPDATES - Edit these to update homepage
export const latestUpdates: LatestUpdate[] = [
  {
    date: '22nd April',
    title: 'Website Live!',
    link: '/',
    description: 'Norfolk Carpet Bowls website is now live and ready for updates'
  },
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
  {
    date: '12th October',
    title: 'Norfolk Singles', 
    link: '/competitions',
    description: 'Singles tournament results'
  }
]

// TEAM CONTACTS - Edit these to update team page
export const teamContacts: TeamContact[] = [
  {
    name: "Gerald Sutton",
    role: "Team Contact",
    email: "Norfolkcarpetbowls19@gmail.com"
  },
  {
    name: "Mick Fisher", 
    role: "Team Contact",
    email: "Norfolkcarpetbowls19@gmail.com"
  },
  {
    name: "Stephen Frost",
    role: "Team Contact", 
    email: "Norfolkcarpetbowls19@gmail.com"
  }
]

// CALENDAR EVENTS - Edit these to update calendar
export const calendarEvents: Event[] = [
  {
    date: "2024-09-21",
    title: "Norfolk 4s Competition",
    location: "Wortwell",
    type: "County Competition",
    status: "Completed"
  },
  {
    date: "2024-10-05", 
    title: "County Team Bowl",
    location: "TBD",
    type: "Team Event",
    status: "Completed"
  },
  {
    date: "2024-10-12",
    title: "Norfolk Singles",
    location: "Wortwell", 
    type: "County Competition",
    status: "Completed"
  },
  {
    date: "2024-11-16",
    title: "Norfolk Pairs",
    location: "TBD",
    type: "County Competition", 
    status: "Upcoming"
  },
  {
    date: "2024-12-07",
    title: "Eastern Counties Champions of Champions",
    location: "TBD",
    type: "Regional Competition",
    status: "Upcoming"
  },
  {
    date: "2025-01-18",
    title: "Norfolk Triples",
    location: "TBD",
    type: "County Competition",
    status: "Upcoming"
  },
  {
    date: "2025-02-08",
    title: "County Team Selection",
    location: "TBD",
    type: "Team Event",
    status: "Upcoming"
  },
  {
    date: "2025-03-15",
    title: "National Championships Qualifier",
    location: "TBD",
    type: "National Competition",
    status: "Upcoming"
  }
]

// QUICK WINNERS ADD - Add new competition winners here
export const quickWinnersAdd: CompetitionWinner[] = [
  // Add new winners in format:
  // { year: "2025", event: "Norfolk Singles", winner: "John Doe", runnerUp: "Jane Smith" }
]

// Helper function to add new winner easily
export function addWinner(year: string, event: string, winner: string, runnerUp?: string) {
  const newWinner: CompetitionWinner = { year, event, winner, runnerUp }
  quickWinnersAdd.push(newWinner)
  console.log(`Added winner: ${winner} won ${event} ${year}`)
}

// Helper function to add latest update easily  
export function addLatestUpdate(date: string, title: string, link: string, description: string) {
  const newUpdate: LatestUpdate = { date, title, link, description }
  latestUpdates.unshift(newUpdate) // Add to beginning
  console.log(`Added latest update: ${title}`)
}

// Helper function to add calendar event easily
export function addCalendarEvent(date: string, title: string, location: string, type: string, status: string) {
  const newEvent: Event = { date, title, location, type, status }
  calendarEvents.push(newEvent)
  console.log(`Added calendar event: ${title} on ${date}`)
}
