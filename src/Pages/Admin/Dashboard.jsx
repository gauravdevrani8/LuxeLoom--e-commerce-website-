import React from 'react';
import { RiShoppingCart2Line, RiUserLine, RiFileList2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import DashboardTab from './DashboardTab';

const AdminDashboard = () => {
    // Dummy data for demonstration
    const totalProducts = 150;
    const totalOrders = 300;
    const totalUsers = 500;
    const revenue = "$50,000";

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl mb-6 font-semibold text-center text-gray-900">Admin Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <DashboardCard icon={<RiShoppingCart2Line />} title="Total Products" value={totalProducts} />
                <DashboardCard icon={<RiFileList2Line />} title="Total Orders" value={totalOrders} />
                <DashboardCard icon={<RiUserLine />} title="Total Users" value={totalUsers} />
                <AdditionalInfoCard icon={<RiMoneyDollarCircleLine />} title="Revenue" value={revenue} />
            </div>

            {/* Dashboard Tab Component */}
            <div className="mt-8">
                <DashboardTab />
            </div>
        </div>
    );
};

// Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, value }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-400 text-white">
                {icon}
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{value}</p>
            </div>
        </div>
    );
};

// Reusable Additional Information Card Component
const AdditionalInfoCard = ({ icon, title, value }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-400 text-white">
                {icon}
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{value}</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
