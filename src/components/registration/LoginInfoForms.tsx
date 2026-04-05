'use client'

import bg from '@/assets/tcsnhs-bg.png'
import { EmployeeRegistrationRequest } from '@/interface/employee-registration'
import { useState } from 'react'

interface LoginFormsProps {
  forms: EmployeeRegistrationRequest['employee']
  confirmPassword: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onRegister: () => void
  isSubmitting: boolean
  error: string
}

export function LoginForms({
  forms,
  confirmPassword,
  onChange,
  onRegister,
  isSubmitting,
  error,
}: LoginFormsProps) {
  const [localError, setLocalError] = useState('')

  const validateForm = () => {
    if (!forms.person.email.trim()) return 'Email is required'
    if (!forms.user.username.trim()) return 'Username is required'
    if (!forms.user.password) return 'Password is required'
    if (!confirmPassword) return 'Confirm password is required'
    if (forms.user.password !== confirmPassword) return 'Passwords do not match'
    return null
  }

  const handleRegistration = () => {
    const validationError = validateForm()
    if (validationError) {
      setLocalError(validationError)
      return
    }
    onRegister()
  }

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-5  align-middle">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          REGISTER
        </h2>
        <form>
          {/* Login Information */}
          <div className="p-6 bg-gray-100 rounded-lg space-y-4">
            <p className="font-semibold text-gray-700 w-40">
              Login Information
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="person.email"
                  value={forms.person.email}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="john.doe@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="user.username"
                  value={forms.user.username}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  placeholder="john.doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="user.password"
                  value={forms.user.password}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex">
            {localError && (
              <p className="text-red-500 text-sm mt-2">{localError}</p>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-end pt-5">
            <button
              type="button"
              onClick={handleRegistration}
              disabled={isSubmitting}
              className={`w-30 h-11 text-white font-medium rounded-lg transition-colors
                      ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-emerald-500 hover:bg-emerald-600'
                      }
                    `}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
