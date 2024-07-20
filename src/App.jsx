import { useEffect } from 'react';
import About from './components/About';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useState } from 'react';
import CardDua from './components/CardDua';
import LabelDateInput from './components/LabelDateInput';

const App = () => {
  // const data = [
  //   { unitInduk: 1, namaRuangan: 'Ruangan 1', persentasePemakaian: 70, nominalKonsumsi: '1000', snackProgress: 50, makanSiangProgress: 70, makanSoreProgress: 30 },
  //   { unitInduk: 2, namaRuangan: 'Ruangan 2', persentasePemakaian: 80, nominalKonsumsi: '2000', snackProgress: 60, makanSiangProgress: 80, makanSoreProgress: 40 },
  //   { unitInduk: 3, namaRuangan: 'Ruangan 3', persentasePemakaian: 90, nominalKonsumsi: '3000', snackProgress: 70, makanSiangProgress: 90, makanSoreProgress: 50 },
  //   { unitInduk: 4, namaRuangan: 'Ruangan 1', persentasePemakaian: 75, nominalKonsumsi: '1500', snackProgress: 55, makanSiangProgress: 75, makanSoreProgress: 35 },
  //   { unitInduk: 5, namaRuangan: 'Ruangan 2', persentasePemakaian: 85, nominalKonsumsi: '2500', snackProgress: 65, makanSiangProgress: 85, makanSoreProgress: 45 },
  //   // tambahkan lebih banyak data sesuai kebutuhan
  // ];

  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/bookings')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Navbar />
      {/* <Hero />
      <Skills />
      <About /> */}
      {/* <div className="flex flex-wrap">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
      </div> */}

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Periode</h1>
        <form>
          <LabelDateInput
            label="Select Date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </form>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {data.map((item, index) => (
          <CardDua
            key={index}
            unit={item.id}
            ruangan={item.roomName}
            persentase={86.34}
            konsumsi={"Rp 35.000.000"}
            snackPagi={14}
            lunch={28}
            snackSore={14}
          />
        ))}
      </div>
      {/* <Projects /> */}
    </>
  );
};
export default App;
