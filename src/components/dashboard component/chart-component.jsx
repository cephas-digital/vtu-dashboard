"use client"

import { useEffect, useRef } from "react"

export default function Chart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid lines
    ctx.strokeStyle = "#f0f0f0"
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i < 4; i++) {
      const y = i * (height / 3)
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // This year line data
    const thisYearData = [
      { x: 0, y: 150 },
      { x: width * 0.16, y: 120 },
      { x: width * 0.33, y: 160 },
      { x: width * 0.5, y: 140 },
      { x: width * 0.66, y: 80 },
      { x: width * 0.83, y: 100 },
      { x: width, y: 90 },
    ]

    // Last year line data
    const lastYearData = [
      { x: 0, y: 170 },
      { x: width * 0.16, y: 160 },
      { x: width * 0.33, y: 180 },
      { x: width * 0.5, y: 160 },
      { x: width * 0.66, y: 130 },
      { x: width * 0.83, y: 110 },
      { x: width, y: 90 },
    ]

    // Draw this year line
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(thisYearData[0].x, thisYearData[0].y)

    for (let i = 1; i < thisYearData.length; i++) {
      const xc = (thisYearData[i].x + thisYearData[i - 1].x) / 2
      const yc = (thisYearData[i].y + thisYearData[i - 1].y) / 2
      ctx.quadraticCurveTo(thisYearData[i - 1].x, thisYearData[i - 1].y, xc, yc)
    }

    ctx.stroke()

    // Draw last year line (dotted)
    ctx.strokeStyle = "#d8b4fe"
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.beginPath()
    ctx.moveTo(lastYearData[0].x, lastYearData[0].y)

    for (let i = 1; i < lastYearData.length; i++) {
      const xc = (lastYearData[i].x + lastYearData[i - 1].x) / 2
      const yc = (lastYearData[i].y + lastYearData[i - 1].y) / 2
      ctx.quadraticCurveTo(lastYearData[i - 1].x, lastYearData[i - 1].y, xc, yc)
    }

    ctx.stroke()
    ctx.setLineDash([])

    // Draw highlighted point
    const highlightX = width * 0.16
    const highlightY = 120

    ctx.fillStyle = "#fff"
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(highlightX, highlightY, 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={800} height={200} className="w-full h-full" />
}

