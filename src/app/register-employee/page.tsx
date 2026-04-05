'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EmployeeRegistrationRequest } from '@/interface/employee-registration'
import { register } from '@/services/employee-registration'
import { InitialRegistrationForms } from '@/components/registration/InitialRegistrationForms'
import { LoginForms } from '@/components/registration/LoginInfoForms'

export default function Registration() {
  const [form, setForm] = useState<
    EmployeeRegistrationRequest & { confirmPassword: string }
  >({
    employee: {
      employeeNumber: '',
      dateEmployed: '',
      employmentStatus: 'active',
      person: {
        firstName: '',
        middleName: '',
        lastName: '',
        birthdate: '',
        gender: '',
        age: '',
        email: '',
      },
      user: {
        username: '',
        password: '',
      },
      department: {
        departmentName: 'Senior High School Department',
      },
    },
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFailed, setShowFailed] = useState(false)
  const [showLoginInfoForms, setShowLoginForms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => {
      if (name === 'confirmPassword') {
        return {
          ...prev,
          confirmPassword: value,
        }
      }

      const keys = ['employee', ...name.split('.')]
      let updated: any = { ...prev }
      let obj = updated

      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] }
        obj = obj[keys[i]]
      }

      obj[keys[keys.length - 1]] =
        type === 'number' ? (value === '' ? '' : Number(value)) : value

      return updated
    })
  }

  const handleRegistration = async () => {
    if (isSubmitting) return
    setError('')
    setIsSubmitting(true)

    try {
      const { confirmPassword, ...registration } = form
      await register(registration)

      setForm({
        employee: {
          employeeNumber: '',
          dateEmployed: '',
          employmentStatus: 'active',
          person: {
            firstName: '',
            middleName: '',
            lastName: '',
            birthdate: '',
            gender: '',
            age: '',
            email: '',
          },
          user: {
            username: '',
            password: '',
          },
          department: {
            departmentName: 'Senior High School Department',
          },
        },
        confirmPassword: '',
      })

      setShowSuccess(true)
      console.log('Registered successfully')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to register'
      setError(message)
      setShowFailed(true)
      console.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {!showLoginInfoForms && (
        <InitialRegistrationForms
          forms={form.employee}
          onChange={handleChange}
          onNext={() => setShowLoginForms(true)}
        />
      )}

      {showLoginInfoForms && (
        <LoginForms
          forms={form.employee}
          confirmPassword={form.confirmPassword}
          onChange={handleChange}
          onRegister={handleRegistration}
          isSubmitting={isSubmitting}
          error={error}
        />
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Registration Successful
            </h2>

            <p className="text-gray-600 mb-6">
              You have been registered successfully. You can now login using
              your credentials.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowSuccess(false)
                  router.push('/login')
                }}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {showFailed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-3">
              Registration Failed
            </h2>

            <p className="text-gray-600 mb-6">
              { error }
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowFailed(false)
                  window.location.reload()
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
