
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Sparkles, ArrowLeft, Check, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TimetableGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate the generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
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
            <h1 className="text-3xl font-bold">Timetable Generator</h1>
            <p className="text-gray-500">Create your optimized schedule</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Parameters</CardTitle>
                <CardDescription>Configure your timetable preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Period</label>
                  <Select defaultValue="week">
                    <SelectTrigger>
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Daily</SelectItem>
                      <SelectItem value="week">Weekly</SelectItem>
                      <SelectItem value="month">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Focus Level</label>
                  <Select defaultValue="balanced">
                    <SelectTrigger>
                      <SelectValue placeholder="Select focus level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High intensity</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="relaxed">Relaxed pace</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Break Frequency</label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select break frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Less frequent</SelectItem>
                      <SelectItem value="medium">Regular</SelectItem>
                      <SelectItem value="high">More frequent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority Tasks</label>
                  <Select defaultValue="auto">
                    <SelectTrigger>
                      <SelectValue placeholder="Select task priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">AI determined</SelectItem>
                      <SelectItem value="manual">My selection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>Generating <Sparkles className="ml-2 h-4 w-4 animate-pulse" /></>
                  ) : (
                    <>Generate Timetable <Sparkles className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {!isGenerated ? (
              <Card className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium mb-2">No Timetable Generated</h3>
                  <p className="text-gray-500 mb-4">Configure your parameters and generate a timetable to see results here</p>
                </div>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Your Optimized Timetable</CardTitle>
                  <CardDescription>Week of April 7-13, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="day">
                    <TabsList className="mb-4">
                      <TabsTrigger value="day">Day</TabsTrigger>
                      <TabsTrigger value="week">Week</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="day" className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg flex items-start">
                        <Clock className="h-5 w-5 text-schedulify-blue mt-0.5 mr-3" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <p className="font-medium text-gray-900">8:00 - 9:30</p>
                            <div className="flex space-x-1">
                              <button className="text-green-600 hover:bg-green-100 p-1 rounded">
                                <Check className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600">Deep work: Project proposal</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-purple-50 rounded-lg flex items-start">
                        <Clock className="h-5 w-5 text-schedulify-purple mt-0.5 mr-3" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <p className="font-medium text-gray-900">9:30 - 9:45</p>
                            <div className="flex space-x-1">
                              <button className="text-green-600 hover:bg-green-100 p-1 rounded">
                                <Check className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600">Break</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded-lg flex items-start">
                        <Clock className="h-5 w-5 text-schedulify-blue mt-0.5 mr-3" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <p className="font-medium text-gray-900">10:00 - 11:00</p>
                            <div className="flex space-x-1">
                              <button className="text-green-600 hover:bg-green-100 p-1 rounded">
                                <Check className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600">Team meeting (Conference room)</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-indigo-50 rounded-lg flex items-start">
                        <Clock className="h-5 w-5 text-schedulify-indigo mt-0.5 mr-3" />
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <p className="font-medium text-gray-900">11:15 - 12:00</p>
                            <div className="flex space-x-1">
                              <button className="text-green-600 hover:bg-green-100 p-1 rounded">
                                <Check className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-gray-600">Email triage and responses</p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="week">
                      <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
                        <p className="text-gray-500">Weekly calendar view will be displayed here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" /> Export to Calendar
                  </Button>
                  <Button asChild>
                    <Link to="/reschedule">Adjust Schedule</Link>
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

export default TimetableGenerator;
