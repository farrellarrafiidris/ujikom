import React from 'react'
import BodyLayout from '@/Layouts/BodyLayout'
import LogoDate from '../Logo_date'
import Chart from './Chart'

const dailySell = [
  {
  name: 'Fachry',
  value: 11
  },
  {
    name: 'Fachry',
    value: 11
  },
  {
    name: 'Fachry',
    value: 11
  }

]
const barData =[
  {
    label:'Senin',
    value: 50
  },
  {
    label:'Selasa',
    value: 50
  },
  {
    label:'Rabu',
    value: 50
  },
  {
    label:'Kamis',
    value: 50
  },
  {
    label:'Jumat',
    value: 50
  },
  {
    label:'Sabtu',
    value: 50
  },
  {
    label:'Minggu',
    value: 50
  }
]
function Home() {
  return (
    <BodyLayout>
      <div className="w-full h-[100vh] sm:px-[20px] lg:px-[35px] lg:flex lg:gap-x-[30px]">
        <div className="w-full h-fit pt-[50px] lg:grow lg:basis-1/2">
          <LogoDate/>
          {/* header */}
          <div className="w-full h-fit mt-[35px] flex flex-col gap-y-[15px] lg:flex-row lg:gap-x-[25px]">
            <div className="h-[85px] w-full bg-[#F1F1F1] border-2 rounded-3xl cursor-pointer flex items-center px-[17px] lg:px-[10px] lg:justify-center">
              <div className="h-[58px] w-[58px] bg-gray-200 rounded-full font-bold flex items-center justify-center text-2xl"><p>Rp.</p></div>
              <div className="ml-2">
                <p className='font-bold text-[18px]'>1.592 Juta</p>
                <p className='opacity-50'>Pendapatan Harian</p>
              </div>
            </div>
            <div className="h-[85px] w-full bg-[#F1F1F1] border-2 rounded-3xl cursor-pointer flex items-center px-[17px] lg:px-[10px] lg:justify-center">
              <div className="h-[58px] w-[58px] bg-gray-200 rounded-full font-bold flex items-center justify-center text-2xl"><p>Rp.</p></div>
              <div className="ml-2">
                <p className='font-bold text-[18px]'>1.592 Juta</p>
                <p className='opacity-50'>Pendapatan Bulanan</p>
              </div>
            </div>
            <div className="h-[85px] w-full bg-[#F1F1F1] border-2 rounded-3xl cursor-pointer flex items-center px-[17px] lg:px-[10px] lg:justify-center">
              <div className="h-[58px] w-[58px] bg-gray-200 rounded-full font-bold flex items-center justify-center text-2xl"><p>Rp.</p></div>
              <div className="ml-2">
                <p className='font-bold text-[18px]'>1.592 Juta</p>
                <p className='opacity-50'>Pendapatan Tahunan</p>
              </div>
            </div>
          </div>
          {/* Pendapatan harian */}
        <Chart/>
      </div>


        <div className="w-full h-fit flex flex-col gap-y-[15px] mt-[15px] pb-[80px] lg:basis-1/3 lg:mt-[145px]">
          <div className="w-full h-[260px] rounded-[25px] bg-white border px-[18px] pt-[28px]">
            <p className='text-xl font-bold'>Pantau Kasir Kamu 📹</p>
            <p className='opacity-50'>Apa karyawanmu aktif?</p>
            <div className="mt-[15px]">

              <div className="flex gap-x-[8px] justify-between items-center font-bold h-[45px] bg-gray-200 w-full px-[20px] rounded-[5px]">
                <p>Fachry Fauzan</p>
                <ul className='list-disc'>
                  <li>Sedang Aktif</li>
                </ul>
              </div>
              <div className="flex gap-x-[8px] justify-between items-center font-bold h-[45px] bg-white w-full px-[20px] rounded-[5px]">
                <p>Fachry Fauzan</p>
                <ul className='list-disc'>
                  <li>Sedang Aktif</li>
                </ul>
              </div>
              <div className="flex gap-x-[8px] justify-between items-center font-bold h-[45px] bg-gray-200 w-full px-[20px] rounded-[5px]">
                <p>Fachry Fauzan</p>
                <ul className='list-disc'>
                  <li>Sedang Aktif</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="w-full h-[260px] rounded-[25px] bg-white border px-[18px] pt-[28px]">
            <p className='text-xl font-bold'>Penjualan Hari ini</p>
            <p className='opacity-50'>Lihat apa saja yang terjual</p>
            <div className="mt-[15px] even:bg-gray-200 odd:bg-white">

              {dailySell.map((items, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} flex gap-x-[8px] justify-between items-center font-bold h-[45px] w-full px-[20px] rounded-[5px]`}>
                  <p>Fachry Fauzan</p>
                  <p>11</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BodyLayout>
  )
}

export default Home