const revenueData = [32, 48, 42, 58, 52, 68, 62, 78, 72, 88, 82, 96]

function RevenueChart() {
  const width = 720
  const height = 220
  const padding = 20
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2
  const maxValue = 100

  const points = revenueData.map((value, index) => {
    const x = padding + (index / (revenueData.length - 1)) * chartWidth
    const y = padding + chartHeight - (value / maxValue) * chartHeight
    return [x, y]
  })

  const line = points
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`)
    .join(' ')

  const area = `${line} L ${points.at(-1)[0]} ${height - padding} L ${points[0][0]} ${height - padding} Z`

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="font-semibold text-gray-800">Revenue Overview</h2>
          <p className="mt-1 text-sm text-gray-500">Monthly revenue performance</p>
        </div>
        <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          This year
        </span>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          className="h-auto w-full"
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="Monthly revenue chart"
        >
          {[20, 70, 120, 170].map((y) => (
            <line
              key={y}
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}
          <path d={area} fill="#dbeafe" opacity="0.75" />
          <path d={line} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {points.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="4" fill="#2563eb" />
          ))}
        </svg>
      </div>
    </section>
  )
}

export default RevenueChart
