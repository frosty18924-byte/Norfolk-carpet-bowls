import ArchiveExpander from '@/components/ArchiveExpander'

export default function Winners() {
  // Recent years (displayed prominently)
const recentWinners = [
    {
      year: "2025",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt (Reepham)", runnerUp: "Charley (Brockdish)" },
        { event: "Norfolk Fours/Rinks", winner: "Brockdish (Charley, Trish, Gill, Geoff)", runnerUp: "Kenninghall" },
        { event: "Norfolk Triples", winner: "Wortwell", runnerUp: "Reepham Robins" }
      ]
    },
    {
      year: "2024",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt Frost (Reepham)", runnerUp: "Stephen Frost (Reepham)" },
        { event: "Norfolk Pairs", winner: "Reepham (Stephen and Matt)", runnerUp: "Kenninghall" },
        { event: "Norfolk Triples", winner: "Wortwell (David, Val, Mick)", runnerUp: "Reepham" },
        { event: "Norfolk Fours/Rinks", winner: "Reepham Robins 2", runnerUp: "Reepham Robins 1" },
        { event: "National Champions of Champions - Singles", winner: "Matt Frost (Norfolk)", runnerUp: "Various" }
      ]
    },
    {
      year: "2023",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt Frost (Reepham)", runnerUp: "Arthur (Syleham Wingfield)" },
        { event: "NCBA Pairs", winner: "Reepham Robins", runnerUp: "Wortwell" },
        { event: "NCBA Triples", winner: "Wortwell", runnerUp: "Syleham Wingfield" },
        { event: "Norfolk Fours/Rinks", winner: "Reepham Robins", runnerUp: "Pullham St Mary" },
        { event: "Eastern Counties Champions of Champions - Singles", winner: "Matt Frost (Norfolk)", runnerUp: "Various" },
        { event: "National Champions of Champions - Singles", winner: "Matt Frost (Norfolk)", runnerUp: "Various" }
      ]
    }
  ]

  // Historical archive (older years)
const historicalArchive = [
    {
      year: "2022",
      competitions: [
        { event: "NCBA Singles", winner: "Matt Frost (Reepham Robins 7)", runnerUp: "Ray (Wortwell 4)" },
        { event: "NCBA Fours/Rinks", winner: "Reepham Robins 1", runnerUp: "Wortwell 2" },
        { event: "Eastern County Champions of Champions - Singles", winner: "Matt Frost (Norfolk)", runnerUp: "Various" },
        { event: "National Champions of Champions - Singles", winner: "Matt Frost (Norfolk)", runnerUp: "Various" }
      ]
    },
    {
      year: "2021",
      competitions: [
        { event: "Norfolk County Triples", winner: "Sea Palling (Rachel, Mick, John)", runnerUp: "Reepham (Doris, Matt, Stephen)" },
        { event: "National Champions of Champions", winner: "Matt Frost (Singles)", runnerUp: "Various" }
      ]
    },
    {
      year: "2020",
      competitions: [
        { event: "Norfolk County Triples", winner: "Sea Palling (Rachel, Mick, John)", runnerUp: "Reepham (Doris, Matt, Stephen)" },
        { event: "National Champions of Champions", winner: "Matt Frost (Singles)", runnerUp: "Various" }
      ]
    },
    {
      year: "2019",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt Frost (Reepham Robins)", runnerUp: "Ray (Aubugh)" },
        { event: "Norfolk County Fours/Rinks", winner: "Brockdish", runnerUp: "Antingham" },
        { event: "Norfolk County Pairs", winner: "Les and Arthur (Syleham)", runnerUp: "Tony and Rachel" },
        { event: "Norfolk County Triples", winner: "Wortwell (Val, Mike, Steve)", runnerUp: "Reepham Robins (Doris, Matt, Stephen)" },
        { event: "Norfolk County League Play Offs", winner: "Kenninghall", runnerUp: "Reepham Robins" },
        { event: "Eastern Counties Champions of Champions - Triples", winner: "Doris, Matt, Stephen Frost (Norfolk)", runnerUp: "Various" },
        { event: "National Champions of Champions - Triples", winner: "Doris, Matt, Stephen Frost (Norfolk)", runnerUp: "Various" },
        { event: "Norfolk County Squad Pairs", winner: "Colin and Beryl (Cambridgeshire)", runnerUp: "Maureen and Barry (Cambridgeshire)" }
      ]
    },
    {
      year: "2018",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt Frost (Reepham Robins)", runnerUp: "Mick (Wortwell)" },
        { event: "Norfolk Fours/Rinks", winner: "Wortwell", runnerUp: "Alburgh/Southrepps" },
        { event: "Norfolk Pairs", winner: "Reepham Robins (Stephen, Matt)", runnerUp: "South Repps (Gillian, Colin)" },
        { event: "Norfolk Triples", winner: "Kenninghall", runnerUp: "Tacolneston" },
        { event: "Norfolk County League Finals", winner: "Kenninghall", runnerUp: "Reepham Robins" },
        { event: "Norfolk County Squad Pairs", winner: "Pam and Steve (Wortwell)", runnerUp: "Janet and Mick (Wortwell)" }
      ]
    },
    {
      year: "2017",
      competitions: [
        { event: "Norfolk Singles", winner: "Matt Frost (Reepham Robins)", runnerUp: "John Clements (Sea Palling)" },
        { event: "Norfolk Fours/Rinks", winner: "Kenninghall", runnerUp: "Wortwell" },
        { event: "Norfolk Pairs", winner: "Reepham (Stephen, Matt)", runnerUp: "South Repps (Mike, Colin)" },
        { event: "Norfolk Triples", winner: "Sea Palling", runnerUp: "Roydon 1" },
        { event: "County League Final", winner: "Kenninghall", runnerUp: "Reepham Robins" }
      ]
    },
    {
      year: "2016",
      competitions: [
        { event: "Norfolk Singles", winner: "John Clements (Sea Palling)", runnerUp: "Colin Yarham (Southrepps)" },
        { event: "Norfolk Fours/Rinks", winner: "Reepham Robins", runnerUp: "Wortwell" },
        { event: "Norfolk Pairs", winner: "Reepham Robins", runnerUp: "Brockdish" },
        { event: "Norfolk Triples", winner: "Val, Mike, Mick (Wortwell)", runnerUp: "Phyllis, Gerald, Tony (Kenninghall/Dilham)" },
        { event: "County League Finals", winner: "Kenninghall", runnerUp: "Reepham Robins" }
      ]
    },
    {
      year: "2015",
      competitions: [
        { event: "Norfolk Singles", winner: "TBD", runnerUp: "TBD" },
        { event: "Norfolk Fours/Rinks", winner: "TBD", runnerUp: "TBD" },
        { event: "Norfolk Pairs", winner: "Jill and Fred (Old Buckenham)", runnerUp: "Val and Mike (Wortwell)" },
        { event: "Norfolk Triples", winner: "Wortwell", runnerUp: "Tasburgh" },
        { event: "Eastern Counties Champions of Champions - Triples", winner: "Val, Mike, Mick (Wortwell)", runnerUp: "Various" }
      ]
    },
    {
      year: "2014",
      competitions: [
        { event: "Norfolk Fours/Rinks", winner: "Mixed Team (Old Buckenham/South Repps)", runnerUp: "Reepham Robins" },
        { event: "Eastern Counties Championship of Champions", winner: "Suffolk (Team)", runnerUp: "Various" }
      ]
    }
  ]

  const rollOfHonour = [
    { event: "Norfolk Singles", mostWins: "Matt Frost (Reepham)", wins: "6+ consecutive years (2019-2024)" },
    { event: "Norfolk Pairs", mostWins: "Reepham Robins", wins: "Multiple titles including 2023, 2024" },
    { event: "Norfolk Triples", mostWins: "Wortwell", wins: "Multiple titles including 2023, 2024" },
    { event: "Norfolk Fours/Rinks", mostWins: "Reepham Robins", wins: "Multiple titles including 2022, 2024" },
    { event: "County League", mostWins: "Kenninghall", wins: "2019 Champions" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Previous Winners</h1>
          <p className="text-xl text-blue-100">
            Hall of fame - Norfolk Carpet Bowls champions through the years
          </p>
        </div>
      </section>

      {/* Roll of Honour */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Roll of Honour</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rollOfHonour.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center border-2 border-yellow-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                <p className="text-lg text-yellow-700 font-semibold mb-1">{item.mostWins}</p>
                <p className="text-sm text-gray-600">{item.wins}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Champions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Champions</h2>
          <div className="space-y-8">
            {recentWinners.map((yearData) => (
              <div key={yearData.year} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold">{yearData.year} Season</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {yearData.competitions.map((competition, index) => (
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
                          {parseInt(yearData.year) >= 2015 && (
                            <a 
                              href={`/competitions/${yearData.year}/${competition.event.toLowerCase().includes('singles') ? 'singles' : competition.event.toLowerCase().includes('pairs') ? 'pairs' : competition.event.toLowerCase().includes('triples') ? 'triples' : competition.event.toLowerCase().includes('fours') || competition.event.toLowerCase().includes('rinks') ? 'fours' : 'singles'}`}
                              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm"
                            >
                              View Report
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Archive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Historical Archive</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive historical records dating back to 2014. Click on any competition to view detailed reports and results from past seasons.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalArchive.map((yearData) => (
              <ArchiveExpander 
                key={yearData.year}
                year={yearData.year}
                competitions={yearData.competitions}
              />
            ))}
          </div>
        </div>
      </section>

                                                
      {/* Missing Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Help Us Complete Our History</h3>
            <p className="text-gray-700 mb-6">
              We are working to complete our historical records. If you have any information about past winners 
              or historical results that could help us fill in the gaps, please get in touch.
            </p>
            <a 
              href="mailto:Norfolkcarpetbowls19@gmail.com"
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Contact Us with Information
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
