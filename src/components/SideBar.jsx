
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'

function SideBar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-600">
          AdminPanel
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <a href="#" className="flex items-center gap-3 bg-blue-50 text-blue-600 p-3 rounded-lg font-medium">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
          <BarChart3 size={20} />
          Analytics
        </a>

        <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
          <Users size={26} />
          Users
        </a>

        <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
          <ShoppingBag size={20} />
          Products
        </a>

        <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
          <ShoppingCart size={20} />
          Orders
        </a>

        <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
          <Settings size={20} />
          Settings
        </a>

      </nav>

      {/* Logout */}
      <div className="mt-10">
        <a href="#" className="flex items-center gap-3 text-red-500 hover:bg-red-50 p-3 rounded-lg">
          <LogOut size={20} />
          Logout
        </a>
      </div>

    </aside>
  )
}

export default SideBar
