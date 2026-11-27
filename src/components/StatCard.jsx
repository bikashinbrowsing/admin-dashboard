
function StatCard({ title, value, change, icon: Icon, color }) {

  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

      <div className="flex items-center justify-between">

        <h2 className="text-sm font-medium text-gray-500">
          {title}
        </h2>

        <div className={`p-3 rounded-lg ${colors[color]}`}>
          <Icon size={22} />
        </div>

      </div>

      <h1 className="text-3xl font-bold text-gray-800 mt-4">
        {value}
      </h1>

      <p className="text-sm text-green-600 mt-2">
        ↑ {change} from last month
      </p>

    </div>
  )
}

export default StatCard
