import { Toaster } from "@/components/ui/toaster"
    import { Toaster as Sonner } from "@/components/ui/sonner"
    import { TooltipProvider } from "@/components/ui/tooltip"
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
    import { BrowserRouter, Routes, Route } from "react-router-dom"
    import Navbar from "./components/Navbar"
    import Index from "./pages/Index"
    import Configure from "./pages/Configure"
    import Cart from "./pages/Cart"
    import Components from "./pages/Components"

    const queryClient = new QueryClient()

    const App = () => (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/configure" element={<Configure />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/components" element={<Components />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    )

    export default App
