import React, { useState } from 'react';
import { Heart, Home, Calendar, MessageCircle, Bell, User, ArrowLeft, Settings, Plus, Check, X } from 'lucide-react';

const LDRCalendarApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showMeetupPopup, setShowMeetupPopup] = useState(false);

  // Sample data - August 2025 starts on Friday
  const amelieCalendar = [
    { date: 1, status: 'busy', day: 'Fri' },
    { date: 2, status: 'available', day: 'Sat' },
    { date: 3, status: 'busy', day: 'Sun' },
    { date: 4, status: 'busy', day: 'Mon' },
    { date: 5, status: 'busy', day: 'Tue' },
    { date: 6, status: 'busy', day: 'Wed' },
    { date: 7, status: 'busy', day: 'Thu' },
    { date: 8, status: 'busy', day: 'Fri' },
    { date: 9, status: 'available', day: 'Sat' },
    { date: 10, status: 'busy', day: 'Sun' },
    { date: 11, status: 'busy', day: 'Mon' },
    { date: 12, status: 'busy', day: 'Tue' },
    { date: 13, status: 'busy', day: 'Wed' },
    { date: 14, status: 'busy', day: 'Thu' },
    { date: 15, status: 'busy', day: 'Fri' },
    { date: 16, status: 'busy', day: 'Sat' },
    { date: 17, status: 'available', day: 'Sun' },
    { date: 18, status: 'busy', day: 'Mon' },
    { date: 19, status: 'busy', day: 'Tue' },
    { date: 20, status: 'busy', day: 'Wed' },
    { date: 21, status: 'busy', day: 'Thu' },
    { date: 22, status: 'busy', day: 'Fri' },
    { date: 23, status: 'available', day: 'Sat' },
    { date: 24, status: 'busy', day: 'Sun' },
    { date: 25, status: 'busy', day: 'Mon' },
    { date: 26, status: 'busy', day: 'Tue' },
    { date: 27, status: 'busy', day: 'Wed' },
    { date: 28, status: 'busy', day: 'Thu' },
    { date: 29, status: 'busy', day: 'Fri' },
    { date: 30, status: 'available', day: 'Sat' },
    { date: 31, status: 'busy', day: 'Sun' }
  ];

  const liamCalendar = [
    { date: 1, status: 'busy', day: 'Fri' },
    { date: 2, status: 'busy', day: 'Sat' },
    { date: 3, status: 'busy', day: 'Sun' },
    { date: 4, status: 'available', day: 'Mon' },
    { date: 5, status: 'busy', day: 'Tue' },
    { date: 6, status: 'available', day: 'Wed' },
    { date: 7, status: 'busy', day: 'Thu' },
    { date: 8, status: 'available', day: 'Fri' },
    { date: 9, status: 'busy', day: 'Sat' },
    { date: 10, status: 'busy', day: 'Sun' },
    { date: 11, status: 'available', day: 'Mon' },
    { date: 12, status: 'busy', day: 'Tue' },
    { date: 13, status: 'available', day: 'Wed' },
    { date: 14, status: 'busy', day: 'Thu' },
    { date: 15, status: 'available', day: 'Fri' },
    { date: 16, status: 'busy', day: 'Sat' },
    { date: 17, status: 'busy', day: 'Sun' },
    { date: 18, status: 'busy', day: 'Mon' },
    { date: 19, status: 'available', day: 'Tue' },
    { date: 20, status: 'busy', day: 'Wed' },
    { date: 21, status: 'available', day: 'Thu' },
    { date: 22, status: 'busy', day: 'Fri' },
    { date: 23, status: 'busy', day: 'Sat' },
    { date: 24, status: 'busy', day: 'Sun' },
    { date: 25, status: 'available', day: 'Mon' },
    { date: 26, status: 'busy', day: 'Tue' },
    { date: 27, status: 'available', day: 'Wed' },
    { date: 28, status: 'busy', day: 'Thu' },
    { date: 29, status: 'busy', day: 'Fri' },
    { date: 30, status: 'available', day: 'Sat' },
    { date: 31, status: 'busy', day: 'Sun' }
  ];

  const calendarData = {
    august: amelieCalendar
  };

  // Meetup Popup Component
  const MeetupPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Plan a Meetup</h2>
          <button onClick={() => setShowMeetupPopup(false)} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Date & Time</label>
            <input 
              type="text" 
              placeholder="Select date and time"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Activity</label>
            <input 
              type="text" 
              placeholder="What would you like to do?"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input 
              type="text" 
              placeholder="Where should you meet?"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => { setShowMeetupPopup(false); setCurrentPage('planMeetup'); }} 
            className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
          >
            <Check className="w-5 h-5 mr-2" />
            Send Invite
          </button>
          <button 
            onClick={() => setShowMeetupPopup(false)} 
            className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
          >
            <X className="w-5 h-5 mr-2" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const NavBar = () => (
    <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200 flex justify-around py-3">
      <button onClick={() => setCurrentPage('home')} className="flex flex-col items-center">
        <Home className={`w-6 h-6 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button onClick={() => setCurrentPage('schedule')} className="flex flex-col items-center">
        <Calendar className={`w-6 h-6 ${currentPage === 'schedule' ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Schedule</span>
      </button>
      <button onClick={() => setCurrentPage('messages')} className="flex flex-col items-center">
        <MessageCircle className={`w-6 h-6 ${currentPage === 'messages' ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Messages</span>
      </button>
      <button onClick={() => setCurrentPage('meetups')} className="flex flex-col items-center">
        <Heart className={`w-6 h-6 ${currentPage === 'meetups' ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Meetups</span>
      </button>
      <button onClick={() => setCurrentPage('statistics')} className="flex flex-col items-center">
        <Bell className={`w-6 h-6 ${currentPage === 'statistics' ? 'text-blue-600' : 'text-gray-400'}`} />
        <span className="text-xs mt-1">Statistics</span>
      </button>
    </div>
  );

  // Page 1: Profile Page
  const ProfilePage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-6">
          <ArrowLeft className="w-6 h-6" />
          <h1 className="text-xl font-semibold">Profile Page</h1>
          <Settings className="w-6 h-6" />
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center mb-3">
            <User className="w-12 h-12 text-pink-600" />
          </div>
          <h2 className="text-2xl font-bold">Amelie</h2>
          <p className="text-gray-600">Current Partner: Liam</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Partner Connection</h3>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-200 rounded-full mr-3"></div>
            <div>
              <p className="font-medium">Liam</p>
              <p className="text-sm text-gray-600">Connected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold mb-3">Reminders & Alerts</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-3 text-blue-600" />
              <div>
                <p className="font-medium">Update</p>
                <p className="text-sm text-gray-600">Night Settings</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="font-medium">Other Settings</p>
            <button className="mt-2 text-blue-600 text-sm">Logout</button>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 2: Home/Welcome Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-20">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <ArrowLeft className="w-6 h-6 text-gray-400" />
          <Settings className="w-6 h-6" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <h2 className="text-2xl text-pink-600">Amelie & Liam</h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 bg-pink-100 rounded-full flex items-center justify-center">
            <Heart className="w-24 h-24 text-pink-500" fill="currentColor" />
          </div>
        </div>

        <button 
          onClick={() => setCurrentPage('amelieTimatable')}
          className="w-full bg-white border-2 border-gray-300 py-4 rounded-lg flex items-center justify-center mb-4 shadow-sm"
        >
          <Calendar className="w-6 h-6 mr-3" />
          <span className="font-semibold">View Timetable</span>
        </button>

        <button 
          onClick={() => setCurrentPage('messages')}
          className="w-full bg-white border-2 border-gray-300 py-4 rounded-lg flex items-center justify-center shadow-sm"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          <span className="font-semibold">Messages</span>
        </button>
      </div>
      <NavBar />
    </div>
  );

  // Page 3: Statistics Page
  const StatisticsPage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center mb-6">
          <ArrowLeft onClick={() => setCurrentPage('home')} className="w-6 h-6 mr-4" />
          <h1 className="text-xl font-semibold">Statistics</h1>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600">Average Weekly Meetups</p>
          <p className="text-3xl font-bold text-blue-600">1</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600">Total Meetups</p>
          <p className="text-3xl font-bold text-green-600">5</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Most Common Activities</p>
          <div className="flex justify-around">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🍽️</span>
              </div>
              <p className="text-xs">Dinner</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🎬</span>
              </div>
              <p className="text-xs">Movies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold mb-3">Upcoming Suggestions</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-3">
          <p className="font-medium">August 30th</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <p className="font-medium">September 17th</p>
          <p className="text-sm text-gray-600 mt-1">New Meetup!</p>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 4: Amelie's Timetable
  const AmelieTimetablePage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ArrowLeft onClick={() => setCurrentPage('home')} className="w-6 h-6 mr-3" />
            <h1 className="text-lg font-semibold">Amelie's Timetable</h1>
          </div>
          <Settings className="w-6 h-6" />
        </div>

        <div className="flex gap-2 mb-4 justify-center">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Amelie</button>
          <button onClick={() => setCurrentPage('liamTimetable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Liam</button>
          <button onClick={() => setCurrentPage('combinedTimetable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Combined</button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">AUGUST 2025</h2>
        
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          <div className="text-center text-xs font-semibold py-2">M</div>
          <div className="text-center text-xs font-semibold py-2">Tu</div>
          <div className="text-center text-xs font-semibold py-2">W</div>
          <div className="text-center text-xs font-semibold py-2">Th</div>
          <div className="text-center text-xs font-semibold py-2">F</div>
          <div className="text-center text-xs font-semibold py-2">Sa</div>
          <div className="text-center text-xs font-semibold py-2">Su</div>
          
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          
          {calendarData.august.map((day) => (
            <div 
              key={day.date}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold
                ${day.status === 'available' ? 'bg-green-400 text-white' : 'bg-orange-400 text-white'}
              `}
            >
              {day.date}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Legend:</p>
          <div className="flex items-center justify-around">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-green-400 rounded mr-2"></span>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-orange-400 rounded mr-2"></span>
              <span className="text-sm">Busy</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <Heart className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" />
            <p className="font-semibold text-purple-900">Quick Tip</p>
          </div>
          <p className="text-sm text-purple-800">You have 4 available days this month on weekends. Liam can see your schedule to help plan meetups!</p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setShowMeetupPopup(true)} className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Suggest Meetup
          </button>
          <button onClick={() => setCurrentPage('editSchedule')} className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Edit Schedule
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 5: Liam's Timetable
  const LiamTimetablePage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ArrowLeft onClick={() => setCurrentPage('amelieTimatable')} className="w-6 h-6 mr-3" />
            <h1 className="text-lg font-semibold">Liam's Timetable</h1>
          </div>
          <Settings className="w-6 h-6" />
        </div>

        <div className="flex gap-2 mb-4 justify-center">
          <button onClick={() => setCurrentPage('amelieTimatable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Amelie</button>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Liam</button>
          <button onClick={() => setCurrentPage('combinedTimetable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Combined</button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">AUGUST 2025</h2>
        
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          <div className="text-center text-xs font-semibold py-2">M</div>
          <div className="text-center text-xs font-semibold py-2">Tu</div>
          <div className="text-center text-xs font-semibold py-2">W</div>
          <div className="text-center text-xs font-semibold py-2">Th</div>
          <div className="text-center text-xs font-semibold py-2">F</div>
          <div className="text-center text-xs font-semibold py-2">Sa</div>
          <div className="text-center text-xs font-semibold py-2">Su</div>
          
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          
          {liamCalendar.map((day) => (
            <div 
              key={day.date}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold
                ${day.status === 'available' ? 'bg-green-400 text-white' : 'bg-orange-400 text-white'}
              `}
            >
              {day.date}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Legend:</p>
          <div className="flex items-center justify-around">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-green-400 rounded mr-2"></span>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-orange-400 rounded mr-2"></span>
              <span className="text-sm">Busy</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
            <p className="font-semibold text-indigo-900">Scheduling Note</p>
          </div>
          <p className="text-sm text-indigo-800">Liam has 10 available days, mostly on weekdays. Check the combined view to find when you're both free!</p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setShowMeetupPopup(true)} className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Suggest Meetup
          </button>
          <button className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Edit Schedule
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 6: Combined Timetable
  const CombinedTimetablePage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <ArrowLeft onClick={() => setCurrentPage('amelieTimatable')} className="w-6 h-6 mr-3" />
            <h1 className="text-lg font-semibold">Combined Timetable</h1>
          </div>
          <Settings className="w-6 h-6" />
        </div>

        <div className="flex gap-2 mb-4 justify-center">
          <button onClick={() => setCurrentPage('amelieTimatable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Amelie</button>
          <button onClick={() => setCurrentPage('liamTimetable')} className="px-5 py-2 bg-gray-200 rounded-lg text-sm font-medium">Liam</button>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Combined</button>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">AUGUST 2025</h2>
        
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          <div className="text-center text-xs font-semibold py-2">M</div>
          <div className="text-center text-xs font-semibold py-2">Tu</div>
          <div className="text-center text-xs font-semibold py-2">W</div>
          <div className="text-center text-xs font-semibold py-2">Th</div>
          <div className="text-center text-xs font-semibold py-2">F</div>
          <div className="text-center text-xs font-semibold py-2">Sa</div>
          <div className="text-center text-xs font-semibold py-2">Su</div>
          
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          
          {amelieCalendar.map((amelieDay, idx) => {
            const liamDay = liamCalendar[idx];
            const bothAvailable = amelieDay.status === 'available' && liamDay.status === 'available';
            const oneAvailable = (amelieDay.status === 'available' && liamDay.status === 'busy') || 
                                 (amelieDay.status === 'busy' && liamDay.status === 'available');
            
            return (
              <div 
                key={amelieDay.date}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold
                  ${bothAvailable ? 'bg-green-500 text-white' : oneAvailable ? 'bg-orange-400 text-white' : 'bg-pink-500 text-white'}
                `}
              >
                {amelieDay.date}
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Legend:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-green-500 rounded mr-2"></span>
              <span className="text-sm">Both Available</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-orange-400 rounded mr-2"></span>
              <span className="text-sm">Only 1 Available</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-pink-500 rounded mr-2"></span>
              <span className="text-sm">Both Busy</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <Heart className="w-5 h-5 text-green-600 mr-2" fill="currentColor" />
            <p className="font-semibold text-green-900">Perfect Match!</p>
          </div>
          <p className="text-sm text-green-800">You both are free on August 30th! This is your only mutual free day this month - make it count!</p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setShowMeetupPopup(true)} className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Suggest Meetup
          </button>
          <button className="flex-1 bg-white border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Edit Schedule
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 7: Messages Page
  const MessagesPage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center mb-6">
          <ArrowLeft onClick={() => setCurrentPage('home')} className="w-6 h-6 mr-4" />
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>

        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Search"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <div onClick={() => setCurrentPage('chatLiam')} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-100">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Liam</p>
              <p className="text-sm text-gray-600">Last active 5h ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 right-6">
        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <Plus className="w-6 h-6 text-white" />
        </button>
      </div>
      <NavBar />
    </div>
  );

  // Page 8: Chat with Liam
  const ChatLiamPage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4 border-b">
        <div className="flex items-center">
          <ArrowLeft onClick={() => setCurrentPage('messages')} className="w-6 h-6 mr-4" />
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Liam</h1>
            <p className="text-sm text-gray-600">Last active 5h ago</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-start">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm">Hey! How was your day?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm">It was good! The kids were really energetic today.</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm">I bet! Want to watch a movie tonight?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white p-4 rounded-lg shadow-sm max-w-xs">
            <p className="text-sm">That sounds perfect!</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
          <p className="text-sm text-center">
            <span className="font-semibold">🎬 Message from Liam</span><br />
            Movie night!
          </p>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-sm mx-auto bg-white p-4 border-t">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Page 10: Planned Meetup Details
  const PlanMeetupPage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center mb-6">
          <ArrowLeft onClick={() => setCurrentPage('amelieTimatable')} className="w-6 h-6 mr-4" />
          <h1 className="text-xl font-semibold">Meetup Details</h1>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl">🍽️</span>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold mb-2">Dinner</h2>
          <p className="text-center text-gray-600">30th August 7:30 PM</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Date & Time</p>
            <p className="font-semibold">August 30th at 7:30 PM</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Activity</p>
            <p className="font-semibold">Dinner</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Location</p>
            <p className="font-semibold">Cafe Luna</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Status</p>
            <p className="font-semibold text-green-600">Pending Liam's response</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-green-500 text-white py-4 rounded-lg font-semibold">
            <Check className="w-5 h-5 inline mr-2" />
            Accept
          </button>
          <button className="flex-1 bg-red-500 text-white py-4 rounded-lg font-semibold">
            <X className="w-5 h-5 inline mr-2" />
            Cancel
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Additional page: Edit Schedule
  const EditSchedulePage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center mb-6">
          <ArrowLeft onClick={() => setCurrentPage('amelieTimatable')} className="w-6 h-6 mr-4" />
          <h1 className="text-xl font-semibold">Edit Schedule</h1>
        </div>

        <p className="text-gray-600 mb-4">Select dates and mark your availability</p>

        <div className="grid grid-cols-7 gap-2 mb-6">
          <div className="text-center text-xs font-semibold">M</div>
          <div className="text-center text-xs font-semibold">Tu</div>
          <div className="text-center text-xs font-semibold">W</div>
          <div className="text-center text-xs font-semibold">Th</div>
          <div className="text-center text-xs font-semibold">F</div>
          <div className="text-center text-xs font-semibold">Sa</div>
          <div className="text-center text-xs font-semibold">Su</div>
          
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          <div className="aspect-square"></div>
          
          {calendarData.august.slice(0, 14).map((day) => (
            <button 
              key={day.date}
              onClick={() => setSelectedDate(day.date)}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium border-2
                ${selectedDate === day.date ? 'border-blue-600' : 'border-transparent'}
                ${day.status === 'available' ? 'bg-green-400 text-white' : 'bg-orange-400 text-white'}
              `}
            >
              {day.date}
            </button>
          ))}
        </div>

        {selectedDate && (
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="font-semibold mb-3">August {selectedDate}</p>
            <div className="flex gap-3">
              <button className="flex-1 py-2 bg-green-500 text-white rounded-lg">Available</button>
              <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg">Busy</button>
            </div>
          </div>
        )}

        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold">
          Save Changes
        </button>
      </div>
      <NavBar />
    </div>
  );

  // Additional page: Upcoming Meetups List
  const MeetupsPage = () => (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <ArrowLeft onClick={() => setCurrentPage('home')} className="w-6 h-6 mr-4" />
            <h1 className="text-xl font-semibold">Upcoming Meetups</h1>
          </div>
          <button onClick={() => setShowMeetupPopup(true)} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="space-y-4">
          <div onClick={() => setCurrentPage('planMeetup')} className="bg-gray-50 border-2 border-gray-200 p-4 rounded-xl shadow-sm cursor-pointer hover:border-blue-300">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Dinner</h3>
                <p className="text-sm text-gray-600 mb-2">August 30th, 7:30 PM</p>
                <p className="text-sm text-gray-600">📍 Cafe Luna</p>
                <p className="text-sm text-green-600 mt-2">Status: Pending Liam's response</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-dashed border-gray-300 p-4 rounded-xl text-center">
            <p className="text-gray-500">No more upcoming meetups</p>
            <button onClick={() => setShowMeetupPopup(true)} className="mt-3 text-blue-600 font-semibold">
              + Plan a meetup
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold mb-3">Notification History</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <Bell className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium">Message from Liam</p>
              <p className="text-sm text-gray-600">Movie night!</p>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch(currentPage) {
      case 'profile':
        return <ProfilePage />;
      case 'home':
        return <HomePage />;
      case 'statistics':
        return <StatisticsPage />;
      case 'amelieTimatable':
        return <AmelieTimetablePage />;
      case 'liamTimetable':
        return <LiamTimetablePage />;
      case 'combinedTimetable':
        return <CombinedTimetablePage />;
      case 'messages':
        return <MessagesPage />;
      case 'chatLiam':
        return <ChatLiamPage />;
      case 'planMeetup':
        return <PlanMeetupPage />;
      case 'editSchedule':
        return <EditSchedulePage />;
      case 'meetups':
        return <MeetupsPage />;
      case 'schedule':
        return <AmelieTimetablePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white min-h-screen shadow-xl">
      {renderPage()}
      {showMeetupPopup && <MeetupPopup />}
    </div>
  );
};

export default LDRCalendarApp;