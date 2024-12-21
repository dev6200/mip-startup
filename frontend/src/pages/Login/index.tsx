import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login(
      {
        username: "testuser",
      },
      {
        onSuccess: () => {
          const from =
            (location.state as { from?: { pathname: string } })?.from
              ?.pathname || "/";
          navigate(from);
        },
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center h-full space-y-4 w-1/4">
        <div className="flex flex-col gap-3 w-full">
          <h1>Log in</h1>
          <h2>Access your Catholic Mass Song Library Account</h2>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label>Username </label>
          <input
            className="border rounded-lg p-3 w-full"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label>Password </label>
          <input className="border rounded-lg p-3" placeholder="Password" />
        </div>
        <button
          className="bg-black w-full text-white p-4 rounded-xl"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
