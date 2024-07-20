import React from 'react';

const Card = ({ unitInduk, namaRuangan, persentasePemakaian, nominalKonsumsi, snackProgress, makanSiangProgress, makanSoreProgress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-1/5">
      <h2 className="text-xl font-bold">Unit Induk {unitInduk}</h2>
      <p>Nama Ruangan: {namaRuangan}</p>
      <div className="flex items-center my-2">
        <span>Persentase Pemakaian: </span>
        <div className="relative ml-2">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
            <span>{persentasePemakaian}%</span>
          </div>
        </div>
      </div>
      <p>Nominal Konsumsi: {nominalKonsumsi}</p>
      <div>
        <p>Snack Pagi: </p>
        <div className="bg-gray-200 rounded-full h-4 w-full">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${snackProgress}%` }}></div>
        </div>
      </div>
      <div>
        <p>Makan Siang: </p>
        <div className="bg-gray-200 rounded-full h-4 w-full">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${makanSiangProgress}%` }}></div>
        </div>
      </div>
      <div>
        <p>Snack Sore: </p>
        <div className="bg-gray-200 rounded-full h-4 w-full">
          <div className="bg-yellow-500 h-4 rounded-full" style={{ width: `${makanSoreProgress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
