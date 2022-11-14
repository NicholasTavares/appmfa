import { basePrivateAPI } from "./baseAPI";

type TokenResponse = {
  code: string;
  expiresAt: string;
};

export const getToken = async (jwt?: string): Promise<TokenResponse> => {
  const response = await basePrivateAPI.get("/verification-code", {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return response.data;
};
