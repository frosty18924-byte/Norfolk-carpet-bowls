import Link from 'next/link'
import { latestUpdates } from '@/data/content'

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Norfolk Carpet Bowls Association
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Welcome to the official home of Norfolk Carpet Bowls
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/competitions"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Competitions
            </Link>
            <Link
              href="/team"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
            >
              Join the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to Norfolk Carpet Bowls
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                This is where you can find all of the information on what is happening within Norfolk and the Norfolk County team.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This is updated semi-regularly so if something has not been inputted please give a little time.
              </p>
              <p className="text-gray-600">
                Please see a live calendar for all of the Norfolk dates for the coming year. Anything that is missing or needs to be entered please email{' '}
                <a 
                  href="mailto:Norfolkcarpetbowls19@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 underline font-medium"
                >
                  Norfolkcarpetbowls19@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">How to Play</h3>
              <p className="text-gray-700 mb-4">
                This video is a quick demo of how to play the sport and will give you some insight into what the aim of the game is and some of the rules.
              </p>
              <p className="text-gray-700">
                A full list of all the rules can be found{' '}
                <a 
                  href="http://www.englishcarpetbowls.com/rules.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline font-medium"
                >
                  Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Updates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {update.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {update.description}
                </p>
                <Link
                  href={update.link}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  View Report
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Get Involved
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/competitions"
              className="bg-blue-700 p-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-blue-100">View upcoming and past competitions</p>
            </Link>
            <Link
              href="/team"
              className="bg-blue-700 p-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">County Team</h3>
              <p className="text-blue-100">Learn about the Norfolk team</p>
            </Link>
            <Link
              href="/calendar"
              className="bg-blue-700 p-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Calendar</h3>
              <p className="text-blue-100">See all upcoming events</p>
            </Link>
            <Link
              href="/winners"
              className="bg-blue-700 p-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Previous Winners</h3>
              <p className="text-blue-100">View past champions</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
