import baseAPI from "./baseAPI";

type SignInPost = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
};

export const signInPost = async ({
  email,
  password,
}: SignInPost): Promise<SignInResponse> => {
  const response = await baseAPI.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
