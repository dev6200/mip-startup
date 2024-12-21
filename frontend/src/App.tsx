import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
