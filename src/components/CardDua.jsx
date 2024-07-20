import React from 'react';

const CardDua = ({ unit, ruangan, persentase, konsumsi, snackPagi, lunch, snackSore }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 m-2 w-full">
      <div className="text-xl font-bold mb-2">UNIT INDUK {unit}</div>
      <div className="text-md mb-2">{ruangan}</div>
      <div className="flex items-center mb-2">
        <span className="mr-2">{persentase}%</span>
        <div className="w-16 h-16">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#ddd"
              strokeWidth="2.5"
            />
            <path className="circle"
              strokeDasharray={`${persentase}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#00acc1"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
      <div className="mb-2">
        Nominal Konsumsi 
        <h3>{konsumsi}</h3>
      </div>
      <div className="mb-2">
        <div>Snack Siang: {snackPagi}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${snackPagi}%` }}></div>
        </div>
      </div>
      <div className="mb-2">
        <div>Makan Siang: {lunch}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${lunch}%` }}></div>
        </div>
      </div>
      <div>
        <div>Snack Sore: {snackSore}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${snackSore}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CardDua;
