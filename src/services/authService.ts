import { EMPLOYEE_CURRENT_USER, LOGIN_EMPLOYEE } from "@/constants/api";
import { LoginRequest } from "@/interface/auth";

const TOKEN_KEY = "tcsnhs_token";

export const login = async (credentials: LoginRequest): Promise<string> => {
  const response = await fetch(LOGIN_EMPLOYEE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = new Error("Login failed") as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  const jwtHeader = response.headers.get("Jwt-Token");

  if (!jwtHeader) {
    throw new Error(
      "No Jwt-Token header in response — check CORS exposed headers on the backend."
    );
  }

  return jwtHeader.replace("Bearer ", "");
};

export const getCurrentUser = async (token: string) => {
  const response = await fetch(EMPLOYEE_CURRENT_USER, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get current user");
  }

  return response.json();
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const logout = () => {
  clearToken();
};