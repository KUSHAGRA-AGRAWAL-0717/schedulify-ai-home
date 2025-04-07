
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, Calendar, Clock, Brain, Coffee, BedDouble, Home, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Preferences = () => {
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
            <h1 className="text-3xl font-bold">Preferences</h1>
            <p className="text-gray-500">Customize how Schedulify works for you</p>
          </div>
        </div>

        <Tabs defaultValue="productivity">
          <TabsList className="mb-6">
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="work-hours">Work Hours</TabsTrigger>
            <TabsTrigger value="focus">Focus & Breaks</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="productivity">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-schedulify-blue" />
                    Productivity Style
                  </CardTitle>
                  <CardDescription>How you prefer to work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="pomodoro">Pomodoro Technique</Label>
                      <Switch id="pomodoro" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-500">25 minutes of focus followed by 5 minute breaks</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="deep-work">Deep Work Blocks</Label>
                      <Switch id="deep-work" />
                    </div>
                    <p className="text-sm text-gray-500">Dedicated blocks of time for focused work</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="time-blocking">Time Blocking</Label>
                      <Switch id="time-blocking" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-500">Schedule specific tasks at specific times</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Task Grouping</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">By Project</Button>
                      <Button variant="outline" className="justify-start bg-blue-50 border-blue-200">By Energy Level</Button>
                      <Button variant="outline" className="justify-start">By Priority</Button>
                      <Button variant="outline" className="justify-start">By Deadline</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-schedulify-purple" />
                    Schedule Preferences
                  </CardTitle>
                  <CardDescription>Your ideal calendar setup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Buffer time between meetings</Label>
                    <div className="flex items-center space-x-2">
                      <Slider defaultValue={[10]} min={0} max={30} step={5} />
                      <span className="bg-gray-100 px-2 py-1 rounded w-12 text-center">10<span className="text-xs">min</span></span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="batch-meetings">Batch meetings together</Label>
                      <Switch id="batch-meetings" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-500">Schedule meetings back-to-back when possible</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="protect-lunch">Protect lunch hour</Label>
                      <Switch id="protect-lunch" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-500">Keep your lunch break free from meetings</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="auto-decline">Auto-decline low priority</Label>
                      <Switch id="auto-decline" />
                    </div>
                    <p className="text-sm text-gray-500">Automatically decline meetings marked as low priority</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="work-hours">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-schedulify-indigo" />
                  Working Hours
                </CardTitle>
                <CardDescription>When you're typically available for work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                    <div className="space-y-2">
                      <Label className="text-center block">Monday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <Input type="time" defaultValue="09:00" className="w-full" />
                        <span className="text-xs text-gray-500">to</span>
                        <Input type="time" defaultValue="17:00" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Tuesday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <Input type="time" defaultValue="09:00" className="w-full" />
                        <span className="text-xs text-gray-500">to</span>
                        <Input type="time" defaultValue="17:00" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Wednesday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <Input type="time" defaultValue="09:00" className="w-full" />
                        <span className="text-xs text-gray-500">to</span>
                        <Input type="time" defaultValue="17:00" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Thursday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <Input type="time" defaultValue="09:00" className="w-full" />
                        <span className="text-xs text-gray-500">to</span>
                        <Input type="time" defaultValue="17:00" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Friday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <Input type="time" defaultValue="09:00" className="w-full" />
                        <span className="text-xs text-gray-500">to</span>
                        <Input type="time" defaultValue="16:00" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Saturday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <div className="pt-7 pb-[68px]">
                          <span className="text-sm text-gray-400">Off</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-center block">Sunday</Label>
                      <div className="flex flex-col space-y-2 items-center">
                        <div className="pt-7 pb-[68px]">
                          <span className="text-sm text-gray-400">Off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <h3 className="font-medium">Special Work Hours</h3>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Summer Hours</p>
                        <p className="text-sm text-gray-500">June 1 - August 31, 8:00-16:00</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      + Add Special Hours
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="focus">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-schedulify-blue" />
                    Focus Settings
                  </CardTitle>
                  <CardDescription>How you maintain concentration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Peak productivity hours</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start bg-blue-50 border-blue-200">Morning</Button>
                      <Button variant="outline" className="justify-start">Afternoon</Button>
                      <Button variant="outline" className="justify-start">Evening</Button>
                      <Button variant="outline" className="justify-start">Late night</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Optimal focus duration</Label>
                    <div className="flex items-center space-x-2">
                      <Slider defaultValue={[45]} min={15} max={120} step={15} />
                      <span className="bg-gray-100 px-2 py-1 rounded w-12 text-center">45<span className="text-xs">min</span></span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="do-not-disturb">Do Not Disturb mode</Label>
                      <Switch id="do-not-disturb" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-500">Silence notifications during focus blocks</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coffee className="mr-2 h-5 w-5 text-schedulify-purple" />
                    Break Settings
                  </CardTitle>
                  <CardDescription>How you recharge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Break duration</Label>
                    <div className="flex items-center space-x-2">
                      <Slider defaultValue={[15]} min={5} max={30} step={5} />
                      <span className="bg-gray-100 px-2 py-1 rounded w-12 text-center">15<span className="text-xs">min</span></span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Break frequency</Label>
                    <div className="flex items-center space-x-2">
                      <Slider defaultValue={[90]} min={30} max={180} step={15} />
                      <span className="bg-gray-100 px-2 py-1 rounded w-16 text-center">90<span className="text-xs">min</span></span>
                    </div>
                    <p className="text-sm text-gray-500">Schedule a break every 90 minutes</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Break activities</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start bg-blue-50 border-blue-200">Walk</Button>
                      <Button variant="outline" className="justify-start bg-blue-50 border-blue-200">Stretch</Button>
                      <Button variant="outline" className="justify-start">Meditation</Button>
                      <Button variant="outline" className="justify-start">Snack</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="locations">
            <Card>
              <CardHeader>
                <CardTitle>Location Preferences</CardTitle>
                <CardDescription>Where you work affects how you work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Common Locations</h3>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-schedulify-blue mr-3" />
                      <div>
                        <p className="font-medium">Home Office</p>
                        <p className="text-sm text-gray-500">Best for deep focus work</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-schedulify-purple mr-3" />
                      <div>
                        <p className="font-medium">Company Office</p>
                        <p className="text-sm text-gray-500">Best for meetings and collaborations</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 text-schedulify-indigo mr-3" />
                      <div>
                        <p className="font-medium">Cafe</p>
                        <p className="text-sm text-gray-500">Good for creative work</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="location-based">Location-based scheduling</Label>
                    <Switch id="location-based" defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500">Automatically suggest appropriate tasks based on your current location</p>
                </div>
                
                <Button variant="outline" className="w-full">
                  + Add New Location
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 flex justify-end">
          <Button>Save Preferences</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Preferences;
