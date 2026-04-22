'use client'

import { useState } from 'react'
import { getReportUrl } from '@/utils/reports'

interface ArchiveExpanderProps {
  year: string
  competitions: Array<{
    event: string
    winner: string
    runnerUp: string
  }>
}

export default function ArchiveExpander({ year, competitions }: ArchiveExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-blue-600 text-white p-4">
          <h3 className="text-xl font-bold">{year}</h3>
          <p className="text-blue-100 text-sm">{competitions.length} competitions</p>
        </div>
        <div className="p-4">
          <div className="space-y-2 mb-4">
            {competitions.slice(0, 3).map((competition, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium text-gray-900">{competition.event}:</span>
                <span className="text-gray-600 ml-1">{competition.winner}</span>
              </div>
            ))}
            {competitions.length > 3 && (
              <div className="text-sm text-gray-500">...and {competitions.length - 3} more</div>
            )}
          </div>
          <button 
            onClick={toggleExpanded}
            className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm py-2 border border-blue-200 rounded hover:bg-blue-50 transition-colors"
          >
            {isExpanded ? 'Hide Results' : 'View Full Results'}
          </button>
        </div>
      </div>

      {/* Expandable Year Details */}
      <div className={`${isExpanded ? 'block' : 'hidden'} mt-6`}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-700 text-white p-6">
            <h3 className="text-2xl font-bold">{year} Season - Full Results</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {competitions.map((competition, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{competition.event}</h4>
                    <p className="text-sm text-gray-600">Winner: {competition.winner}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Runner-up:</p>
                      <p className="text-sm text-blue-600 font-medium">{competition.runnerUp}</p>
                    </div>
                    {(() => {
                            const reportUrl = getReportUrl(competition.event, year)
                            return reportUrl ? (
                              <a 
                                href={reportUrl}
                                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
                              >
                                View Report
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            ) : (
                              <span className="text-gray-400 text-sm">Coming Soon</span>
                            )
                          })()}               </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
