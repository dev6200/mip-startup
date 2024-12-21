import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const queryClient = new QueryClient();

const App = () => {
  return (
    // <div className="h-dvh p-6 flex gap-5">
    //   <Sidebar />
    //   <div className="p-5 h-full bg-blue-100 w-full">Main</div>
    // </div>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Main>
                <div>In side main app</div>
              </Main>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
