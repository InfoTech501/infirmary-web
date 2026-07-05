import { REPORT_MED_TREND, REPORT_CLINIC_VISIT } from "@/constants/api"

const getCurrentMonthRange = () => {
  const now = new Date()

  const startDate = new Date(now.getFullYear(), now.getMonth(), 1)
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0)

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  }
}

export const getMedTrend = async (token: string) => {
  const { startDate, endDate } = getCurrentMonthRange()

  const response = await fetch(REPORT_MED_TREND, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      startDate,
      endDate,
    // body: JSON.stringify({
    //   startDate: "2001-01-01",
    //   endDate: "2025-02-01",
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Med Trend Error:", response.status, error)
    throw new Error("Failed to fetch med trend")
  }

  return response.json()
}

export const getClinicVisits = async (token: string) => {
  const response = await fetch(REPORT_CLINIC_VISIT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("Clinic Visit Error:", error)
    throw new Error("Failed to fetch clinic visits")
  }

  return response.json()
}