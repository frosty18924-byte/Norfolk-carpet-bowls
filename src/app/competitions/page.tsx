import Link from 'next/link'
import { getReportUrl } from '@/utils/reports'

export default function Competitions() {
  const competitions = [
    {
      title: "Norfolk Singles 2025",
      date: "Recent",
      location: "Wortwell",
      description: "This year's competition had 36 players enter, divided into 6 groups with the winners and runners up and 4 best 3rd places going into the knock out rounds.",
      results: {
        participants: "36 players",
        groups: "6 groups",
        format: "Group stages + knockout rounds",
        knockoutTeams: "4 Reepham, 3 Syleham, 2 Wortwell, 2 Pulham, 2 Brockdish, 1 Sea Palling, 1 Antingham, 1 Tacolneston"
      },
      winner: "Matt (Reepham)",
      runnerUp: "Charley (Brockdish)"
    },
    {
      title: "Norfolk Fours/Rinks 2025",
      date: "Recent",
      location: "Wortwell",
      description: "12 teams entered the competition, divided into two groups of six, with everyone playing each other. Winners and runners up of each group went through to the semi-finals.",
      results: {
        participants: "12 teams",
        groups: "2 groups of 6",
        format: "Group stages + knockout rounds"
      },
      winner: "Brockdish (Charley, Trish, Gill, Geoff)",
      runnerUp: "Kenninghall"
    },
    {
      title: "Norfolk Triples 2025",
      date: "Recent",
      location: "Wortwell",
      description: "15 teams entered the competition, divided into 3 groups of 5 with everyone playing each other. Having just the winners and 1 highest runner up going through into the semi final.",
      results: {
        participants: "15 teams",
        groups: "3 groups of 5",
        format: "Group stages + knockout rounds"
      },
      winner: "Wortwell",
      runnerUp: "Reepham Robins"
    }
  ]

  const pastCompetitions = [
    { year: "2024", event: "Norfolk Singles", winner: "Matt Frost (Reepham)" },
    { year: "2024", event: "Norfolk Pairs", winner: "Reepham (Stephen and Matt)" },
    { year: "2024", event: "Norfolk Triples", winner: "Wortwell (David, Val, Mick)" },
    { year: "2024", event: "Norfolk Fours/Rinks", winner: "Reepham Robins 2" },
    { year: "2023", event: "NCBA Singles", winner: "Matt Frost (Reepham)" },
    { year: "2023", event: "NCBA Pairs", winner: "Reepham Robins" },
    { year: "2023", event: "NCBA Triples", winner: "Wortwell" },
    { year: "2023", event: "Norfolk Fours/Rinks", winner: "Reepham Robins" },
    { year: "2022", event: "NCBA Singles", winner: "Matt Frost (Reepham Robins 7)" },
    { year: "2022", event: "NCBA Fours/Rinks", winner: "Reepham Robins 1" },
    { year: "2020", event: "Norfolk County Triples", winner: "Sea Palling (Rachel, Mick, John)" },
    { year: "2019", event: "Norfolk Singles", winner: "Matt Frost (Reepham Robins)" },
    { year: "2019", event: "Norfolk County Fours/Rinks", winner: "Brockdish" },
    { year: "2019", event: "County League Play Offs", winner: "Kenninghall" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Norfolk County Competitions</h1>
          <p className="text-xl text-blue-100">
            Latest results and information from Norfolk County competitions
          </p>
        </div>
      </section>

      {/* Recent Competitions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Competitions</h2>
          <div className="space-y-8">
            {competitions.map((competition, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{competition.title}</h3>
                  <div className="flex flex-wrap gap-4 text-blue-100 text-sm">
                    <span>� {competition.date}</span>
                    <span>� {competition.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{competition.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Participants:</span>
                        <span className="text-gray-600 ml-2">{competition.results.participants}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Format:</span>
                        <span className="text-gray-600 ml-2">{competition.results.format}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Final Results</h4>
                      {(() => {
                        const reportUrl = getReportUrl(competition.title, '')
                        return reportUrl ? (
                          <a 
                            href={reportUrl}
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
                          >
                            View Full Report
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm">Report Coming Soon</span>
                        )
                      })()}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🥇</span>
                          <div>
                            <div className="font-medium text-gray-900">Winner</div>
                            <div className="text-blue-600 font-bold">{competition.winner}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">🥈</span>
                          <div>
                            <div className="font-medium text-gray-900">Runner-up</div>
                            <div className="text-gray-600 font-semibold">{competition.runnerUp}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Competitions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Historical Results</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Competition
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Winner
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pastCompetitions.map((competition, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {competition.year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {competition.event}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                        {competition.winner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">About Our Competitions</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Competition Types</h3>
                <ul className="space-y-1">
                  <li>• Singles - Individual competition</li>
                  <li>• Pairs - Teams of two players</li>
                  <li>• Triples - Teams of three players</li>
                  <li>• Fours/Rinks - Teams of four players (same competition)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">How to Enter</h3>
                <p>
                  For more information about entering competitions or to register your interest, 
                  please contact us at{' '}
                  <a href="mailto:Norfolkcarpetbowls19@gmail.com" className="text-blue-600 hover:text-blue-700 underline">
                    Norfolkcarpetbowls19@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
