export interface LoginRequest {
  username?: string
  employeeId?: string
  employeeNumber?: string
  password: string
}

export interface LoginResponse {
  token?: string
  accessToken?: string
  jwt?: string
  employee?: {
    id: number
    employeeNumber: number
    person: {
      firstName: string
      lastName: string
      email: string
    }
    user: {
      userId: string
      userName: string
      role: string
      authorities: string[]
    }
  }
  message?: string
}

export interface LoginFieldErrors {
  employeeId?: string
  password?: string
}