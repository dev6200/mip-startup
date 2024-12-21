import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FieldValues, useForm } from "react-hook-form";

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (data: FieldValues) => {
    login(
      data as {
        username: string;
        password: string;
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
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-3 w-full">
            <h1>Log in</h1>
            <h2>Access your Catholic Mass Song Library Account</h2>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label>Username </label>
            <input
              {...register("username")}
              className="border rounded-lg p-3 w-full"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label>Password </label>
            <input
              className="border rounded-lg p-3"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <button
            className="bg-black w-full text-white p-4 rounded-xl"
            onClick={handleLogin}
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
