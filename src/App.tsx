import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import NewOrder from "./pages/dashboard/NewOrder";
import DashboardOrders from "./pages/dashboard/DashboardOrders";
import AddFunds from "./pages/dashboard/AddFunds";
import MassOrder from "./pages/dashboard/MassOrder";
import ReferEarn from "./pages/dashboard/ReferEarn";
import Services from "./pages/dashboard/Services";
import Tickets from "./pages/dashboard/Tickets";
import API from "./pages/dashboard/API";
import ChildPanel from "./pages/dashboard/ChildPanel";
import Updates from "./pages/dashboard/Updates";
import Home from "./pages/dashboard/Home";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/new-order" element={<NewOrder />} />
          <Route path="/dashboard/orders" element={<DashboardOrders />} />
          <Route path="/dashboard/add-funds" element={<AddFunds />} />
          <Route path="/dashboard/mass-order" element={<MassOrder />} />
          <Route path="/dashboard/refer-earn" element={<ReferEarn />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route path="/dashboard/tickets" element={<Tickets />} />
          <Route path="/dashboard/api" element={<API />} />
          <Route path="/dashboard/child-panel" element={<ChildPanel />} />
          <Route path="/dashboard/updates" element={<Updates />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
