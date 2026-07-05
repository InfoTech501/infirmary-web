import { EMPLOYEE_CURRENT_USER } from "@/constants/api";

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
}