import LiveCalendar from '@/components/LiveCalendar'
import { calendarEvents } from '@/data/content'

export default function Calendar() {
  const events = calendarEvents

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case "County Competition":
        return "bg-blue-100 text-blue-800"
      case "Team Event":
        return "bg-purple-100 text-purple-800"
      case "Regional Competition":
        return "bg-orange-100 text-orange-800"
      case "National Competition":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Completed":
        return "bg-gray-100 text-gray-800"
      case "Upcoming":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      weekday: 'short',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const upcomingEvents = events.filter(event => event.status === "Upcoming")
  const completedEvents = events.filter(event => event.status === "Completed")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Event Calendar</h1>
          <p className="text-xl text-blue-100">
            Stay up to date with all Norfolk Carpet Bowls events
          </p>
        </div>
      </section>

      {/* Live Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Calendar</h2>
            <p className="text-gray-700 mb-6">
              Interactive calendar showing all Norfolk Carpet Bowls events. 
              Anything that is missing or needs to be entered please email{' '}
              <a 
                href="mailto:Norfolkcarpetbowls19@gmail.com" 
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                Norfolkcarpetbowls19@gmail.com
              </a>
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LiveCalendar />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Results</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {completedEvents.map((event, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(event.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {event.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Annual Competition Schedule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">🍂</div>
              <h3 className="font-semibold text-gray-900 mb-2">Autumn</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Norfolk Singles</li>
                <li>• Norfolk Fours</li>
                <li>• County Team Bowl</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">❄️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Winter</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Norfolk Pairs</li>
                <li>• Team Selection</li>
                <li>• Training Sessions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">🌸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Norfolk Triples</li>
                <li>• National Qualifiers</li>
                <li>• Friendly Matches</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl mb-4">☀️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Summer</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• National Championships</li>
                <li>• County League</li>
                <li>• Champions of Champions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
