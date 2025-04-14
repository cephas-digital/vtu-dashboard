"use client"

import { useEffect, useRef } from "react"

export default function LineChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw horizontal grid lines
    ctx.strokeStyle = "#f0f0f0"
    ctx.lineWidth = 1

    const gridLines = 5
    for (let i = 0; i < gridLines; i++) {
      const y = i * (height / (gridLines - 1))
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Define data points - matching the exact curve in the image
    // This year's data (black solid line)
    const thisYearData = [
      { x: width * 0, y: height * 0.7 },
      { x: width * 0.1, y: height * 0.75 },
      { x: width * 0.2, y: height * 0.65 },
      { x: width * 0.3, y: height * 0.6 },
      { x: width * 0.4, y: height * 0.4 },
      { x: width * 0.5, y: height * 0.3 },
      { x: width * 0.6, y: height * 0.5 },
      { x: width * 0.7, y: height * 0.35 },
      { x: width * 0.8, y: height * 0.45 },
      { x: width * 0.9, y: height * 0.4 },
      { x: width, y: height * 0.35 },
    ]

    // Draw this year's line (solid black)
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(thisYearData[0].x, thisYearData[0].y)

    // Draw smooth curve through points
    for (let i = 1; i < thisYearData.length; i++) {
      const xc = (thisYearData[i].x + thisYearData[i - 1].x) / 2
      const yc = (thisYearData[i].y + thisYearData[i - 1].y) / 2
      ctx.quadraticCurveTo(thisYearData[i - 1].x, thisYearData[i - 1].y, xc, yc)
    }
    ctx.stroke()

    // Draw last year's line (light gray) - just a faint line in the background
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1.5
    ctx.beginPath()

    // Starting slightly higher than this year's line
    ctx.moveTo(0, height * 0.8)
    ctx.bezierCurveTo(width * 0.2, height * 0.25, width * 0.4, height * 0.7, width * 0.6, height * 0.6)
    ctx.bezierCurveTo(width * 0.8, height * 0.5, width * 0.9, height * 0.45, width, height * 0.4)
    ctx.stroke()
  }, [])

  return (
    <div className="relative lg:h-[350px] md:h-[350px] h-[250px] ">
      {/* Y-axis labels */}
      <div className="absolute  lg:top-0 md:top-0 top-8 h-full flex flex-col lg:justify-between md:justify-between gap-10 text-xs text-gray-500">
        <div>30K</div>
        <div>20K</div>
        <div>10K</div>
        <div>0</div>
      </div>

      {/* Chart */}
      <div className="absolute inset-0 pl-4 ">
        <canvas ref={canvasRef} width={800} height={400} className="w-full h-full"  />
      </div>

      {/* X-axis labels */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-6 flex lg:justify-between md:justify-between gap-5 text-xs text-gray-500">
        <div>Jan</div>
        <div>Feb</div>
        <div>Mar</div>
        <div>Apr</div>
        <div>May</div>
        <div>Jun</div>
        <div> July</div>
      </div>
    </div>
  )
}

