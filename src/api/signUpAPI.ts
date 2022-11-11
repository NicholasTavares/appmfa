import baseAPI from "./baseAPI";

type SignUpPost = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const signUpPost = async ({
  name,
  email,
  password,
  password_confirmation,
}: SignUpPost): Promise<void> => {
  const response = await baseAPI.post("/auth/sign-up", {
    name,
    email,
    password,
    password_confirmation,
  });

  return response.data;
};
