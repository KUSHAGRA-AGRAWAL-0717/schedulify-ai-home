
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, ArrowLeft, CheckCircle2, AlertCircle, MoveRight, Calendar as CalendarIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

const Reschedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [isRescheduled, setIsRescheduled] = useState(false);
  
  const handleReschedule = () => {
    setIsRescheduling(true);
    // Simulate the rescheduling process
    setTimeout(() => {
      setIsRescheduling(false);
      setIsRescheduled(true);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <Button asChild variant="ghost" className="mr-4 p-2">
            <Link to="/dashboard">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Reschedule</h1>
            <p className="text-gray-500">Optimize your calendar when plans change</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Item to Reschedule</CardTitle>
                <CardDescription>What needs to be moved?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg flex items-start">
                  <Clock className="h-5 w-5 text-schedulify-blue mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Project Review</p>
                    <p className="text-gray-600">Team meeting (1 hour)</p>
                    <p className="text-sm text-gray-500 mt-1">Currently: Today, 2:00 PM - 3:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Start Time</label>
                    <Input type="time" defaultValue="10:00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Time</label>
                    <Input type="time" defaultValue="11:00" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">Low</Button>
                    <Button variant="outline" className="flex-1 bg-blue-50 border-blue-200">Medium</Button>
                    <Button variant="outline" className="flex-1">High</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Flexibility</label>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">Strict</Button>
                    <Button variant="outline" className="flex-1 bg-blue-50 border-blue-200">Flexible</Button>
                    <Button variant="outline" className="flex-1">Any time</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleReschedule}
                  disabled={isRescheduling || isRescheduled}
                >
                  {isRescheduling ? 'Finding optimal time...' : 'Find optimal time'}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {!isRescheduled ? (
              <Card className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium mb-2">Ready to Reschedule</h3>
                  <p className="text-gray-500 mb-4">
                    {isRescheduling ? 
                      'Finding the optimal time based on your preferences and existing schedule...' : 
                      'Configure your rescheduling preferences and click "Find optimal time"'}
                  </p>
                  {isRescheduling && (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-schedulify-blue"></div>
                    </div>
                  )}
                </div>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Rescheduling Options
                  </CardTitle>
                  <CardDescription>Choose the best time for your Project Review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Optimal Time Slot</p>
                          <p className="text-gray-600">Tomorrow, 10:00 AM - 11:00 AM</p>
                        </div>
                        <Button>Select</Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>No conflicts with other meetings</p>
                        <p>All team members available</p>
                        <p>Matches your productive hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-500">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Alternative Time Slot</p>
                          <p className="text-gray-600">Tomorrow, 2:00 PM - 3:00 PM</p>
                        </div>
                        <Button variant="outline">Select</Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>No conflicts with other meetings</p>
                        <p>1 team member may have limited availability</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Less Optimal Time Slot</p>
                          <p className="text-gray-600">Thursday, 9:00 AM - 10:00 AM</p>
                        </div>
                        <Button variant="outline">Select</Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        <p>Close to another meeting (30 min buffer)</p>
                        <p>Conference room availability not confirmed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    Custom Time
                  </Button>
                  <Button>
                    <MoveRight className="mr-2 h-4 w-4" /> Update Calendar
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reschedule;
