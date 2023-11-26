import request from "./client";
import { useQuery, useMutation } from "react-query";

export const useLogin = () => {
  return useMutation(
    ({ email, password }: { email: string; password: string }) =>
      request.user.login({ email, password })
  );
};

export const useRegister = () => {
  return useMutation((data: any) => request.user.register(data), {
    onSuccess: () => {},
  });
};
