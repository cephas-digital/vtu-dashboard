"use client"

import { useEffect, useRef } from "react"

export default function LocationCharts() {
  const usersChartRef = useRef(null)
  const salesChartRef = useRef(null)

  useEffect(() => {
    renderUsersChart()
    renderSalesChart()
  }, [])

  const renderUsersChart = () => {
    if (!usersChartRef.current) return

    const canvas = usersChartRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    ctx.clearRect(0, 0, width, height)

    // Data for bar chart - matching the image
    const data = [
      { label: "Boston", value: 70, color: "#84cc16" },
      { label: "Chicago", value: 90, color: "#000000" },
      { label: "New York", value: 110, color: "#60a5fa" },
      { label: "LA", value: 45, color: "#a78bfa" },
      { label: "Austin", value: 60, color: "#4ade80" },
    ]

    const barWidth = 30
    const spacing = (width - barWidth * data.length) / (data.length + 1)
    const maxValue = Math.max(...data.map((item) => item.value))

    // Y-axis labels
    ctx.fillStyle = "#9ca3af"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"

    for (let i = 0; i <= 3; i++) {
      const value = ((i * maxValue) / 3).toFixed(0) + "K"
      const y = height - (i * height) / 3 - 5
      ctx.fillText(value, -5, y)
    }

    // Draw bars
    data.forEach((item, index) => {
      const x = spacing + index * (barWidth + spacing)
      const barHeight = (item.value / maxValue) * (height - 20)

      ctx.fillStyle = item.color
      ctx.fillRect(x, height - barHeight, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#9ca3af"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x + barWidth / 2, height + 15)
    })
  }

  const renderSalesChart = () => {
    if (!salesChartRef.current) return

    const canvas = salesChartRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    ctx.clearRect(0, 0, width, height)

    // Data for pie chart
    const data = [
      { label: "Japan", value: 42.5, color: "#000000" },
      { label: "Italy", value: 22.5, color: "#60a5fa" },
      { label: "Sweden", value: 17.5, color: "#a78bfa" },
      { label: "Other", value: 17.5, color: "#4ade80" },
    ]

    const centerX = width / 3
    const centerY = height / 2
    const radius = Math.min(width, height) / 2.5

    // Draw pie chart
    let startAngle = 0
    const total = data.reduce((sum, item) => sum + item.value, 0)

    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center circle (white space)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "#ffffff"
    ctx.fill()

    // Draw labels on the right side
    ctx.textAlign = "left"
    ctx.font = "12px sans-serif"

    let labelY = height / 4
    data.forEach((item) => {
      // Color square
      ctx.fillStyle = item.color
      ctx.fillRect(width * 0.6, labelY - 8, 10, 10)

      // Label text
      ctx.fillStyle = "#000000"
      ctx.fillText(item.label, width * 0.6 + 16, labelY)

      // Percentage
      ctx.fillText(item.value.toFixed(1) + "%", width * 0.85, labelY)

      labelY += 24
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-bold mb-4">Users by Location</h2>
        <div className="relative h-64">
          <canvas ref={usersChartRef} width={400} height={200} className="w-full h-full" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Sales by Location</h2>
        <div className="relative h-64">
          <canvas ref={salesChartRef} width={400} height={200} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

