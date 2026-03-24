import {
  EmployeeRegistrationRequest,
  EmployeeRegistrationResponse,
} from '@/interface/employee-registration'
import { REGISTER_EMPLOYEE } from '@/constants/api'

export const register = async (
  registerData: EmployeeRegistrationRequest & { confirmPassword?: string },
): Promise<EmployeeRegistrationResponse> => {
  try {
    const { confirmPassword, ...payload } = registerData

    const response = await fetch(REGISTER_EMPLOYEE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const text = await response.text()
    let responseBody: any

    try {
      responseBody = JSON.parse(text)
    } catch {
      responseBody = { message: text || 'Unknown response' }
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
    throw new Error(
      'Network error. Please try again. ' +
        (error instanceof Error ? error.message : String(error)),
    )
  }
}
