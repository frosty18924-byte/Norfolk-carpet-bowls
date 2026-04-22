'use client'

import { useState } from 'react'
import { latestUpdates, calendarEvents, quickWinnersAdd, teamContacts } from '@/data/content'

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('updates')
  const [message, setMessage] = useState('')

  // Form states
  const [newUpdate, setNewUpdate] = useState({ date: '', title: '', link: '', description: '' })
  const [newWinner, setNewWinner] = useState({ year: '', event: '', winner: '', runnerUp: '' })
  const [newEvent, setNewEvent] = useState({ date: '', title: '', location: '', type: 'County Competition', status: 'Upcoming' })
  const [newContact, setNewContact] = useState({ name: '', role: '', email: '' })

  const correctPassword = 'norfolk2024' // Change this to your preferred password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      setMessage('Incorrect password')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    showMessage('Copied to clipboard!')
  }

  const generateUpdateCode = () => {
    if (!newUpdate.date || !newUpdate.title || !newUpdate.link || !newUpdate.description) {
      showMessage('Please fill all fields')
      return
    }
    
    const code = `  {
    date: '${newUpdate.date}',
    title: '${newUpdate.title}',
    link: '${newUpdate.link}',
    description: '${newUpdate.description}'
  },`
    
    copyToClipboard(code)
    showMessage('Code copied! Add this to latestUpdates array in src/data/content.ts')
  }

  const generateWinnerCode = () => {
    if (!newWinner.year || !newWinner.event || !newWinner.winner) {
      showMessage('Please fill required fields')
      return
    }
    
    const code = `  { year: "${newWinner.year}", event: "${newWinner.event}", winner: "${newWinner.winner}"${newWinner.runnerUp ? `, runnerUp: "${newWinner.runnerUp}"` : ''} },`
    
    copyToClipboard(code)
    showMessage('Code copied! Add this to quickWinnersAdd array in src/data/content.ts')
  }

  const generateEventCode = () => {
    if (!newEvent.date || !newEvent.title || !newEvent.location) {
      showMessage('Please fill all fields')
      return
    }
    
    const code = `  {
    date: "${newEvent.date}",
    title: "${newEvent.title}",
    location: "${newEvent.location}",
    type: "${newEvent.type}",
    status: "${newEvent.status}"
  },`
    
    copyToClipboard(code)
    showMessage('Code copied! Add this to calendarEvents array in src/data/content.ts')
  }

  const generateContactCode = () => {
    if (!newContact.name || !newContact.role || !newContact.email) {
      showMessage('Please fill all fields')
      return
    }
    
    const code = `  {
    name: "${newContact.name}",
    role: "${newContact.role}",
    email: "${newContact.email}"
  },`
    
    copyToClipboard(code)
    showMessage('Code copied! Add this to teamContacts array in src/data/content.ts')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
              />
            </div>
            {message && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {message}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Norfolk Carpet Bowls Admin</h1>
          <p className="text-gray-600">Easy content management for your website</p>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
            {message}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {['updates', 'winners', 'events', 'contacts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Latest Updates Tab */}
          {activeTab === 'updates' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Latest Update</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="text"
                        value={newUpdate.date}
                        onChange={(e) => setNewUpdate({...newUpdate, date: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., 15th October"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={newUpdate.title}
                        onChange={(e) => setNewUpdate({...newUpdate, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Norfolk Pairs Results"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                      <select
                        value={newUpdate.link}
                        onChange={(e) => setNewUpdate({...newUpdate, link: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select page</option>
                        <option value="/">Home</option>
                        <option value="/competitions">Competitions</option>
                        <option value="/team">Team</option>
                        <option value="/calendar">Calendar</option>
                        <option value="/events">Events</option>
                        <option value="/winners">Winners</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={newUpdate.description}
                        onChange={(e) => setNewUpdate({...newUpdate, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={3}
                        placeholder="Brief description of the update"
                      />
                    </div>
                  </div>
                  <button
                    onClick={generateUpdateCode}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Generate Code
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Updates</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    {latestUpdates.map((update, index) => (
                      <div key={index} className="mb-3 pb-3 border-b border-gray-200 last:border-b-0">
                        <div className="font-medium text-gray-900">{update.title}</div>
                        <div className="text-sm text-gray-600">{update.date} - {update.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Competition Winners Tab */}
          {activeTab === 'winners' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Competition Winner</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <input
                        type="text"
                        value={newWinner.year}
                        onChange={(e) => setNewWinner({...newWinner, year: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., 2025"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event</label>
                      <input
                        type="text"
                        value={newWinner.event}
                        onChange={(e) => setNewWinner({...newWinner, event: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Norfolk Singles"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Winner</label>
                      <input
                        type="text"
                        value={newWinner.winner}
                        onChange={(e) => setNewWinner({...newWinner, winner: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., John Doe (Reepham)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Runner-up (optional)</label>
                      <input
                        type="text"
                        value={newWinner.runnerUp}
                        onChange={(e) => setNewWinner({...newWinner, runnerUp: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Jane Smith (Brockdish)"
                      />
                    </div>
                  </div>
                  <button
                    onClick={generateWinnerCode}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Generate Code
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Winners</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    {quickWinnersAdd.map((winner, index) => (
                      <div key={index} className="mb-3 pb-3 border-b border-gray-200 last:border-b-0">
                        <div className="font-medium text-gray-900">{winner.winner}</div>
                        <div className="text-sm text-gray-600">{winner.year} - {winner.event}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calendar Events Tab */}
          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Calendar Event</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Norfolk Pairs"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Wortwell"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="County Competition">County Competition</option>
                        <option value="Team Event">Team Event</option>
                        <option value="Regional Competition">Regional Competition</option>
                        <option value="National Competition">National Competition</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={newEvent.status}
                        onChange={(e) => setNewEvent({...newEvent, status: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="Upcoming">Upcoming</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={generateEventCode}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Generate Code
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Events</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    {calendarEvents.map((event, index) => (
                      <div key={index} className="mb-3 pb-3 border-b border-gray-200 last:border-b-0">
                        <div className="font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-600">{event.date} - {event.location} ({event.status})</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Team Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        value={newContact.name}
                        onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={newContact.role}
                        onChange={(e) => setNewContact({...newContact, role: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Team Contact"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={newContact.email}
                        onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., contact@email.com"
                      />
                    </div>
                  </div>
                  <button
                    onClick={generateContactCode}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Generate Code
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Contacts</h3>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    {teamContacts.map((contact, index) => (
                      <div key={index} className="mb-3 pb-3 border-b border-gray-200 last:border-b-0">
                        <div className="font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-600">{contact.role} - {contact.email}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Instructions Panel */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">How to Update Your Website:</h3>
            <ol className="list-decimal list-inside text-blue-700 space-y-1">
              <li>Fill in the form above with your new content</li>
              <li>Click "Generate Code" to copy the code to clipboard</li>
              <li>Open the file mentioned in the message</li>
              <li>Paste the code into the appropriate array</li>
              <li>Run: <code className="bg-blue-100 px-2 py-1 rounded">git add src/data/content.ts && git commit -m "Updated content" && git push origin main</code></li>
              <li>Your website updates automatically in 1-2 minutes!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
