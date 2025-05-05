
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import TimetableGenerator from "./pages/TimetableGenerator";
import Preferences from "./pages/Preferences";
import Reschedule from "./pages/Reschedule";
import ActivitySuggestions from "./pages/ActivitySuggestions";
import Signup from "./pages/Signup";
import AdminSettings from "./pages/AdminSettings";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timetable" element={<TimetableGenerator />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/reschedule" element={<Reschedule />} />
          <Route path="/activities" element={<ActivitySuggestions />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminSettings />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demo" element={<Navigate to="/login" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
