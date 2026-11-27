
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import StatCard from './components/StatCard'
import RevenueChart from './components/RevenueChart'

import {
  Users,
  ShoppingCart,
  Wallet,
  Package,
} from 'lucide-react'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 min-w-0">

        {/* Navbar */}
        <Navbar />

        <div className="p-8">

          {/* Page Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Overview
          </h2>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Total Revenue"
              value="$75,000"
              change="12.5%"
              icon={Wallet}
              color="blue"
            />

            <StatCard
              title="Total Users"
              value="5,000"
              change="8.2%"
              icon={Users}
              color="green"
            />

            <StatCard
              title="Total Orders"
              value="1,250"
              change="15.3%"
              icon={ShoppingCart}
              color="blue"
            />

            <StatCard
              title="Total Products"
              value="850"
              change="5.4%"
              icon={Package}
              color="orange"
            />

          </div>

          {/* Revenue Analytics Chart */}
          <div className="mt-8">
            <RevenueChart />
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
