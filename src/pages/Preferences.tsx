
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import PageNavigation from '@/components/PageNavigation';
import { Settings, User, Calendar, Clock, Brain } from 'lucide-react';

const Preferences = () => {
  // Dummy data for user preferences
  const [workHours, setWorkHours] = useState<number[]>([9, 17]); // 9am to 5pm
  const [focusTime, setFocusTime] = useState<number>(60); // 60 minutes
  const [breakTime, setBreakTime] = useState<number>(15); // 15 minutes
  const [preferences, setPreferences] = useState({
    notificationsEnabled: true,
    calendarSync: true,
    darkMode: true,
    weekendScheduling: false,
    autoScheduleBreaks: true,
    productivityAnalytics: true,
    focusMode: true
  });

  const handleToggleChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof preferences]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Preferences</h1>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Reset to Defaults
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-schedulify-blue" />
                  Profile
                </CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">John Doe</p>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                </div>
                <Button variant="outline" className="w-full">Edit Profile</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-schedulify-purple" />
                  Work Schedule
                </CardTitle>
                <CardDescription>
                  Define your typical working hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Working Hours</Label>
                    <span className="text-muted-foreground">{workHours[0]}:00 - {workHours[1]}:00</span>
                  </div>
                  <Slider 
                    min={5} 
                    max={22} 
                    step={1} 
                    value={workHours} 
                    onValueChange={setWorkHours} 
                    className="py-4" 
                  />
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Focus Session Duration (minutes)</Label>
                      <span className="text-muted-foreground">{focusTime} min</span>
                    </div>
                    <Slider 
                      min={15} 
                      max={120} 
                      step={5} 
                      value={[focusTime]} 
                      onValueChange={([value]) => setFocusTime(value)} 
                      className="py-4" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Break Duration (minutes)</Label>
                      <span className="text-muted-foreground">{breakTime} min</span>
                    </div>
                    <Slider 
                      min={5} 
                      max={30} 
                      step={5} 
                      value={[breakTime]} 
                      onValueChange={([value]) => setBreakTime(value)} 
                      className="py-4" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-schedulify-indigo" />
                  System Settings
                </CardTitle>
                <CardDescription>
                  Customize how Schedulify works for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-base cursor-pointer">
                      Notifications
                    </Label>
                    <Switch 
                      id="notifications" 
                      checked={preferences.notificationsEnabled} 
                      onCheckedChange={() => handleToggleChange('notificationsEnabled')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="calendar-sync" className="text-base cursor-pointer">
                      Calendar Synchronization
                    </Label>
                    <Switch 
                      id="calendar-sync" 
                      checked={preferences.calendarSync} 
                      onCheckedChange={() => handleToggleChange('calendarSync')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode" className="text-base cursor-pointer">
                      Dark Mode
                    </Label>
                    <Switch 
                      id="dark-mode" 
                      checked={preferences.darkMode} 
                      onCheckedChange={() => handleToggleChange('darkMode')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="weekend" className="text-base cursor-pointer">
                      Weekend Scheduling
                    </Label>
                    <Switch 
                      id="weekend" 
                      checked={preferences.weekendScheduling} 
                      onCheckedChange={() => handleToggleChange('weekendScheduling')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-breaks" className="text-base cursor-pointer">
                      Auto-schedule Breaks
                    </Label>
                    <Switch 
                      id="auto-breaks" 
                      checked={preferences.autoScheduleBreaks} 
                      onCheckedChange={() => handleToggleChange('autoScheduleBreaks')} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="analytics" className="text-base cursor-pointer">
                      Productivity Analytics
                    </Label>
                    <Switch 
                      id="analytics" 
                      checked={preferences.productivityAnalytics} 
                      onCheckedChange={() => handleToggleChange('productivityAnalytics')} 
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <PageNavigation 
          prevPage={{ path: "/dashboard", label: "Back to Dashboard" }}
          nextPage={{ path: "/timetable", label: "Generate Timetable" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Preferences;
