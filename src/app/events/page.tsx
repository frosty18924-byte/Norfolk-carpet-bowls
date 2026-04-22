export default function Events() {
  const regionalEvents = [
    {
      name: "Broadland",
      description: "Broadland region carpet bowls events and competitions featuring Coopman League and Winter Knights leagues",
      contact: "Contact Norfolkcarpetbowls19@gmail.com for details",
      recentWinners: {
        "2019 Coopman League": "Southrepps Social Club",
        "2019 Winter Knights": "Reepham Robins",
        "2018 Summer League": "Southrepps Social Club",
        "2018 Winter League": "Reepham Robins"
      }
    },
    {
      name: "West Norfolk", 
      description: "West Norfolk region carpet bowls events and competitions",
      contact: "Visit www.westnorfolkcarpetbowls.co.uk for details",
      website: "www.westnorfolkcarpetbowls.co.uk"
    },
    {
      name: "South Norfolk",
      description: "South Norfolk region carpet bowls events and competitions featuring County League, Waveney League, and KO Cup", 
      contact: "Contact Norfolkcarpetbowls19@gmail.com for details",
      recentWinners: {
        "2019 KO Cup": "Kenninghall",
        "2019 KO Cup Runners-Up": "Brockdish",
        "2019 Summer League": "Brockdish",
        "2018 KO Cup": "Kenninghall",
        "2018 KO Cup Runners-Up": "Brockdish",
        "2018 League Winners": "Kenninghall",
        "2017 Knockout Cup": "Old Buckenham",
        "2017 League Winners": "Roydon"
      }
    }
  ]

  const upcomingRegionalEvents = [
    {
      region: "Broadland",
      events: [
        { date: "2024-11-02", title: "Broadland Singles", location: "TBD" },
        { date: "2024-11-23", title: "Broadland Pairs", location: "TBD" },
        { date: "2024-12-14", title: "Broadland Triples", location: "TBD" }
      ]
    },
    {
      region: "West Norfolk",
      events: [
        { date: "2024-11-09", title: "West Norfolk Singles", location: "TBD" },
        { date: "2024-11-30", title: "West Norfolk Pairs", location: "TBD" },
        { date: "2024-12-21", title: "West Norfolk Triples", location: "TBD" }
      ]
    },
    {
      region: "South Norfolk",
      events: [
        { date: "2024-11-16", title: "South Norfolk Singles", location: "TBD" },
        { date: "2024-12-07", title: "South Norfolk Pairs", location: "TBD" },
        { date: "2024-12-28", title: "South Norfolk Triples", location: "TBD" }
      ]
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Norfolk Events & Competitions</h1>
          <p className="text-xl text-green-100">
            Regional events and competitions across Norfolk
          </p>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Norfolk Regions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {regionalEvents.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">{region.name}</h3>
                <p className="text-gray-700 mb-4">{region.description}</p>
                <p className="text-sm text-gray-600 mb-4">{region.contact}</p>
                {region.website && (
                  <a 
                    href={`http://${region.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline text-sm"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Regional Winners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Regional Winners</h2>
          <div className="space-y-8">
            {regionalEvents.filter(region => region.recentWinners).map((region, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold">{region.name} Recent Winners</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(region.recentWinners || {}).map(([competition, winner], winnerIndex) => (
                      <div key={winnerIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-semibold text-gray-900 text-sm">{competition}</h4>
                        <p className="text-blue-600 font-medium">{winner}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Event Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Participate</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Contact your regional representative for event details</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Register in advance for regional competitions</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Regional winners may qualify for county competitions</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competition Structure</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Club level competitions feed into regional events</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Regional winners compete at county level</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>County champions may advance to national competitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Get Involved in Regional Events</h3>
            <p className="text-gray-700 mb-6">
              For more information about regional events, to register for competitions, or to find out 
              how to get involved in your local area, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:Norfolkcarpetbowls19@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Email for Regional Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
