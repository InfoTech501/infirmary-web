"use client"

import { useEffect, useState } from "react"
import MainLayout from "../../components/layout/MainLayout"
import { ClipboardEditIcon, ClipboardPlus } from "lucide-react"
import { getCurrentUser } from "@/services/authService"
import { getMedTrend, getClinicVisits } from "@/services/dashboard-reports"

const currentDate = new Date()

const formattedDate = currentDate.toLocaleDateString("en-Ph", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [medTrend, setMedTrend] = useState<any[]>([])
  const [clinicVisits, setClinicVisits] = useState<any[]>([])
  const [medTrendTotal, setMedTrendTotal] = useState<number>(0)
  const [clinicVisitTotal, setClinicVisitTotal] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Paste token here
        const token =
          "token"

        const user = await getCurrentUser(token)
        setCurrentUser(user)

        const medData = await getMedTrend(token)
        setMedTrend(medData)

        const total = medData.reduce(
          (sum: number, item: any) => sum + item.distributedMedicine,
          0
        ) 
        setMedTrendTotal(total)

        const visits = await getClinicVisits(token)
        setClinicVisits(visits)

        setClinicVisitTotal(
          visits.filter((v: any) => {
            const date = new Date(v.visitDate);
            return (
              date.getMonth() === new Date().getMonth() &&
              date.getFullYear() === new Date().getFullYear()
            )
          }).length
        )
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <main>
      <MainLayout />
      <div className="pl-65 pt-20 px-6 py-8 flex flex-col">
        <div className="w-full flex justify-between items-start">
          <div className="max-w-3xl">
            <h2 className="text-gray-950 text-3xl font-semibold">
              Welcome to TCSNHS Infirmary System!
            </h2>

            {currentUser && (
              <>
              <p className="text-gray-950 text-2xl font-semibold mt-2">
                Ms. {currentUser.employee.person.firstName}{" "} 
                {currentUser.employee.person.middleName}{" "}
                {currentUser.employee.person.lastName}
              </p>

              <p className="text-gray-950 text-sm mt-1">
                Adviser in {currentUser.employee.department.departmentName}
              </p>
              </>
            )}
          </div>

          <div className="text-right pr-6">
            <p className="text-gray-950 text-lg font-normal">{formattedDate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <section className="summary-report flex-1 pb-4">
            <h3 className="text-gray-950 font-semibold mb-3">
              Summary Report
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between bg-green-100 p-4 rounded-xl">
                <div>
                  <p className="text-2xl font-bold p-1">
                    {clinicVisitTotal}
                  </p>
                  <p className="text-sm text-gray-600 pl-1 pt-1 pb-2 pr-3.5">
                    Clinic Visitors this Month
                  </p>
                </div>
                <ClipboardEditIcon size={35} />
              </div>

              <div className="flex items-center justify-between bg-green-100 p-4 rounded-xl">
                <div>
                  <p className="text-2xl font-bold p-1">
                    {medTrendTotal}
                  </p>
                  <p className="text-sm text-gray-600 pl-1 pt-1 pb-2 pr-3.5">
                    Medication Distributed this Month
                  </p>
                </div>
                <ClipboardPlus size={35} />
              </div>
            </div>
          </section>

          <section className="class-table-lists flex-1">
            <h3 className="text-gray-950 font-semibold mb-3">
              Medication Trend
            </h3>
            <div className="overflow-x-auto rounded-xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <table className="text-gray-950 w-full md:w-auto text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-5 w-2xs text-base text-center">Rank</th>
                    <th className="px-4 py-5 w-2xs text-base text-center">Medicine</th>
                    <th className="px-4 py-5 w-2xs text-base text-center">Distributed</th>
                  </tr>
                </thead>
                <tbody>
                  {medTrend.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="text-center py-6 text-gray-500">
                        No Data
                      </td>
                    </tr>
                  ) : (
                    medTrend.map((medicine: any, index: number) => (
                    <tr key={index} className="border.b">
                      <td className="px-4 py-4 text-center">{medicine.rank}</td>
                      <td className="px-4 py-4 text-center">{medicine.medicineName}</td>
                      <td className="px-4 py-4 text-center">{medicine.distributedMedicine}</td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
