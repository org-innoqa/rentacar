import React, { useState } from 'react';
import { Car, Phone, Mail, MapPin, Filter } from 'lucide-react';

const cars = [
  { id: 1, name: 'Renault Clio', type: 'Ekonomik', price: 800, image: '🚗' },
  { id: 2, name: 'Toyota Corolla', type: 'Sedan', price: 1200, image: '🚗' },
  { id: 3, name: 'Volkswagen Passat', type: 'Lüks', price: 2500, image: '🚗' },
  { id: 4, name: 'Hyundai i20', type: 'Ekonomik', price: 900, image: '🚗' },
  { id: 5, name: 'BMW 3 Serisi', type: 'Lüks', price: 3500, image: '🚗' },
];

export default function App() {
  const [type, setType] = useState('Tümü');
  const [maxPrice, setMaxPrice] = useState(5000);

  const filteredCars = cars.filter(car => 
    (type === 'Tümü' || car.type === type) && car.price <= maxPrice
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Araç Kiralama Hizmetleri</h1>
        <p className="text-gray-400">İhtiyacınıza uygun aracı seçin, bizimle iletişime geçin.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="bg-gray-800 p-6 rounded-xl h-fit">
          <h2 className="flex items-center gap-2 font-bold mb-6"><Filter size={20}/> Filtrele</h2>
          <div className="mb-6">
            <label className="block text-sm mb-2">Araç Türü</label>
            <select className="w-full bg-gray-700 p-2 rounded" onChange={(e) => setType(e.target.value)}>
              <option>Tümü</option>
              <option>Ekonomik</option>
              <option>Sedan</option>
              <option>Lüks</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2">Maksimum Fiyat: {maxPrice} TL</label>
            <input type="range" min="500" max="5000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
          </div>
        </aside>

        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="text-6xl mb-4">{car.image}</div>
              <h3 className="text-xl font-bold">{car.name}</h3>
              <p className="text-blue-400">{car.type}</p>
              <p className="text-2xl font-bold mt-2">{car.price} TL <span className="text-sm font-normal text-gray-400">/ gün</span></p>
            </div>
          ))}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-20 border-t border-gray-800 pt-10 grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-3"><Phone className="text-blue-400" /> 0555 000 00 00</div>
        <div className="flex items-center gap-3"><Mail className="text-blue-400" /> info@arackiralama.com</div>
        <div className="flex items-center gap-3"><MapPin className="text-blue-400" /> İstanbul, Türkiye</div>
      </footer>
    </div>
  );
}