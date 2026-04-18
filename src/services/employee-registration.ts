import {
  EmployeeRegistrationRequest,
  EmployeeRegistrationResponse,
} from "@/interface/employee-registration"
import { REGISTER_EMPLOYEE } from "@/constants/api"

export const register = async (
  registerData: EmployeeRegistrationRequest & { confirmPassword?: string },
): Promise<EmployeeRegistrationResponse> => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const { confirmPassword, ...payload } = registerData

    const response = await fetch(REGISTER_EMPLOYEE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    clearTimeout(timeout)
    const text = await response.text()
    let responseBody: any

    try {
      responseBody = JSON.parse(text)
    } catch {
      responseBody = { message: text || "Unknown response" }
    }

    if (!response.ok) {
      throw new Error(
        responseBody?.error ||
          responseBody?.message ||
          responseBody?.errors?.[0]?.defaultMessage ||
          response.statusText ||
          `Failed to register: ${response.status}`,
      )
    }

    return responseBody as EmployeeRegistrationResponse
  } catch (error) {
    clearTimeout(timeout)

    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(
        "Request timed out. The data may have been saved, please verify before retrying. Refresh the page to continue.",
      )
    }

    if (error instanceof Error && error.message.includes("Failed to fetch")) {
      throw new Error(
        "Network error. Please check your internet connection and try again.",
      )
    }
    throw error
  }
}
