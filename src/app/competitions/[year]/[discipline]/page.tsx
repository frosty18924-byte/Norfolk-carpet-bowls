import { notFound } from 'next/navigation'
import React from 'react'
import { competitionReports, type CompetitionReport } from '@/data/competitionReports'

export default function CompetitionReport({ params }: { params: Promise<{ year: string, discipline: string }> }) {
  const resolvedParams = React.use(params)
  const { year, discipline } = resolvedParams
  const reportKey = `${year}-${discipline}`
  const report = competitionReports[reportKey]

  if (!report) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a 
              href="/competitions" 
              className="text-blue-200 hover:text-white inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Competitions
            </a>
          </div>
          <h1 className="text-4xl font-bold mb-2">{report.title}</h1>
          <div className="flex flex-wrap gap-4 text-blue-100">
            <span>📅 {report.date}</span>
            <span>📍 {report.location}</span>
            <span>👥 {report.participants}</span>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Competition Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Format</h3>
                  <p className="text-gray-600">{report.format}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Participants</h3>
                  <p className="text-gray-600">{report.participants}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{report.description}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Results</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">🥇</span>
                    <div>
                      <div className="font-medium text-gray-900">Winner</div>
                      <div className="text-blue-600 font-semibold text-lg">{report.winner}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">🥈</span>
                    <div>
                      <div className="font-medium text-gray-900">Runner-up</div>
                      <div className="text-gray-600 text-lg">{report.runnerUp}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Report */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Competition Report</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">{report.detailedReport}</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Competition Highlights</h3>
            <ul className="space-y-2 mb-8">
              {report.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competition Photos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Competition Photos</h2>
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Photo Gallery</h3>
              <p className="text-gray-600 mb-4">
                Competition photos will be available here after the event. Check back soon for images from {report.title}.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Winner Photos</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="aspect-square bg-gray-100 rounded mb-2 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Runner-up Photos</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Have photos from this competition? Email them to <a href="mailto:Norfolkcarpetbowls19@gmail.com" className="text-blue-600 hover:text-blue-700">Norfolkcarpetbowls19@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Full Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Full Results</h2>
          <div className="space-y-6">
            {report.fullResults.map((round, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{round.round}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Teams/Players</h4>
                    <ul className="space-y-1">
                      {round.teams.map((team, teamIndex) => (
                        <li key={teamIndex} className="text-gray-600">• {team}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Result</h4>
                    <p className="text-gray-600">{round.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Competitions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Competitions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Other {report.year} Events</h3>
              <p className="text-gray-600 mb-4">View other competitions from {report.year}</p>
              <a 
                href={`/competitions/${report.year}`}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View {report.year} Results
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{discipline.charAt(0).toUpperCase() + discipline.slice(1)} History</h3>
              <p className="text-gray-600 mb-4">View all {discipline} competitions</p>
              <a 
                href={`/winners`}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View Historical Results
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendar</h3>
              <p className="text-gray-600 mb-4">Check upcoming events</p>
              <a 
                href={`/calendar`}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View Calendar
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
