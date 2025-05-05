
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, ArrowLeft, CheckCircle2, AlertCircle, MoveRight, Calendar as CalendarIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';

// Dummy meeting data
const dummyMeetings = [
  {
    id: 1,
    title: "Project Review",
    type: "Team meeting",
    duration: "1 hour",
    currentTime: "Today, 2:00 PM - 3:00 PM",
    priority: "medium",
    flexibility: "flexible"
  },
  {
    id: 2,
    title: "Client Presentation",
    type: "External meeting",
    duration: "45 minutes",
    currentTime: "Tomorrow, 10:00 AM - 10:45 AM",
    priority: "high",
    flexibility: "strict"
  },
  {
    id: 3,
    title: "Team Brainstorming",
    type: "Internal workshop",
    duration: "2 hours",
    currentTime: "Friday, 1:00 PM - 3:00 PM",
    priority: "low",
    flexibility: "any"
  }
];

// Dummy rescheduling options
const dummyOptions = [
  {
    id: 1,
    type: "optimal",
    time: "Tomorrow, 10:00 AM - 11:00 AM",
    benefits: [
      "No conflicts with other meetings",
      "All team members available",
      "Matches your productive hours"
    ]
  },
  {
    id: 2,
    type: "alternative",
    time: "Tomorrow, 2:00 PM - 3:00 PM",
    benefits: [
      "No conflicts with other meetings",
      "1 team member may have limited availability"
    ]
  },
  {
    id: 3,
    type: "less-optimal",
    time: "Thursday, 9:00 AM - 10:00 AM",
    benefits: [
      "Close to another meeting (30 min buffer)",
      "Conference room availability not confirmed"
    ]
  }
];

const Reschedule = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [isRescheduled, setIsRescheduled] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(dummyMeetings[0]);
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("11:00");
  const [priority, setPriority] = useState("medium");
  const [flexibility, setFlexibility] = useState("flexible");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const handleReschedule = () => {
    setIsRescheduling(true);
    // Simulate the rescheduling process
    setTimeout(() => {
      setIsRescheduling(false);
      setIsRescheduled(true);
    }, 1500);
  };

  const handlePrioritySelect = (value: string) => {
    setPriority(value);
  };

  const handleFlexibilitySelect = (value: string) => {
    setFlexibility(value);
  };

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
    toast({
      title: "Time slot selected",
      description: "You can now update your calendar with this time slot.",
    });
  };

  const handleUpdateCalendar = () => {
    if (selectedOption) {
      toast({
        title: "Calendar updated",
        description: "Your meeting has been successfully rescheduled.",
        variant: "default",
      });
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      toast({
        title: "No time slot selected",
        description: "Please select a time slot before updating your calendar.",
        variant: "destructive",
      });
    }
  };

  const handleCustomTime = () => {
    setIsRescheduled(false);
    toast({
      title: "Custom time mode",
      description: "You can now set your preferred date and time.",
    });
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
                    <p className="font-medium text-gray-900">{selectedMeeting.title}</p>
                    <p className="text-gray-600">{selectedMeeting.type} ({selectedMeeting.duration})</p>
                    <p className="text-sm text-gray-500 mt-1">Currently: {selectedMeeting.currentTime}</p>
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
                    <Input 
                      type="time" 
                      value={startTime} 
                      onChange={(e) => setStartTime(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">End Time</label>
                    <Input 
                      type="time" 
                      value={endTime} 
                      onChange={(e) => setEndTime(e.target.value)} 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${priority === 'low' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handlePrioritySelect('low')}
                    >
                      Low
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${priority === 'medium' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handlePrioritySelect('medium')}
                    >
                      Medium
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${priority === 'high' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handlePrioritySelect('high')}
                    >
                      High
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Flexibility</label>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${flexibility === 'strict' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handleFlexibilitySelect('strict')}
                    >
                      Strict
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${flexibility === 'flexible' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handleFlexibilitySelect('flexible')}
                    >
                      Flexible
                    </Button>
                    <Button 
                      variant="outline" 
                      className={`flex-1 ${flexibility === 'any' ? 'bg-blue-50 border-blue-200' : ''}`}
                      onClick={() => handleFlexibilitySelect('any')}
                    >
                      Any time
                    </Button>
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
                  <CardDescription>Choose the best time for your {selectedMeeting.title}</CardDescription>
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
                          <p className="text-gray-600">{dummyOptions[0].time}</p>
                        </div>
                        <Button 
                          onClick={() => handleOptionSelect(dummyOptions[0].id)}
                          variant={selectedOption === dummyOptions[0].id ? "default" : "outline"}
                        >
                          {selectedOption === dummyOptions[0].id ? "Selected" : "Select"}
                        </Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {dummyOptions[0].benefits.map((benefit, index) => (
                          <p key={index}>{benefit}</p>
                        ))}
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
                          <p className="text-gray-600">{dummyOptions[1].time}</p>
                        </div>
                        <Button 
                          variant={selectedOption === dummyOptions[1].id ? "default" : "outline"}
                          onClick={() => handleOptionSelect(dummyOptions[1].id)}
                        >
                          {selectedOption === dummyOptions[1].id ? "Selected" : "Select"}
                        </Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {dummyOptions[1].benefits.map((benefit, index) => (
                          <p key={index}>{benefit}</p>
                        ))}
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
                          <p className="text-gray-600">{dummyOptions[2].time}</p>
                        </div>
                        <Button 
                          variant={selectedOption === dummyOptions[2].id ? "default" : "outline"}
                          onClick={() => handleOptionSelect(dummyOptions[2].id)}
                        >
                          {selectedOption === dummyOptions[2].id ? "Selected" : "Select"}
                        </Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {dummyOptions[2].benefits.map((benefit, index) => (
                          <p key={index}>{benefit}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleCustomTime}>
                    Custom Time
                  </Button>
                  <Button onClick={handleUpdateCalendar}>
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
