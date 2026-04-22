import { availableReports } from '@/data/competitionReports'

export function getReportUrl(event: string, year: string): string | null {
  // Extract discipline from event title
  let discipline = 'singles' // default
  
  if (event.toLowerCase().includes('singles')) {
    discipline = 'singles'
  } else if (event.toLowerCase().includes('pairs')) {
    discipline = 'pairs'
  } else if (event.toLowerCase().includes('triples')) {
    discipline = 'triples'
  } else if (event.toLowerCase().includes('fours/rinks') || event.toLowerCase().includes('fours') || event.toLowerCase().includes('rinks')) {
    discipline = 'fours'
  }
  
  // Extract year from event title if not provided
  if (!year) {
    const yearMatch = event.match(/\b(20\d{2})\b/)
    if (yearMatch) {
      year = yearMatch[1]
    }
  }
  
  const reportKey = `${year}-${discipline}`
  
  if (availableReports.includes(reportKey)) {
    return `/competitions/${year}/${discipline}`
  }
  
  return null
}

export function hasReport(event: string, year: string): boolean {
  return getReportUrl(event, year) !== null
}
