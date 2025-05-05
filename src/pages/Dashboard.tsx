
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ListTodo, Settings, Activity, Sparkles, X, Plus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Initial task data
const initialTasks = [
  {
    id: 1,
    title: "Complete presentation slides",
    priority: "high"
  },
  {
    id: 2,
    title: "Review project requirements",
    priority: "medium"
  },
  {
    id: 3,
    title: "Send follow-up emails",
    priority: "low"
  }
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('medium');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to add a new task
  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') {
      toast({
        title: "Task title required",
        description: "Please enter a title for your task.",
        variant: "destructive",
      });
      return;
    }

    const newTask = {
      id: Date.now(), // Use timestamp as a simple unique ID
      title: newTaskTitle,
      priority: newTaskPriority
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskPriority('medium');
    setIsDialogOpen(false);

    toast({
      title: "Task added",
      description: "Your new task has been added to your list.",
    });
  };

  // Function to remove a task
  const handleRemoveTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    
    toast({
      title: "Task removed",
      description: "The task has been removed from your list.",
    });
  };

  // Function to get priority badge styling
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs";
      case 'medium':
        return "bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs";
      case 'low':
        return "bg-green-100 text-green-800 px-2 py-1 rounded text-xs";
      default:
        return "bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs";
    }
  };

  // Function to get priority label
  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return "High";
      case 'medium':
        return "Medium";
      case 'low':
        return "Low";
      default:
        return "Medium";
    }
  };

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
                {tasks.map(task => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group">
                    <span className="text-gray-800">{task.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className={getPriorityBadge(task.priority)}>
                        {getPriorityLabel(task.priority)}
                      </span>
                      <button 
                        onClick={() => handleRemoveTask(task.id)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {tasks.length === 0 && (
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-gray-500">No tasks yet. Add one below!</p>
                  </div>
                )}
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" /> Add new task
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogDescription>
                      Create a new task to add to your list.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="task-title">Task Title</Label>
                      <Input
                        id="task-title"
                        placeholder="Enter task title"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-priority">Priority</Label>
                      <Select
                        value={newTaskPriority}
                        onValueChange={setNewTaskPriority}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddTask}>
                      Add Task
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
