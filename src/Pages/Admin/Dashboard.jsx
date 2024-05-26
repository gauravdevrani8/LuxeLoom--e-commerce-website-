import React from 'react';
import { RiShoppingCart2Line, RiUserLine, RiFileList2Line } from 'react-icons/ri';
import DashboardTab from './DashboardTab';
import backgroundImage from '../../assets/background.jpg'; // Import your background image


const AdminDashboard = () => {
    // Dummy data for demonstration
    const totalProducts = 150;
    const totalOrders = 300;
    const totalUsers = 500;

    return (
        <div className="container max-w-screen-2xl p-10"style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className="text-3xl mb-6 font-semibold font-caveat text-center text-gray-900">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <DashboardCard icon={<RiShoppingCart2Line />} title="Total Products" value={totalProducts} />
                <DashboardCard icon={<RiFileList2Line />} title="Total Orders" value={totalOrders} />
                <DashboardCard icon={<RiUserLine />} title="Total Users" value={totalUsers} />
            </div>

            {/* Additional Sections */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-center text-gray-900">Additional Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AdditionalInfoCard title="Revenue" value="$50,000" />
                    <AdditionalInfoCard title="New Customers" value="100" />
                    <AdditionalInfoCard title="Pending Orders" value="20" />
                </div>
            </div>

            <div className="mt-12">
                <DashboardTab />
            </div>
        </div>
    );
};

// Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, value }) => {
    return (
        <div className="p-6 shadow-md  rounded flex flex-col items-center">
            <div className="text-3xl text-gray-700 mb-4">{icon}</div>
            <h2 className="text-md font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-sm font-bold">{value}</p>
        </div>
    );
};

// Reusable Additional Information Card Component
const AdditionalInfoCard = ({ title, value }) => {
    return (
        <div className="p-6 rounded shadow-md  flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};

export default AdminDashboard;
