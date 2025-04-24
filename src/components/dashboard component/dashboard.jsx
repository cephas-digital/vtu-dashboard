"use client"

import { useState } from "react"
import StatCard from "./stat-card"
import NotificationItem from "./notification-item"
import ActivityItem from "../dashboard component/activity-item."
import LineChart from "../dashboard component/line-chart"
import ProfileItem from "../dashboard component/profile-item"
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("active-users")



   // Data for Users by Location bar chart
   const usersData = [
    { location: "Nigeria", users: 20 },
    { location: "IB", users: 15 },
    { location: "USA", users: 30 },
    { location: "Lagos", users: 12 },
    { location: "ABJ", users: 18 },
    { location: "Ibadan", users: 25 },
  ]

  // Data for Sales by Location pie chart
  const salesData = [
    { location: "Lagos", value: 32.1, percentage: "32.1%" },
    { location: "ABJ", value: 22.0, percentage: "22.0%" },
    { location: "Ibadan", value: 33.9, percentage: "33.9%" },
    { location: "Other", value: 11.2, percentage: "11.2%" },
  ]

  // Colors for the charts
  const barColors = ["#8FD3C4", "#6366F1", "#000000", "#D1D5DB", "#8FD3C4", "#6366F1"]
  const pieColors = ["#8FD3C4", "#6366F1", "#000000", "#D1D5DB"]

  // Custom tooltip for bar chart
  const CustomBarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      )
    }
    return null
  }

  // Custom tooltip for pie chart
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="text-sm">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      )
    }
    return null
  }


  return (
   <div className="pl-5">
           <div className="lg:flex md:flex grid h-full lg:mr-[120px] md:mr-5 mr-0">
      {/* Main Content */}
      <div className="flex-1 flex flex-col pt-6 pr-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Overview</h1>  
            <select name="" id="" className="flex items-center text-md outline-none rounded-md px-3 py-1 lg:mr-5 md:mr-3 mr-[60px] ">
              <option value="">Monday</option>
              <option value="">Tueday</option>
              <option value="">Wednesday</option>
              <option value="">Thursday</option>
              <option value="">Friday</option>
              <option value="">Saturday</option>
              <option value="">Sunday</option>
            </select>
       
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex  gap-4 mb-8">
          <StatCard title="Affiliate Users" value="1000" change="-0.15%" isPositive={false} bgColor="bg-[#E6FDEB] w-[202px] h-[112px]" />
          <StatCard title="Stand-Alone Users" value="200" change="-0.01%" isPositive={false} bgColor="bg-[#FDE6EC] w-[202px] h-[112px]" />
          <StatCard title="New Users" value="300" change="+10%" isPositive={true} bgColor="bg-[#EDEEFC] w-[202px] h-[112px]" />
          <StatCard title="Active Users" value="2500" change="+12.05%" isPositive={true} bgColor="bg-[#E6F1FD] w-[202px] h-[112px]" />
        </div>

        {/* Chart Section */}
        <div className="mb-8 ">
          <div className="lg:flex md:flex grid grid-cols-2 items-center lg:gap-5 md:gap-5  gap-3 mb-2">
            <h2 className="text-base font-semibold mr-6">Total Users</h2>
            <div className="flex items-center space-x-4 text-sm">
              <button
                className={`${activeTab === "active-users" ? "text-gray-800" : "text-gray-400"}`}
                onClick={() => setActiveTab("active-users")}
              >
                Active users
              </button>
            </div>
            <div className="flex items-center mr-4">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <span>This year</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#AEC7ED] rounded-full mr-2"></div>
              <span>Last year</span>
            </div>

          </div>
          
          <LineChart />
         

         
         
  
        </div>

        {/* Bottom Sections */}

        
        <div className="w-full mt-5   ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Users by Location Bar Chart */}
        <div className="  rounded-lg ">
          <h2 className="text-lg font-medium mb-4 lg:ml-8 md:ml-8 ml-2 ">Users by Location</h2>
          <div className="h-[250px] ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usersData} margin={{ top: 10, right: 55, left: 0, bottom: 20 }} >
                <XAxis dataKey="location" tickLine={false} axisLine={false} fontSize={12} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={8} />
                <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "transparent" }} />
                <Bar dataKey="users" radius={[4, 4, 0, 0]} barSize={30}>
                  {usersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Location Pie Chart */}
        <div className="  rounded-lg  ">
          <h2 className="text-lg font-medium mb-4 ml-5">Sales by Location</h2>
          <div className="lg:flex md:flex grid  ">
            <div className="h-[250px] flex-1 ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    nameKey="location"
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-col  justify-center space-y-2 ml-5 ">
              {salesData.map((entry, index) => (
                <div key={index} className="flex items-center ">
                  <div className="w-3 h-3 mr-2" style={{ backgroundColor: pieColors[index % pieColors.length] }}></div>
              <div className="grid grid-cols-2 gap-16">
                  <h3 className="text-sm">{entry.location}</h3>
                  <h3 className="text-sm">{entry.percentage}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Right Sidebar */}
      <div className=" block w-80 border-l border-gray-200 p-6 ">
        {/* Notifications Section */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <NotificationItem time="Just now" />
            <NotificationItem time="50 minutes ago" />
            <NotificationItem time="12 hours ago" />
            <NotificationItem time="Tuesday, 1:00 pm" />
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4">Activities</h2>
          <div className="space-y-4">
            <ActivityItem time="Just now" />
            <ActivityItem time="50 minutes ago" />
            <ActivityItem time="3 hours ago" />
            <ActivityItem time="2 days ago" />
            <ActivityItem time="20th February, 2023" />
          </div>
        </div>

        {/* Frequently Viewed Section */}
        <div>
          <h2 className="text-base font-semibold mb-4">Frequently Viewed</h2>
          <div className="space-y-4">
            <ProfileItem name="Natasha Jones" role="Affilite User" />
            <ProfileItem name="Natasha Jones" role="Affilite User" />
            <ProfileItem name="Natasha Jones" role="Affilite User" />
            <ProfileItem name="Natasha Jones" role="Affilite User" />
            <ProfileItem name="Natasha Jones" role="Affilite User" />
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}
