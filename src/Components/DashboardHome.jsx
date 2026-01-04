import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/dashboard-stats")
      .then(res => setStats(res.data));

    axios.get("http://localhost:3000/dashboard-bookings-chart")
      .then(res => setChartData(res.data));

    axios.get("http://localhost:3000/rents")
      .then(res => setCars(res.data));
  }, []);

  return (
    <div className="p-6 space-y-8">
      
      {/* ===== Overview Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-gray-500">Total Cars</h3>
          <p className="text-3xl font-bold">{stats.totalCars || 0}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-gray-500">Available Cars</h3>
          <p className="text-3xl font-bold text-green-600">
            {stats.availableCars || 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="text-gray-500">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">
            {stats.totalBookings || 0}
          </p>
        </div>
      </div>

      {/* ===== Chart ===== */}
      <div className="bg-white p-6 rounded-xl shadow h-[300px]">
        <h2 className="text-lg font-semibold mb-4">
          Bookings Per Day
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ===== Data Table ===== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          All Cars
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price/Day</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car._id}>
                  <td>{car.name}</td>
                  <td>{car.category}</td>
                  <td>${car.rentPerDay}</td>
                  <td>
                    <span className={`px-2 py-1 rounded text-white ${
                      car.status === "Available"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}>
                      {car.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DashboardHome;
