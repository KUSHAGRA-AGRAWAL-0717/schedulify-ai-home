
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Brain, Heart, Coffee, Sparkles, ThumbsUp, Plus, Dumbbell, BookOpen, MusicIcon, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ActivitySuggestions = () => {
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
            <h1 className="text-3xl font-bold">Activity Suggestions</h1>
            <p className="text-gray-500">Personalized recommendations for work-life balance</p>
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="breaks">Breaks</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="flex items-center">
              <Plus className="h-4 w-4 mr-1" /> Custom Activity
            </Button>
          </div>
          
          <TabsContent value="all">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-schedulify-blue" />
                Recommended for You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Coffee className="h-4 w-4 mr-2 text-schedulify-indigo" />
                        Quick Break
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">5 min</span>
                    </div>
                    <CardDescription>Now would be a good time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Take a short break to stretch and hydrate. You've been working for 57 minutes.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="ghost" size="sm" className="text-gray-500">Later</Button>
                    <Button size="sm">Start</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-schedulify-blue" />
                        Focus Reading
                      </CardTitle>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">25 min</span>
                    </div>
                    <CardDescription>Today, 3:00 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Read that industry report you bookmarked. Perfect for your post-lunch focus window.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="ghost" size="sm" className="text-gray-500">Snooze</Button>
                    <Button size="sm">Schedule</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-schedulify-purple" />
                        Mindfulness
                      </CardTitle>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">10 min</span>
                    </div>
                    <CardDescription>Today, 5:30 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">A short meditation session to wind down before heading home. Perfect transition.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="ghost" size="sm" className="text-gray-500">Snooze</Button>
                    <Button size="sm">Schedule</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Dumbbell className="h-5 w-5 mr-2 text-schedulify-purple" />
                Physical Wellness
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-schedulify-purple" />
                        Desk Stretches
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">5 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Simple stretches you can do at your desk to reduce tension and eye strain.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">See routine</Button>
                    <Button size="sm">Start</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-schedulify-purple" />
                        Walking Meeting
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">30 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Take your 1:1 meetings while walking. Great for creativity and physical activity.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">Benefits</Button>
                    <Button size="sm">Try next meeting</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-schedulify-purple" />
                        Quick Workout
                      </CardTitle>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">15 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Short high-intensity workout to boost energy and focus. No equipment needed.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">See routine</Button>
                    <Button size="sm">Schedule</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-schedulify-blue" />
                Mental Wellness
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-schedulify-blue" />
                        Guided Meditation
                      </CardTitle>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">10 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Quick guided meditation focused on stress reduction and mental clarity.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">Preview</Button>
                    <Button size="sm">Start</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <MusicIcon className="h-4 w-4 mr-2 text-schedulify-blue" />
                        Focus Music
                      </CardTitle>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">45 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Curated focus playlist to enhance concentration during deep work sessions.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">Preview</Button>
                    <Button size="sm">Play</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-schedulify-blue" />
                        Mindful Lunch
                      </CardTitle>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">30 min</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Take a proper lunch break away from your desk. Focus on eating mindfully.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="link" size="sm" className="p-0">Benefits</Button>
                    <Button size="sm">Schedule</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="breaks">
            <Card>
              <CardHeader>
                <CardTitle>Break Suggestions</CardTitle>
                <CardDescription>Quick activities to recharge during your workday</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 text-schedulify-indigo mr-3" />
                      <div>
                        <p className="font-medium">Quick Break (5 min)</p>
                        <p className="text-sm text-gray-500">Stretch and hydrate</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 text-schedulify-indigo mr-3" />
                      <div>
                        <p className="font-medium">Coffee Break (15 min)</p>
                        <p className="text-sm text-gray-500">Step away and enjoy a beverage</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Dumbbell className="h-5 w-5 text-schedulify-purple mr-3" />
                      <div>
                        <p className="font-medium">Movement Break (10 min)</p>
                        <p className="text-sm text-gray-500">Quick walk or stretch routine</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wellness">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Activities</CardTitle>
                <CardDescription>Support your physical and mental wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-schedulify-blue mr-3" />
                      <div>
                        <p className="font-medium">Guided Meditation (10 min)</p>
                        <p className="text-sm text-gray-500">Reduce stress and improve focus</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500 mr-3" />
                      <div>
                        <p className="font-medium">Breathing Exercise (5 min)</p>
                        <p className="text-sm text-gray-500">Calm your nervous system</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Dumbbell className="h-5 w-5 text-schedulify-purple mr-3" />
                      <div>
                        <p className="font-medium">Desk Yoga (15 min)</p>
                        <p className="text-sm text-gray-500">Gentle stretches for office workers</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="productivity">
            <Card>
              <CardHeader>
                <CardTitle>Productivity Boosters</CardTitle>
                <CardDescription>Activities to enhance your focus and output</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <MusicIcon className="h-5 w-5 text-schedulify-blue mr-3" />
                      <div>
                        <p className="font-medium">Focus Music (45 min)</p>
                        <p className="text-sm text-gray-500">Curated playlist for deep work</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-schedulify-indigo mr-3" />
                      <div>
                        <p className="font-medium">Pomodoro Session (25 min)</p>
                        <p className="text-sm text-gray-500">Focused work with timer</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Sparkles className="h-5 w-5 text-schedulify-purple mr-3" />
                      <div>
                        <p className="font-medium">Idea Generation (20 min)</p>
                        <p className="text-sm text-gray-500">Structured brainstorming session</p>
                      </div>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ThumbsUp className="h-5 w-5 mr-2 text-schedulify-blue" />
                Activity History & Effectiveness
              </CardTitle>
              <CardDescription>Track what works best for you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MusicIcon className="h-5 w-5 text-schedulify-blue mr-3" />
                    <div>
                      <p className="font-medium">Focus Music</p>
                      <p className="text-sm text-gray-500">Used 15 times this month</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    92% effective
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Coffee className="h-5 w-5 text-schedulify-indigo mr-3" />
                    <div>
                      <p className="font-medium">Quick Break</p>
                      <p className="text-sm text-gray-500">Used 23 times this month</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    87% effective
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Brain className="h-5 w-5 text-schedulify-purple mr-3" />
                    <div>
                      <p className="font-medium">Meditation</p>
                      <p className="text-sm text-gray-500">Used 8 times this month</p>
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                    76% effective
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActivitySuggestions;
