export interface EmployeeRegistrationRequest {
  employee: {
    employeeNumber: string
    dateEmployed: string
    employmentStatus: 'active'
    person: {
      firstName: string
      middleName: string
      lastName: string
      birthdate: string
      gender: string
      age: number | ''
      email: string
    }
    user: {
      username: string
      password: string
    }
    department: {
      departmentName: 'Senior High School Department'
    }
  }
}

export interface EmployeeRegistrationResponse {
  httpStatusCode?: boolean
  message?: string
  student?: null
  employee?: {
    id: number
    employeeNumber: number
    dateEmployed: string
    employmentStatus: 'active'
    person: {
      id: number
      firstName: string
      middleName: string
      lastName: string
      age: number
      birthdate: string
      gender: string
      email: string
      address?: string | null
      contactNumber?: string | null
    } | null
    user: {
      id: number
      userId: string
      userName: string
      password: string
      lastLoginDate: string | null
      joinDate: string
      role: 'TEACHER_ROLE'
      authorities: ['user:read', 'user:update']
      active: 'true'
      locked: 'false'
    } | null
    department: {
      id: number
      departmentName: 'Senior High School Department'
    }
  } | null
}
