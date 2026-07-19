"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import bg from "@/assets/login-bg.svg"
import { EmployeeRegistrationRequest } from "@/interface/employee-registration"

interface InitialRegistrationFormsProps {
  forms: EmployeeRegistrationRequest["employee"]
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onNext: () => void
}

export function InitialRegistrationForms({
  forms,
  onChange,
  onNext,
}: InitialRegistrationFormsProps) {
  const [localError, setLocalError] = useState("")

  const validateForm = () => {
    if (!forms.employeeNumber.trim()) return "Employee number is required"
    if (!forms.dateEmployed) return "Date employed is required"
    if (!forms.person.firstName.trim()) return "First name is required"
    if (!forms.person.lastName.trim()) return "Last name is required"
    if (!forms.person.birthdate) return "Birthdate is required"
    if (!forms.person.gender) return "Gender is required"
    if (forms.person.age === "" || forms.person.age === null)
      return "Age is required"
    return null
  }

  const handleNextButton = () => {
    const validationError = validateForm()
    if (validationError) {
      setLocalError(validationError)
      return
    }
    onNext()
  }

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-5 align-middle">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          REGISTER
        </h2>
        <form className="space-y-4">
          {/* Employment Status */}
          <div className="p-6 bg-gray-100 rounded-lg space-y-4">
            <p className="font-semibold text-gray-700 w-40">
              Employment Status
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employee No.
                </label>
                <input
                  type="text"
                  name="employeeNumber"
                  placeholder="Enter given employee no."
                  value={forms.employeeNumber}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Employment
                </label>
                <input
                  type="date"
                  name="dateEmployed"
                  value={forms.dateEmployed}
                  onChange={onChange}
                  required
                  className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="p-6 bg-gray-100 rounded-lg space-y-4">
            <p className="font-semibold text-gray-700 w-40">
              Personal Information
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="person.firstName"
                    placeholder="John"
                    value={forms.person.firstName}
                    onChange={onChange}
                    required
                    className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    name="person.birthdate"
                    value={forms.person.birthdate}
                    onChange={onChange}
                    required
                    className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="person.middleName"
                    placeholder="Smith"
                    value={forms.person.middleName}
                    onChange={onChange}
                    className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="person.gender"
                    value={forms.person.gender}
                    onChange={onChange}
                    required
                    className="w-60 h-10 px-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                  >
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="person.lastName"
                    placeholder="Doe"
                    value={forms.person.lastName}
                    onChange={onChange}
                    required
                    className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="person.age"
                    value={forms.person.age}
                    onChange={onChange}
                    required
                    className="w-60 h-8 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            {localError && (
              <p className="text-red-500 text-sm mt-2">{localError}</p>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              className="w-30 h-11 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              type="button"
              onClick={handleNextButton}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
