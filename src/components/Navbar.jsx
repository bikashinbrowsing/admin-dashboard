
import { Search, Bell, User } from 'lucide-react'

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">

      <div className="flex items-center justify-between">

        {/* Page Title */}
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Welcome back, Admin!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">

            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-40"
            />

          </div>

          {/* Notification */}
          <button className="relative text-gray-600 hover:text-blue-600">
            <Bell size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={22} className="text-blue-600" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                John Doe
              </h3>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar
