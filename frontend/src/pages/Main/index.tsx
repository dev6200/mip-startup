import Sidebar from "../../components/Sidebar";
import useAuthStore from "../../store/useAuthStore";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Main = () => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="h-dvh p-6 flex gap-5">
      <Sidebar />

      <div className="p-5 h-full bg-blue-100 w-full">
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/mass" element={<>Masses</>} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
