'use client'

import { useState } from 'react'

export default function LiveCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()
  
  // Sample events - these would come from Google Calendar API
  const events = [
    { date: 21, title: 'Norfolk 4s', type: 'competition', month: 9 }, // September
    { date: 5, title: 'County Team Bowl', type: 'team', month: 10 }, // October
    { date: 12, title: 'Norfolk Singles', type: 'competition', month: 10 }, // October
    { date: 16, title: 'Norfolk Pairs', type: 'competition', month: 11 }, // November
    { date: 7, title: 'Eastern Counties Champs', type: 'regional', month: 12 } // December
  ]
  
  const getEventForDate = (day: number) => {
    return events.find(event => event.date === day && event.month === currentDate.getMonth())
  }
  
  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'competition': return 'bg-blue-500'
      case 'team': return 'bg-purple-500'
      case 'regional': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }
  
  const changeMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
  }
  
  const renderCalendarDays = () => {
    const days = []
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20 border border-gray-200"></div>)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const event = getEventForDate(day)
      const isToday = today.getDate() === day && 
                     today.getMonth() === currentDate.getMonth() && 
                     today.getFullYear() === currentDate.getFullYear()
      
      days.push(
        <div 
          key={day} 
          className={`h-20 border border-gray-200 p-2 relative ${
            isToday ? 'bg-blue-50' : 'bg-white'
          } hover:bg-gray-50 transition-colors`}
        >
          <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          {event && (
            <div className={`mt-1 px-1 py-0.5 rounded text-xs text-white ${getEventTypeColor(event.type)}`}>
              {event.title}
            </div>
          )}
        </div>
      )
    }
    
    return days
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-800 text-white p-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-blue-700 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button 
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-blue-700 rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 bg-gray-50">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-xs font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7">
        {renderCalendarDays()}
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Competition</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Team Event</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Regional</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 rounded mr-2"></div>
            <span className="text-xs text-gray-600">Today</span>
          </div>
        </div>
      </div>
    </div>
  )
}
