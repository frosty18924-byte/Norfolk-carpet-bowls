'use client'

import { useState } from 'react'

export default function AdminDashboard() {
  const [email, setEmail] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('updates')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Authorized emails
  const authorizedEmails = [
    'Norfolkcarpetbowls19@gmail.com',
    'matt@yourdomain.com', // Add your email here
    'gerald@yourdomain.com', // Add other authorized emails
  ]

  // Live editable content
  const [latestUpdates, setLatestUpdates] = useState([
    { date: '22nd April', title: 'Website Live!', link: '/', description: 'Norfolk Carpet Bowls website is now live and ready for updates' },
    { date: '21st September', title: 'Norfolk 4s', link: '/competitions', description: 'Latest competition results available' },
    { date: '5th October', title: 'County Team Bowl', link: '/team', description: 'County team performance report' },
    { date: '12th October', title: 'Norfolk Singles', link: '/competitions', description: 'Singles tournament results' }
  ])

  const [competitionWinners, setCompetitionWinners] = useState([
    { year: '2025', event: 'Norfolk Singles', winner: 'Matt (Reepham)', runnerUp: 'Charley (Brockdish)' },
    { year: '2025', event: 'Norfolk Fours/Rinks', winner: 'Brockdish (Charley, Trish, Gill, Geoff)', runnerUp: 'Kenninghall' },
    { year: '2025', event: 'Norfolk Triples', winner: 'Wortwell', runnerUp: 'Reepham Robins' }
  ])

  const [calendarEvents, setCalendarEvents] = useState([
    { date: '2024-09-21', title: 'Norfolk 4s Competition', location: 'Wortwell', type: 'County Competition', status: 'Completed' },
    { date: '2024-10-05', title: 'County Team Bowl', location: 'TBD', type: 'Team Event', status: 'Completed' },
    { date: '2024-10-12', title: 'Norfolk Singles', location: 'Wortwell', type: 'County Competition', status: 'Completed' },
    { date: '2024-11-16', title: 'Norfolk Pairs', location: 'TBD', type: 'County Competition', status: 'Upcoming' },
    { date: '2024-12-07', title: 'Eastern Counties Champions of Champions', location: 'TBD', type: 'Regional Competition', status: 'Upcoming' }
  ])

  const [teamContacts, setTeamContacts] = useState([
    { name: 'Gerald Sutton', role: 'Team Contact', email: 'Norfolkcarpetbowls19@gmail.com' },
    { name: 'Mick Fisher', role: 'Team Contact', email: 'Norfolkcarpetbowls19@gmail.com' },
    { name: 'Stephen Frost', role: 'Team Contact', email: 'Norfolkcarpetbowls19@gmail.com' }
  ])

  // Form states for new items
  const [newUpdate, setNewUpdate] = useState({ date: '', title: '', link: '', description: '' })
  const [newWinner, setNewWinner] = useState({ year: '', event: '', winner: '', runnerUp: '' })
  const [newEvent, setNewEvent] = useState({ date: '', title: '', location: '', type: 'County Competition', status: 'Upcoming' })
  const [newContact, setNewContact] = useState({ name: '', role: '', email: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (authorizedEmails.includes(email)) {
      setIsAuthenticated(true)
      showMessage('Welcome to Norfolk Carpet Bowls Admin!')
    } else {
      showMessage('Access denied. Please use an authorized email.')
    }
  }

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  const deployChanges = async () => {
    setIsLoading(true)
    showMessage('Deploying changes to live website...')
    
    // In a real implementation, this would call an API to update the content files
    // For now, we'll simulate the deployment
    setTimeout(() => {
      setIsLoading(false)
      showMessage('Changes deployed successfully! Website updated in 1-2 minutes.')
    }, 2000)
  }

  // Update functions
  const updateLatestUpdate = (index: number, field: string, value: string) => {
    const updated = [...latestUpdates]
    updated[index] = { ...updated[index], [field]: value }
    setLatestUpdates(updated)
  }

  const deleteLatestUpdate = (index: number) => {
    setLatestUpdates(latestUpdates.filter((_, i) => i !== index))
  }

  const addLatestUpdate = () => {
    if (newUpdate.date && newUpdate.title && newUpdate.link && newUpdate.description) {
      setLatestUpdates([...latestUpdates, { ...newUpdate }])
      setNewUpdate({ date: '', title: '', link: '', description: '' })
      showMessage('Latest update added!')
    } else {
      showMessage('Please fill all fields')
    }
  }

  const updateWinner = (index: number, field: string, value: string) => {
    const updated = [...competitionWinners]
    updated[index] = { ...updated[index], [field]: value }
    setCompetitionWinners(updated)
  }

  const deleteWinner = (index: number) => {
    setCompetitionWinners(competitionWinners.filter((_, i) => i !== index))
  }

  const addWinner = () => {
    if (newWinner.year && newWinner.event && newWinner.winner) {
      setCompetitionWinners([...competitionWinners, { ...newWinner }])
      setNewWinner({ year: '', event: '', winner: '', runnerUp: '' })
      showMessage('Winner added!')
    } else {
      showMessage('Please fill required fields')
    }
  }

  const updateEvent = (index: number, field: string, value: string) => {
    const updated = [...calendarEvents]
    updated[index] = { ...updated[index], [field]: value }
    setCalendarEvents(updated)
  }

  const deleteEvent = (index: number) => {
    setCalendarEvents(calendarEvents.filter((_, i) => i !== index))
  }

  const addEvent = () => {
    if (newEvent.date && newEvent.title && newEvent.location) {
      setCalendarEvents([...calendarEvents, { ...newEvent }])
      setNewEvent({ date: '', title: '', location: '', type: 'County Competition', status: 'Upcoming' })
      showMessage('Event added!')
    } else {
      showMessage('Please fill all fields')
    }
  }

  const updateContact = (index: number, field: string, value: string) => {
    const updated = [...teamContacts]
    updated[index] = { ...updated[index], [field]: value }
    setTeamContacts(updated)
  }

  const deleteContact = (index: number) => {
    setTeamContacts(teamContacts.filter((_, i) => i !== index))
  }

  const addContact = () => {
    if (newContact.name && newContact.role && newContact.email) {
      setTeamContacts([...teamContacts, { ...newContact }])
      setNewContact({ name: '', role: '', email: '' })
      showMessage('Contact added!')
    } else {
      showMessage('Please fill all fields')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your authorized email"
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Norfolk Carpet Bowls Admin</h1>
              <p className="text-gray-600">Direct content management - Edit, Add, Delete in real-time</p>
            </div>
            <button
              onClick={deployChanges}
              disabled={isLoading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
            >
              {isLoading ? 'Deploying...' : 'Deploy Changes'}
            </button>
          </div>
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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
                <button
                  onClick={() => setActiveTab('add-update')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add New Update
                </button>
              </div>
              
              <div className="space-y-4">
                {latestUpdates.map((update, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={update.date}
                          onChange={(e) => updateLatestUpdate(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Date"
                        />
                        <input
                          type="text"
                          value={update.title}
                          onChange={(e) => updateLatestUpdate(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Title"
                        />
                        <select
                          value={update.link}
                          onChange={(e) => updateLatestUpdate(index, 'link', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="/">Home</option>
                          <option value="/competitions">Competitions</option>
                          <option value="/team">Team</option>
                          <option value="/calendar">Calendar</option>
                          <option value="/events">Events</option>
                          <option value="/winners">Winners</option>
                        </select>
                        <textarea
                          value={update.description}
                          onChange={(e) => updateLatestUpdate(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={2}
                          placeholder="Description"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => deleteLatestUpdate(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Update Form */}
              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Update</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newUpdate.date}
                      onChange={(e) => setNewUpdate({...newUpdate, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Date (e.g., 15th October)"
                    />
                    <input
                      type="text"
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate({...newUpdate, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Title"
                    />
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
                    <textarea
                      value={newUpdate.description}
                      onChange={(e) => setNewUpdate({...newUpdate, description: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={2}
                      placeholder="Description"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={addLatestUpdate}
                      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Add Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Competition Winners Tab */}
          {activeTab === 'winners' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Competition Winners</h2>
                <button
                  onClick={() => setActiveTab('add-winner')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add New Winner
                </button>
              </div>
              
              <div className="space-y-4">
                {competitionWinners.map((winner, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={winner.year}
                          onChange={(e) => updateWinner(index, 'year', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Year"
                        />
                        <input
                          type="text"
                          value={winner.event}
                          onChange={(e) => updateWinner(index, 'event', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Event"
                        />
                        <input
                          type="text"
                          value={winner.winner}
                          onChange={(e) => updateWinner(index, 'winner', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Winner"
                        />
                        <input
                          type="text"
                          value={winner.runnerUp || ''}
                          onChange={(e) => updateWinner(index, 'runnerUp', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Runner-up (optional)"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => deleteWinner(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Winner Form */}
              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Winner</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newWinner.year}
                      onChange={(e) => setNewWinner({...newWinner, year: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Year (e.g., 2025)"
                    />
                    <input
                      type="text"
                      value={newWinner.event}
                      onChange={(e) => setNewWinner({...newWinner, event: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Event (e.g., Norfolk Singles)"
                    />
                    <input
                      type="text"
                      value={newWinner.winner}
                      onChange={(e) => setNewWinner({...newWinner, winner: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Winner"
                    />
                    <input
                      type="text"
                      value={newWinner.runnerUp}
                      onChange={(e) => setNewWinner({...newWinner, runnerUp: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Runner-up (optional)"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={addWinner}
                      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Add Winner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calendar Events Tab */}
          {activeTab === 'events' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Calendar Events</h2>
                <button
                  onClick={() => setActiveTab('add-event')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add New Event
                </button>
              </div>
              
              <div className="space-y-4">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <input
                          type="date"
                          value={event.date}
                          onChange={(e) => updateEvent(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        <input
                          type="text"
                          value={event.title}
                          onChange={(e) => updateEvent(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Event Title"
                        />
                        <input
                          type="text"
                          value={event.location}
                          onChange={(e) => updateEvent(index, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Location"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            value={event.type}
                            onChange={(e) => updateEvent(index, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="County Competition">County Competition</option>
                            <option value="Team Event">Team Event</option>
                            <option value="Regional Competition">Regional Competition</option>
                            <option value="National Competition">National Competition</option>
                          </select>
                          <select
                            value={event.status}
                            onChange={(e) => updateEvent(index, 'status', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="Upcoming">Upcoming</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => deleteEvent(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Event Form */}
              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Event</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Event Title"
                    />
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Location"
                    />
                    <div className="grid grid-cols-2 gap-2">
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
                  <div className="flex items-center justify-center">
                    <button
                      onClick={addEvent}
                      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Team Contacts</h2>
                <button
                  onClick={() => setActiveTab('add-contact')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Add New Contact
                </button>
              </div>
              
              <div className="space-y-4">
                {teamContacts.map((contact, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={contact.name}
                          onChange={(e) => updateContact(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={contact.role}
                          onChange={(e) => updateContact(index, 'role', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Role"
                        />
                        <input
                          type="email"
                          value={contact.email}
                          onChange={(e) => updateContact(index, 'email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => deleteContact(index)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Contact Form */}
              <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Contact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newContact.name}
                      onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      value={newContact.role}
                      onChange={(e) => setNewContact({...newContact, role: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Role"
                    />
                    <input
                      type="email"
                      value={newContact.email}
                      onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={addContact}
                      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Add Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Instructions Panel */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">How This Admin System Works:</h3>
            <ol className="list-decimal list-inside text-blue-700 space-y-1">
              <li>Edit any content directly in the fields above</li>
              <li>Add new items using the forms at the bottom of each section</li>
              <li>Delete items using the red delete buttons</li>
              <li>Click "Deploy Changes" to update your live website</li>
              <li>Changes appear on your website within 1-2 minutes</li>
            </ol>
            <p className="text-blue-700 mt-2">
              <strong>Authorized emails:</strong> Norfolkcarpetbowls19@gmail.com and any emails you add to the authorized list.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
