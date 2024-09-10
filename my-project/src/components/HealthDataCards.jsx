import React from 'react';
import { LuStethoscope } from "react-icons/lu";
import { FaVialCircleCheck } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { FaMedkit } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";


const HealthDataCards = () => {
  const healthData = [
    {
      title: "Heart Rate",
      description: "Monitor and track your heart rate with advanced sensors.",
      icon:<RiMentalHealthFill className="text-4xl text-blue-500" /> ,
    },
    {
      title: "Blood Pressure",
      description: "Keep an eye on your blood pressure for better health management.",
      icon: <LuStethoscope className="text-4xl text-blue-500" />,
    },
    {
      title: "Doctors Availability",
      description: "Access doctor schedules and book your appointments online.",
      icon: <FaVialCircleCheck className="text-4xl text-green-500" />,
    },
    {
      title: "Lab Tests",
      description: "Get your lab test results online with detailed explanations.",
      icon: <FaVialCircleCheck className="text-4xl text-purple-500" />,
    },
    {
      title: "Patient Care",
      description: "We provide round-the-clock patient care services.",
      icon: <FaProcedures className="text-4xl text-yellow-500" />,
    },
    {
      title: "Emergency",
      description: "Our emergency services are available 24/7 for critical care.",
      icon: <FaMedkit className="text-4xl text-orange-500" />,
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Health Data Insights</h2>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {healthData.map((data, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              {data.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Rows */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {healthData.map((data, index) => (
          <div 
            key={index + 6} 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              {data.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {healthData.map((data, index) => (
          <div 
            key={index + 12} 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-6">
              {data.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HealthDataCards;
