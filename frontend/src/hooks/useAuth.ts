import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../store/useAuthStore";
import api from "../services/api";

const useAuth = () => {
  const queryClient = useQueryClient();
  const { setAuth, logout } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: async ({ username }: { username: string }) => {
      const response = await api.post("/login", {
        username: "testuser",
        password: "System123!",
      });
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.token);
    },
  });

  const logoutMutation = useMutation<void, Error>({
    mutationFn: async () => {
      await api.post("/auth/logout");
    },
    onSuccess: () => {
      logout();
      queryClient.clear();
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
    loginError: loginMutation.error,
  };
};

export default useAuth;
