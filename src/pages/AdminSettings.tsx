
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, User, Shield, Bell, Globe, Database, CreditCard, FileText, Cloud } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AdminSettings = () => {
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
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-gray-500">Manage your account preferences</p>
          </div>
        </div>

        <Tabs defaultValue="account">
          <div className="flex mb-6 overflow-x-auto">
            <TabsList className="h-auto p-0 bg-transparent">
              <TabsTrigger value="account" className="flex items-center data-[state=active]:bg-blue-50">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center data-[state=active]:bg-blue-50">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center data-[state=active]:bg-blue-50">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center data-[state=active]:bg-blue-50">
                <Globe className="h-4 w-4 mr-2" />
                Integrations
              </TabsTrigger>
              <TabsTrigger value="subscription" className="flex items-center data-[state=active]:bg-blue-50">
                <CreditCard className="h-4 w-4 mr-2" />
                Subscription
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="account">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Manage your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <User className="h-12 w-12" />
                      </div>
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" value="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" value="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="john.doe@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="america_new_york">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="america_new_york">Eastern Time (US & Canada)</SelectItem>
                            <SelectItem value="america_chicago">Central Time (US & Canada)</SelectItem>
                            <SelectItem value="america_denver">Mountain Time (US & Canada)</SelectItem>
                            <SelectItem value="america_los_angeles">Pacific Time (US & Canada)</SelectItem>
                            <SelectItem value="europe_london">London</SelectItem>
                            <SelectItem value="asia_tokyo">Tokyo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Changes</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Preferences</CardTitle>
                      <CardDescription>Control your account settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="weekStartDay">Week starts on</Label>
                          <Select defaultValue="monday">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select day" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sunday">Sunday</SelectItem>
                              <SelectItem value="monday">Monday</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="timeFormat">Time format</Label>
                          <Select defaultValue="12hour">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12hour">12-hour (AM/PM)</SelectItem>
                              <SelectItem value="24hour">24-hour</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                              <SelectItem value="ja">Japanese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <Label htmlFor="darkMode">Dark mode</Label>
                            <p className="text-sm text-gray-500">Enable dark mode interface</p>
                          </div>
                          <Switch id="darkMode" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <Label htmlFor="compactView">Compact view</Label>
                            <p className="text-sm text-gray-500">Show more information in less space</p>
                          </div>
                          <Switch id="compactView" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Management</CardTitle>
                      <CardDescription>Manage your data and privacy</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <Label htmlFor="dataCollection">Analytics collection</Label>
                            <p className="text-sm text-gray-500">Allow us to collect anonymous usage data to improve the app</p>
                          </div>
                          <Switch id="dataCollection" defaultChecked />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <Label htmlFor="personalizedSuggestions">Personalized suggestions</Label>
                            <p className="text-sm text-gray-500">Allow AI to analyze your patterns for better recommendations</p>
                          </div>
                          <Switch id="personalizedSuggestions" defaultChecked />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button variant="outline" className="w-full justify-between">
                          <span className="flex items-center">
                            <Database className="h-4 w-4 mr-2" />
                            Export all data
                          </span>
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div>
                        <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                          Delete account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Password</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm new password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    
                    <Button>Update Password</Button>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <Label htmlFor="twoFactor">Two-factor authentication</Label>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="twoFactor" />
                    </div>
                  </div>
                  
                  <Button variant="outline">Set up two-factor authentication</Button>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Sessions</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Current session</p>
                        <p className="text-sm text-gray-500">MacBook Pro • New York, USA • Apr 7, 2025</p>
                      </div>
                      <Button variant="outline" size="sm" disabled>Active</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">iPhone 14</p>
                        <p className="text-sm text-gray-500">New York, USA • Apr 6, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">Logout</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Windows PC</p>
                        <p className="text-sm text-gray-500">New York, USA • Apr 3, 2025</p>
                      </div>
                      <Button variant="outline" size="sm">Logout</Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                    Logout of all devices
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how and when you receive alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Schedule changes</p>
                        <p className="text-sm text-gray-500">Receive emails when your schedule is updated</p>
                      </div>
                      <Switch id="emailScheduleChanges" defaultChecked />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Reminders</p>
                        <p className="text-sm text-gray-500">Receive reminders about upcoming events</p>
                      </div>
                      <Switch id="emailReminders" defaultChecked />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Product updates</p>
                        <p className="text-sm text-gray-500">Learn about new features and improvements</p>
                      </div>
                      <Switch id="emailProductUpdates" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Tips and suggestions</p>
                        <p className="text-sm text-gray-500">Receive personalized productivity advice</p>
                      </div>
                      <Switch id="emailTips" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">In-app Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Schedule alerts</p>
                        <p className="text-sm text-gray-500">Alerts about upcoming events and changes</p>
                      </div>
                      <Switch id="inAppScheduleAlerts" defaultChecked />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Break reminders</p>
                        <p className="text-sm text-gray-500">Notifications when it's time to take a break</p>
                      </div>
                      <Switch id="inAppBreakReminders" defaultChecked />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Focus mode alerts</p>
                        <p className="text-sm text-gray-500">Notifications about focus mode sessions</p>
                      </div>
                      <Switch id="inAppFocusAlerts" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Notification Schedule</h3>
                  
                  <div className="space-y-2">
                    <Label>Quiet hours</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quietHoursStart" className="text-sm text-gray-500">Start time</Label>
                        <Input id="quietHoursStart" type="time" defaultValue="22:00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quietHoursEnd" className="text-sm text-gray-500">End time</Label>
                        <Input id="quietHoursEnd" type="time" defaultValue="08:00" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">No notifications will be sent during these hours</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect your accounts to enhance functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Calendar Services</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Google Calendar</p>
                          <p className="text-sm text-gray-500">Connected as john.doe@gmail.com</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Microsoft Outlook</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Apple Calendar</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Productivity Tools</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Slack</p>
                          <p className="text-sm text-gray-500">Connected to Acme Workspace</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Asana</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Trello</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Health & Wellness</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Apple Health</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                          <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Google Fit</p>
                          <p className="text-sm text-gray-500">Not connected</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-blue-700">Premium Plan</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Active</span>
                  </div>
                  <p className="text-blue-700 mb-2">$12.99 / month</p>
                  <p className="text-sm text-blue-600">Next billing date: May 7, 2025</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Plan Features</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Unlimited schedule creation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Advanced AI suggestions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Calendar integrations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Email notifications</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Priority support</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Payment Method</h3>
                  
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/26</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">April 7, 2025</p>
                        <p className="text-sm text-gray-500">Premium Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12.99</p>
                        <Button variant="link" size="sm" className="h-auto p-0">Receipt</Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">March 7, 2025</p>
                        <p className="text-sm text-gray-500">Premium Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12.99</p>
                        <Button variant="link" size="sm" className="h-auto p-0">Receipt</Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">February 7, 2025</p>
                        <p className="text-sm text-gray-500">Premium Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12.99</p>
                        <Button variant="link" size="sm" className="h-auto p-0">Receipt</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-2">
                <Button variant="outline" className="w-full">Change Plan</Button>
                <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                  Cancel Subscription
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default AdminSettings;
