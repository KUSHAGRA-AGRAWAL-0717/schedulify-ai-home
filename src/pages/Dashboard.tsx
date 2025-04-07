
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ListTodo, Settings, Activity, Sparkles } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome back, User</h1>
          <Button asChild variant="outline">
            <Link to="/preferences"><Settings className="mr-2 h-4 w-4" /> Preferences</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-schedulify-blue" />
                Today's Schedule
              </CardTitle>
              <CardDescription>April 7, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg flex items-start">
                  <Clock className="h-5 w-5 text-schedulify-blue mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">8:00 - 9:30</p>
                    <p className="text-gray-600">Deep work: Project proposal</p>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg flex items-start">
                  <Clock className="h-5 w-5 text-schedulify-purple mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">10:00 - 11:00</p>
                    <p className="text-gray-600">Team meeting</p>
                  </div>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg flex items-start">
                  <Clock className="h-5 w-5 text-schedulify-indigo mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">12:00 - 1:00</p>
                    <p className="text-gray-600">Lunch break</p>
                  </div>
                </div>
              </div>
              <Button variant="link" asChild className="mt-3 px-0">
                <Link to="/timetable">View full schedule</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ListTodo className="mr-2 h-5 w-5 text-schedulify-purple" />
                Tasks
              </CardTitle>
              <CardDescription>Your priority items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-800">Complete presentation slides</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">High</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-800">Review project requirements</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Medium</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-800">Send follow-up emails</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Low</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">Add new task</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-schedulify-indigo" />
                Wellness
              </CardTitle>
              <CardDescription>Recommendations for you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg flex items-start">
                  <Sparkles className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Take a break</p>
                    <p className="text-gray-600">You've been working for 2 hours straight</p>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg flex items-start">
                  <Sparkles className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Hydration reminder</p>
                    <p className="text-gray-600">Don't forget to drink water</p>
                  </div>
                </div>
              </div>
              <Button variant="link" asChild className="mt-3 px-0">
                <Link to="/activities">View all suggestions</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Productivity</CardTitle>
              <CardDescription>Last 7 days performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Productivity graph will be displayed here</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Link to="/timetable">
                    <Calendar className="h-8 w-8 mb-2" />
                    <span>Generate Timetable</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Link to="/reschedule">
                    <Clock className="h-8 w-8 mb-2" />
                    <span>Reschedule</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Link to="/activities">
                    <Sparkles className="h-8 w-8 mb-2" />
                    <span>Activity Suggestions</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Link to="/admin">
                    <Settings className="h-8 w-8 mb-2" />
                    <span>Settings</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
